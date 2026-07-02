import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/theme';

interface SegmentControlProps {
  options: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
}

export function SegmentControl({ options, selectedIndex, onChange }: SegmentControlProps) {
  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        const isActive = index === selectedIndex;
        return (
          <Pressable
            key={option}
            onPress={() => onChange(index)}
            style={[styles.segment, isActive && styles.activeSegment]}
          >
            <Text style={[styles.text, isActive && styles.activeText]}>
              {option.toUpperCase()}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: borderRadius.sm,
    padding: 2,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  segment: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: borderRadius.sm - 2,
  },
  activeSegment: {
    backgroundColor: colors.accent,
  },
  text: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  activeText: {
    color: colors.text,
  },
});
