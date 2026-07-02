import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FeedCard } from '../../../components/feed-card';
import { FEED_DATA } from '../../../data/feed-data';
import { SERIES_DATA } from '../../../data/series-data';
import { colors, spacing, typography } from '../../../theme/theme';

export default function FeedScreen() {
  const insets = useSafeAreaInsets();
  
  const renderItem = ({ item }) => {
    const series = SERIES_DATA.find((s) => s.id === item.seriesId);
    return <FeedCard item={item} seriesColor={series?.colorAccent} />;
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>LIVE <Text style={styles.titleHighlight}>FEED</Text></Text>
      </View>
      <FlatList
        data={FEED_DATA}
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
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    zIndex: 10,
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
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
});
