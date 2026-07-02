import React from 'react';
import { Pressable, Text, StyleSheet, Animated, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../theme/theme';

interface AccentButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export function AccentButton({ title, onPress, style, textStyle, disabled }: AccentButtonProps) {
  const [scaleAnim] = React.useState(() => new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, style]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          disabled && styles.disabled,
          pressed && !disabled && styles.pressed,
        ]}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: colors.border,
    opacity: 0.7,
  },
  pressed: {
    opacity: 0.9,
  },
  text: {
    color: colors.text,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    textTransform: 'uppercase',
  },
});
