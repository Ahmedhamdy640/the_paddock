import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../theme/theme';

interface FilterPillProps {
  label: string;
  active: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

export function FilterPill({ label, active, onPress, style }: FilterPillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.pill,
        active ? styles.activePill : styles.inactivePill,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, active ? styles.activeText : styles.inactiveText]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.round,
    borderWidth: 1,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  activePill: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  inactivePill: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: typography.caption.fontSize,
    fontWeight: '700',
    letterSpacing: typography.caption.letterSpacing,
  },
  activeText: {
    color: colors.text,
  },
  inactiveText: {
    color: colors.textMuted,
  },
});
