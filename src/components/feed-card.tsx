import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { FeedItem } from '../data/feed-data';
import { colors, spacing, borderRadius, typography } from '../theme/theme';

interface FeedCardProps {
  item: FeedItem;
  seriesColor?: string;
}

export function FeedCard({ item, seriesColor = colors.accent }: FeedCardProps) {
  const isAlert = item.type === 'alert';
  const isTelemetry = item.type === 'telemetry';

  return (
    <View style={styles.card}>
      {item.imageUrl && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.image}
            contentFit="cover"
            transition={200}
          />
        </View>
      )}
      
      <View style={[styles.content, { borderLeftColor: isAlert ? colors.accent : seriesColor }]}>
        <View style={styles.header}>
          <View style={styles.badgeContainer}>
            {isAlert && <Ionicons name="warning" size={12} color={colors.accent} style={styles.icon} />}
            {isTelemetry && <View style={[styles.liveDot, { backgroundColor: seriesColor }]} />}
            <Text style={styles.typeText}>{item.type.toUpperCase()}</Text>
          </View>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  imageContainer: {
    height: 160,
    width: '100%',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    padding: spacing.md,
    borderLeftWidth: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  icon: {
    marginRight: 4,
  },
  typeText: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  timestamp: {
    color: colors.textMuted,
    fontSize: 10,
  },
  title: {
    color: colors.text,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    marginBottom: spacing.xs,
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});
