import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme/theme';

interface StepHeaderProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
}

export function StepHeader({ currentStep, totalSteps, onBack }: StepHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.md }]}>
      {onBack ? (
        <Pressable onPress={onBack} style={styles.backButton} hitSlop={10}>
          <Text style={styles.backText}>← BACK</Text>
        </Pressable>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.stepText}>
        STEP {currentStep} / {totalSteps}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: colors.background,
  },
  backButton: {
    padding: spacing.xs,
  },
  backText: {
    color: colors.textMuted,
    fontSize: typography.body.fontSize,
    fontWeight: '600',
  },
  placeholder: {
    width: 60,
  },
  stepText: {
    color: colors.accent,
    fontSize: typography.caption.fontSize,
    fontWeight: '700',
    letterSpacing: typography.caption.letterSpacing,
  },
});
