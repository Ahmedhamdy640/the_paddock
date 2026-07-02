import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import { colors, spacing, borderRadius, typography } from '../theme/theme';

interface SelectionCardProps {
  id: string;
  title: string;
  selected: boolean;
  onSelect: (id: string) => void;
  variant?: 'image' | 'icon';
  imageUri?: string;
  icon?: string;
  style?: ViewStyle;
}

export function SelectionCard({
  id,
  title,
  selected,
  onSelect,
  variant = 'icon',
  imageUri,
  icon,
  style,
}: SelectionCardProps) {
  const isImageVariant = variant === 'image';

  return (
    <Pressable
      onPress={() => onSelect(id)}
      style={({ pressed }) => [
        styles.card,
        isImageVariant ? styles.imageCard : styles.iconCard,
        selected && styles.selectedCard,
        pressed && styles.pressed,
        style,
      ]}
    >
      {isImageVariant ? (
        <>
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={styles.image}
              contentFit="cover"
              transition={200}
            />
          )}
          <View style={styles.imageOverlay} />
          <Text style={styles.imageTitle}>{title}</Text>
        </>
      ) : (
        <>
          {icon && <Text style={styles.iconText}>{icon}</Text>}
          <Text style={styles.iconTitle} numberOfLines={2}>
            {title}
          </Text>
        </>
      )}
      
      <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
        {selected && <View style={styles.checkboxInner} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.md,
    backgroundColor: colors.card,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: colors.accent,
  },
  pressed: {
    opacity: 0.8,
  },
  imageCard: {
    height: 120,
    justifyContent: 'flex-end',
    padding: spacing.md,
  },
  iconCard: {
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  imageTitle: {
    color: colors.text,
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight,
    fontStyle: 'italic',
    textTransform: 'uppercase',
    zIndex: 1,
  },
  iconText: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  iconTitle: {
    color: colors.text,
    fontSize: typography.body.fontSize,
    fontWeight: '600',
    textAlign: 'center',
  },
  checkbox: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 20,
    height: 20,
    borderRadius: borderRadius.round,
    borderWidth: 2,
    borderColor: colors.textMuted,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 2,
  },
  checkboxSelected: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  checkboxInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.text,
  },
});
