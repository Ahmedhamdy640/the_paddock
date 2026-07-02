import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StepHeader } from '../../components/step-header';
import { SelectionCard } from '../../components/selection-card';
import { AccentButton } from '../../components/accent-button';
import { useOnboarding } from '../../contexts/onboarding-context';
import { SERIES_DATA } from '../../data/series-data';
import { colors, spacing, typography } from '../../theme/theme';

export default function SelectSeriesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { selectedSeries, toggleSeries } = useOnboarding();

  return (
    <View style={styles.container}>
      <StepHeader 
        currentStep={1} 
        totalSteps={4} 
        onBack={() => router.back()} 
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>
          SELECT <Text style={styles.titleHighlight}>SERIES</Text>
        </Text>
        <Text style={styles.subtitle}>Choose the racing disciplines to load.</Text>
      </View>

      <FlatList
        data={SERIES_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SelectionCard
            id={item.id}
            title={item.name}
            variant="image"
            imageUri={item.image}
            selected={selectedSeries.includes(item.id)}
            onSelect={toggleSeries}
            style={styles.card}
          />
        )}
      />

      <View style={[styles.footer, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Text style={styles.counterText}>
          {selectedSeries.length} OF {SERIES_DATA.length} SELECTED
        </Text>
        <AccentButton
          title="NEXT: CHOOSE MANUFACTURERS →"
          onPress={() => router.push('/(onboarding)/choose-manufacturers')}
          disabled={selectedSeries.length === 0}
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
  card: {
    marginBottom: spacing.md,
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
