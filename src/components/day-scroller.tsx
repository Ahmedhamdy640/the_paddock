import React, { useCallback, useRef, useEffect } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { colors, spacing } from '../theme/theme';

interface DayItem {
  dateKey: string;
  dayName: string;
  dayNumber: string;
  monthName: string;
  isToday: boolean;
}

interface DayScrollerProps {
  days: DayItem[];
  selectedDateKey: string;
  onSelectDate: (dateKey: string) => void;
}

const DAY_CELL_WIDTH = 64;
const DAY_CELL_GAP = 8;

function DayCell({
  item,
  isSelected,
  onPress,
}: {
  item: DayItem;
  isSelected: boolean;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        width: DAY_CELL_WIDTH,
        paddingVertical: spacing.sm + 2,
        alignItems: 'center',
        borderRadius: 12,
        borderCurve: 'continuous',
        borderWidth: isSelected ? 1.5 : 1,
        borderColor: isSelected ? colors.accent : colors.border,
        backgroundColor: isSelected ? 'rgba(255, 23, 68, 0.1)' : 'transparent',
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text
        style={{
          color: isSelected ? colors.accent : colors.textMuted,
          fontSize: 9,
          fontWeight: '600',
          letterSpacing: 1,
          marginBottom: 2,
        }}
      >
        {item.monthName}
      </Text>
      <Text
        style={{
          color: isSelected ? colors.accent : colors.textMuted,
          fontSize: 10,
          fontWeight: '700',
          letterSpacing: 1,
          marginBottom: 4,
        }}
      >
        {item.dayName}
      </Text>
      <Text
        style={{
          color: isSelected ? colors.text : colors.textMuted,
          fontSize: 24,
          fontWeight: '800',
          fontVariant: ['tabular-nums'],
        }}
      >
        {item.dayNumber}
      </Text>
      {item.isToday && (
        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: colors.accent,
            marginTop: 4,
          }}
        />
      )}
    </Pressable>
  );
}

export function DayScroller({
  days,
  selectedDateKey,
  onSelectDate,
}: DayScrollerProps): React.JSX.Element {
  const flatListRef = useRef<FlatList<DayItem>>(null);

  // Scroll to selected day on mount or when days change
  useEffect(() => {
    const selectedIndex = days.findIndex((d) => d.dateKey === selectedDateKey);
    if (selectedIndex >= 0 && flatListRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: selectedIndex,
          animated: false,
          viewPosition: 0.1,
        });
      }, 100);
    }
  }, [days, selectedDateKey]);

  const renderItem = useCallback(
    ({ item }: { item: DayItem }) => (
      <DayCell
        item={item}
        isSelected={item.dateKey === selectedDateKey}
        onPress={() => onSelectDate(item.dateKey)}
      />
    ),
    [selectedDateKey, onSelectDate],
  );

  const keyExtractor = useCallback((item: DayItem) => item.dateKey, []);

  const getItemLayout = useCallback(
    (_data: ArrayLike<DayItem> | null | undefined, index: number) => ({
      length: DAY_CELL_WIDTH + DAY_CELL_GAP,
      offset: (DAY_CELL_WIDTH + DAY_CELL_GAP) * index,
      index,
    }),
    [],
  );

  return (
    <FlatList
      ref={flatListRef}
      data={days}
      horizontal
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: spacing.lg,
        gap: DAY_CELL_GAP,
      }}
      style={{ flexGrow: 0 }}
    />
  );
}
