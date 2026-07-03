import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DayScroller } from '../../../components/day-scroller';
import { MonthPicker } from '../../../components/month-picker';
import { RaceEventCard } from '../../../components/race-event-card';
import { TimezoneBadge } from '../../../components/timezone-badge';
import { getCalendarEvents } from '../../../data/calendar-data';
import type { RaceEvent } from '../../../data/calendar-data';
import {
  useCalendarDays,
  useAvailableMonths,
  getEventsForDate,
  getTodayKey,
} from '../../../hooks/use-calendar';
import { colors, spacing } from '../../../theme/theme';

export default function HomeScreen(): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const availableMonths = useAvailableMonths();

  // Default to current month, or closest available month with events
  const currentMonth = new Date().getMonth();
  const initialMonth = availableMonths.includes(currentMonth)
    ? currentMonth
    : availableMonths.find((m) => m >= currentMonth) ?? availableMonths[0] ?? currentMonth;

  const [selectedMonth, setSelectedMonth] = useState<number>(initialMonth);
  const days = useCalendarDays(selectedMonth);
  const [selectedDateKey, setSelectedDateKey] = useState<string>(getTodayKey);

  // Auto-select first available day when month changes or days update
  useEffect(() => {
    if (days.length > 0 && !days.find((d) => d.dateKey === selectedDateKey)) {
      setSelectedDateKey(days[0].dateKey);
    }
  }, [days, selectedDateKey]);

  const events = useMemo(() => getCalendarEvents(), []);

  const eventsForDay = useMemo(
    () => getEventsForDate(selectedDateKey, events),
    [selectedDateKey, events],
  );

  const handleSelectDate = useCallback((dateKey: string) => {
    setSelectedDateKey(dateKey);
  }, []);

  const handleSelectMonth = useCallback((month: number) => {
    setSelectedMonth(month);
  }, []);

  const renderEvent = useCallback(
    ({ item }: { item: RaceEvent }) => (
      <RaceEventCard event={item} selectedDateKey={selectedDateKey} />
    ),
    [selectedDateKey],
  );

  const keyExtractor = useCallback((item: RaceEvent) => item.id, []);

  const ListEmptyComponent = useMemo(
    () => (
      <View
        style={{
          paddingVertical: spacing.xxl * 2,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: colors.textMuted,
            fontSize: 14,
            fontWeight: '600',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          No events on this day
        </Text>
        <Text
          style={{
            color: colors.textMuted,
            fontSize: 12,
            marginTop: spacing.sm,
            opacity: 0.6,
          }}
        >
          Swipe to explore other dates
        </Text>
      </View>
    ),
    [],
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: insets.top }}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.md,
          paddingBottom: spacing.md,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: '900',
            fontStyle: 'italic',
            color: colors.text,
            marginBottom: spacing.sm,
          }}
        >
          THE{' '}
          <Text style={{ color: colors.accent }}>PADDOCK</Text>
        </Text>

        <TimezoneBadge />
      </View>

      {/* Month Picker + Day Scroller */}
      <View style={{ gap: spacing.md, paddingVertical: spacing.sm }}>
        <View style={{ paddingHorizontal: spacing.lg }}>
          <MonthPicker
            selectedMonth={selectedMonth}
            availableMonths={availableMonths}
            onSelectMonth={handleSelectMonth}
          />
        </View>

        <DayScroller
          days={days}
          selectedDateKey={selectedDateKey}
          onSelectDate={handleSelectDate}
        />
      </View>

      {/* Events List */}
      <FlatList
        data={eventsForDay}
        keyExtractor={keyExtractor}
        renderItem={renderEvent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.md,
          paddingBottom: insets.bottom + spacing.xxl,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
