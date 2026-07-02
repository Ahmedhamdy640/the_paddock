import React, { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { RaceEvent } from '../data/calendar-data';
import {
  getDaysUntil,
  formatSessionTime,
  getSeriesLabel,
  getSessionsForDate,
} from '../hooks/use-calendar';
import { colors, spacing, borderRadius } from '../theme/theme';

interface RaceEventCardProps {
  event: RaceEvent;
  selectedDateKey: string;
  onEnterHub?: (eventId: string) => void;
}

export function RaceEventCard({
  event,
  selectedDateKey,
  onEnterHub,
}: RaceEventCardProps): React.JSX.Element {
  const daysUntil = getDaysUntil(event.startDate);
  const sessionsForDay = getSessionsForDate(event, selectedDateKey);
  const seriesLabel = getSeriesLabel(event.seriesId, event.round);

  const countdownText =
    daysUntil <= 0 ? 'HAPPENING NOW' : `IN ${daysUntil} DAY${daysUntil === 1 ? '' : 'S'}`;

  const handleEnterHub = useCallback(() => {
    onEnterHub?.(event.id);
  }, [event.id, onEnterHub]);

  // Map series to accent color
  const seriesColor: Record<string, string> = {
    f1: '#FF1801',
    wec: '#1C5B99',
    gt: '#F3A900',
  };
  const accentColor = seriesColor[event.seriesId] ?? colors.accent;

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: borderRadius.lg,
        borderCurve: 'continuous',
        overflow: 'hidden',
        marginBottom: spacing.lg,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      {/* Red top accent line */}
      <View
        style={{
          height: 3,
          backgroundColor: accentColor,
        }}
      />

      {/* Card content */}
      <View style={{ padding: spacing.md }}>
        {/* Series badge + countdown row */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: spacing.sm,
          }}
        >
          <View
            style={{
              backgroundColor: '#2A2A2A',
              paddingHorizontal: spacing.sm + 2,
              paddingVertical: spacing.xs,
              borderRadius: borderRadius.sm,
            }}
          >
            <Text
              style={{
                color: colors.text,
                fontSize: 10,
                fontWeight: '700',
                letterSpacing: 1.5,
              }}
            >
              {seriesLabel}
            </Text>
          </View>

          <Text
            style={{
              color: accentColor,
              fontSize: 11,
              fontWeight: '700',
              letterSpacing: 1,
            }}
          >
            {countdownText}
          </Text>
        </View>

        {/* Event title */}
        <Text
          style={{
            color: colors.text,
            fontSize: 28,
            fontWeight: '900',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            lineHeight: 32,
            marginBottom: spacing.xs,
          }}
        >
          {event.title}
        </Text>

        {/* Circuit + location */}
        <Text
          style={{
            color: colors.textMuted,
            fontSize: 11,
            fontWeight: '600',
            letterSpacing: 1,
            textTransform: 'uppercase',
            marginBottom: spacing.md,
          }}
        >
          {event.circuit} • {event.location}
        </Text>

        {/* Session schedule */}
        {sessionsForDay.length > 0 && (
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: colors.border,
              paddingTop: spacing.sm,
              marginBottom: spacing.md,
            }}
          >
            {sessionsForDay.map((session) => (
              <View
                key={session.id}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: spacing.sm,
                }}
              >
                <Text
                  style={{
                    color: session.isMainEvent ? colors.text : colors.textMuted,
                    fontSize: 13,
                    fontWeight: session.isMainEvent ? '700' : '500',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  {session.name}
                </Text>
                <Text
                  style={{
                    color: session.isMainEvent ? colors.accent : colors.textMuted,
                    fontSize: 13,
                    fontWeight: session.isMainEvent ? '700' : '500',
                    letterSpacing: 0.5,
                    fontVariant: ['tabular-nums'],
                  }}
                >
                  {formatSessionTime(session.dateTime)}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Enter Hub button */}
        <Pressable
          onPress={handleEnterHub}
          style={({ pressed }) => ({
            backgroundColor: '#1E1E1E',
            borderRadius: borderRadius.md,
            borderCurve: 'continuous',
            paddingVertical: spacing.md,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: spacing.sm,
            borderWidth: 1,
            borderColor: colors.border,
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 14,
              fontWeight: '800',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            ENTER HUB 🏁
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
