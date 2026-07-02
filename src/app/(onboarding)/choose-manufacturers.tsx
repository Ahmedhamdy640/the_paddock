import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StepHeader } from '../../components/step-header';
import { SelectionCard } from '../../components/selection-card';
import { AccentButton } from '../../components/accent-button';
import { useOnboarding } from '../../contexts/onboarding-context';
import { MANUFACTURERS_DATA } from '../../data/manufacturers-data';
import { colors, spacing, typography } from '../../theme/theme';

export default function ChooseManufacturersScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { selectedSeries, selectedManufacturers, toggleManufacturer } = useOnboarding();

  const filteredManufacturers = useMemo(() => {
    return MANUFACTURERS_DATA.filter((m) =>
      m.seriesIds.some((sId) => selectedSeries.includes(sId))
    );
  }, [selectedSeries]);

  return (
    <View style={styles.container}>
      <StepHeader 
        currentStep={2} 
        totalSteps={4} 
        onBack={() => router.back()} 
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>
          CHOOSE YOUR <Text style={styles.titleHighlight}>MANUFACTURERS</Text>
        </Text>
        <Text style={styles.subtitle}>Follow your favorite brands and factory constructors.</Text>
      </View>

      <FlatList
        data={filteredManufacturers}
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
            selected={selectedManufacturers.includes(item.id)}
            onSelect={toggleManufacturer}
            style={styles.card}
          />
        )}
      />

      <View style={[styles.footer, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Text style={styles.counterText}>
          {selectedManufacturers.length} OF {filteredManufacturers.length} BRANDS SELECTED
        </Text>
        <AccentButton
          title="NEXT: CHOOSE GRID TEAMS →"
          onPress={() => router.push('/(onboarding)/choose-teams')}
          disabled={selectedManufacturers.length === 0}
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
    marginBottom: spacing.lg,
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
