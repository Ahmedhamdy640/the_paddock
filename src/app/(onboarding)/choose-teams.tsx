import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StepHeader } from '../../components/step-header';
import { SelectionCard } from '../../components/selection-card';
import { AccentButton } from '../../components/accent-button';
import { FilterPill } from '../../components/filter-pill';
import { useOnboarding } from '../../contexts/onboarding-context';
import { TEAMS_DATA } from '../../data/teams-data';
import { SERIES_DATA } from '../../data/series-data';
import { colors, spacing, typography } from '../../theme/theme';

export default function ChooseTeamsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { selectedSeries, selectedTeams, toggleTeam } = useOnboarding();
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const availableSeries = useMemo(() => {
    return SERIES_DATA.filter((s) => selectedSeries.includes(s.id));
  }, [selectedSeries]);

  const filteredTeams = useMemo(() => {
    return TEAMS_DATA.filter((t) => {
      // Must be in a selected series
      if (!selectedSeries.includes(t.seriesId)) return false;
      // Must match active filter if not ALL
      if (activeFilter !== 'ALL' && t.seriesId !== activeFilter) return false;
      return true;
    });
  }, [selectedSeries, activeFilter]);

  return (
    <View style={styles.container}>
      <StepHeader 
        currentStep={3} 
        totalSteps={4} 
        onBack={() => router.back()} 
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>
          CHOOSE YOUR <Text style={styles.titleHighlight}>TEAMS</Text>
        </Text>
        <Text style={styles.subtitle}>Follow your favorite factory teams to prioritize their feeds.</Text>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContent}>
          <FilterPill 
            label="ALL" 
            active={activeFilter === 'ALL'} 
            onPress={() => setActiveFilter('ALL')} 
          />
          {availableSeries.map((s) => (
            <FilterPill 
              key={s.id} 
              label={s.name} 
              active={activeFilter === s.id} 
              onPress={() => setActiveFilter(s.id)} 
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredTeams}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SelectionCard
            id={item.id}
            title={item.name}
            variant="icon"
            icon={item.icon}
            selected={selectedTeams.includes(item.id)}
            onSelect={toggleTeam}
            style={styles.card}
          />
        )}
      />

      <View style={[styles.footer, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Text style={styles.counterText}>
          {selectedTeams.length} OF {filteredTeams.length} TEAMS SELECTED
        </Text>
        <AccentButton
          title="NEXT: CONFIRMATION →"
          onPress={() => router.push('/(onboarding)/confirmation')}
          disabled={selectedTeams.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: typography.h1.fontSize,
    fontWeight: typography.h1.fontWeight,
    fontStyle: typography.h1.fontStyle,
    marginBottom: spacing.xs,
  },
  titleHighlight: {
    color: colors.accent,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: typography.body.fontSize,
  },
  filtersContainer: {
    marginBottom: spacing.md,
  },
  filtersContent: {
    paddingHorizontal: spacing.lg,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  card: {
    width: '48%',
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  counterText: {
    color: colors.textMuted,
    fontSize: typography.caption.fontSize,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing.md,
    letterSpacing: 1,
  },
});
