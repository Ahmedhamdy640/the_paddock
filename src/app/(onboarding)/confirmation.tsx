import React from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AccentButton } from '../../components/accent-button';
import { useOnboardingStorage } from '../../hooks/use-onboarding-storage';
import { colors, spacing, typography } from '../../theme/theme';

export default function ConfirmationScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { completeOnboarding } = useOnboardingStorage();
  
  const [fadeAnim] = React.useState(() => new Animated.Value(0));
  const [slideAnim] = React.useState(() => new Animated.Value(20));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const handleEnterPaddock = async () => {
    await completeOnboarding();
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.content,
          { 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <Text style={styles.hero}>
          ARE YOU READY TO START <Text style={styles.heroHighlight}>THE JOURNEY</Text> WITH US?
        </Text>
        
        <Text style={styles.subtitle}>
          Your grid is set. The telemetry is streaming. Welcome to The Paddock.
        </Text>
      </Animated.View>

      <Animated.View 
        style={[
          styles.footer, 
          { 
            paddingBottom: insets.bottom + spacing.lg,
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <AccentButton 
          title="🏎️ ENTER THE PADDOCK" 
          onPress={handleEnterPaddock} 
        />
        <Pressable onPress={() => router.back()} style={styles.goBackButton}>
          <Text style={styles.goBackText}>WAIT, GO BACK</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  hero: {
    color: colors.text,
    fontSize: typography.hero.fontSize,
    fontWeight: typography.hero.fontWeight,
    fontStyle: typography.hero.fontStyle,
    marginBottom: spacing.md,
  },
  heroHighlight: {
    color: colors.accent,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    lineHeight: 28,
  },
  footer: {
    paddingTop: spacing.lg,
  },
  goBackButton: {
    alignItems: 'center',
    padding: spacing.md,
    marginTop: spacing.md,
  },
  goBackText: {
    color: colors.textMuted,
    fontSize: typography.caption.fontSize,
    fontWeight: '700',
    letterSpacing: typography.caption.letterSpacing,
  },
});
