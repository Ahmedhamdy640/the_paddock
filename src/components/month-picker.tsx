import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, Modal, FlatList } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/theme';

const ALL_MONTHS = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
] as const;

const SHORT_MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
] as const;

interface MonthPickerProps {
  /** 0-indexed month (0 = January) */
  selectedMonth: number;
  /** Months that have events (0-indexed) */
  availableMonths: number[];
  onSelectMonth: (month: number) => void;
}

interface MonthItem {
  index: number;
  label: string;
  shortLabel: string;
  hasEvents: boolean;
}

export function MonthPicker({
  selectedMonth,
  availableMonths,
  onSelectMonth,
}: MonthPickerProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback(
    (month: number) => {
      onSelectMonth(month);
      setIsOpen(false);
    },
    [onSelectMonth],
  );

  const months: MonthItem[] = ALL_MONTHS.map((label, index) => ({
    index,
    label,
    shortLabel: SHORT_MONTHS[index],
    hasEvents: availableMonths.includes(index),
  }));

  const availableOnly = months.filter((m) => m.hasEvents);

  const renderItem = useCallback(
    ({ item }: { item: MonthItem }) => {
      const isSelected = item.index === selectedMonth;
      return (
        <Pressable
          onPress={() => handleSelect(item.index)}
          style={({ pressed }) => ({
            paddingVertical: spacing.md,
            paddingHorizontal: spacing.lg,
            backgroundColor: isSelected ? 'rgba(255, 23, 68, 0.15)' : 'transparent',
            borderLeftWidth: isSelected ? 3 : 0,
            borderLeftColor: colors.accent,
            opacity: pressed ? 0.6 : 1,
          })}
        >
          <Text
            style={{
              color: isSelected ? colors.accent : colors.text,
              fontSize: 16,
              fontWeight: isSelected ? '800' : '600',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            {item.label}
          </Text>
        </Pressable>
      );
    },
    [selectedMonth, handleSelect],
  );

  const keyExtractor = useCallback((item: MonthItem) => String(item.index), []);

  return (
    <>
      {/* Month button */}
      <Pressable
        onPress={handleToggle}
        style={({ pressed }) => ({
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
          borderRadius: borderRadius.md,
          borderCurve: 'continuous',
          backgroundColor: 'rgba(255, 23, 68, 0.1)',
          borderWidth: 1,
          borderColor: colors.accent,
          gap: spacing.sm,
          opacity: pressed ? 0.7 : 1,
        })}
      >
        <Text
          style={{
            color: colors.accent,
            fontSize: 13,
            fontWeight: '800',
            letterSpacing: 2,
          }}
        >
          {ALL_MONTHS[selectedMonth]}
        </Text>
        <Text style={{ color: colors.accent, fontSize: 10 }}>
          {isOpen ? '▲' : '▼'}
        </Text>
      </Pressable>

      {/* Dropdown modal */}
      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={handleToggle}
      >
        <Pressable
          onPress={handleToggle}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            justifyContent: 'center',
            paddingHorizontal: spacing.xl,
          }}
        >
          <Pressable
            style={{
              backgroundColor: '#1A1A1A',
              borderRadius: borderRadius.lg,
              borderCurve: 'continuous',
              borderWidth: 1,
              borderColor: colors.border,
              maxHeight: 400,
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                paddingHorizontal: spacing.lg,
                paddingVertical: spacing.md,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
              }}
            >
              <Text
                style={{
                  color: colors.textMuted,
                  fontSize: 11,
                  fontWeight: '700',
                  letterSpacing: 2,
                }}
              >
                SELECT MONTH
              </Text>
            </View>
            <FlatList
              data={availableOnly}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
