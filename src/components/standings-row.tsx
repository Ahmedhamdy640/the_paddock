import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../theme/theme';

interface StandingsRowProps {
  rank: number;
  name: string;
  points: number;
  subtitle?: string; // Team name for drivers
}

export function StandingsRow({ rank, name, points, subtitle }: StandingsRowProps) {
  const isTopThree = rank <= 3;

  return (
    <View style={styles.container}>
      <View style={styles.rankContainer}>
        <Text style={[styles.rankText, isTopThree && styles.topRankText]}>{rank}</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
      </View>
      
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>{points} <Text style={styles.ptsLabel}>PTS</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rankContainer: {
    width: 30,
    alignItems: 'center',
    marginRight: spacing.md,
  },
  rankText: {
    color: colors.textMuted,
    fontSize: typography.h2.fontSize,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  topRankText: {
    color: colors.accent,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  subtitleText: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  pointsContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  pointsText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  ptsLabel: {
    fontSize: 10,
    color: colors.textMuted,
    fontStyle: 'normal',
  },
});
