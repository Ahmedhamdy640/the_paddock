import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SegmentControl } from '../../../components/segment-control';
import { StandingsRow } from '../../../components/standings-row';
import { DRIVER_STANDINGS, CONSTRUCTOR_STANDINGS } from '../../../data/standings-data';
import { colors, spacing, typography } from '../../../theme/theme';

export default function StandingsScreen() {
  const insets = useSafeAreaInsets();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isDrivers = selectedIndex === 0;
  const data = isDrivers ? DRIVER_STANDINGS : CONSTRUCTOR_STANDINGS;

  const renderItem = ({ item }) => (
    <StandingsRow
      rank={item.rank}
      name={item.name}
      points={item.points}
      subtitle={isDrivers ? item.teamId : undefined} // in a real app, join with teams data for friendly name
    />
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>CHAMPIONSHIP <Text style={styles.titleHighlight}>STANDINGS</Text></Text>
      </View>
      
      <SegmentControl
        options={['Drivers', 'Constructors']}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: typography.h1.fontSize,
    fontWeight: typography.h1.fontWeight,
    fontStyle: typography.h1.fontStyle,
  },
  titleHighlight: {
    color: colors.accent,
  },
  listContent: {
    paddingBottom: spacing.xxl,
  },
});
