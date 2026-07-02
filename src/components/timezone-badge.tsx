import React from 'react';
import { View, Text } from 'react-native';
import { colors, spacing } from '../theme/theme';

function getUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return 'UTC';
  }
}

export function TimezoneBadge(): React.JSX.Element {
  const timezone = getUserTimezone();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 20,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs + 2,
        gap: spacing.sm,
      }}
    >
      <Text style={{ color: colors.textMuted, fontSize: 11 }}>⏱</Text>
      <Text
        style={{
          color: colors.textMuted,
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
        }}
      >
        {timezone.replace('_', '/')} {'//  '}
        <Text style={{ color: colors.success }}>LIVE</Text>
      </Text>
    </View>
  );
}
