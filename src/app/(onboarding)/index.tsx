import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AccentButton } from '../../components/accent-button';
import { colors, spacing, typography } from '../../theme/theme';

export default function WelcomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
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
        <Text style={styles.kicker}>MULTISERIES TELEMETRY LAB</Text>
        <Text style={styles.hero}>
          CUSTOMIZE YOUR <Text style={styles.heroHighlight}>GRID</Text>
        </Text>
        
        <Text style={styles.subtitle}>Build your ultimate racing hub.</Text>
        
        <Text style={styles.body}>
          Select your favorite racing series, elite manufacturers, and works teams to get a personalized live feed of the motorsport world.
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
          title="GET STARTED" 
          onPress={() => router.push('/(onboarding)/select-series')} 
        />
        <Text style={styles.footerText}>🏁 F1 • WEC • GT WORLD CHAMPIONSHIP</Text>
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
  kicker: {
    color: colors.textMuted,
    fontSize: typography.caption.fontSize,
    fontWeight: '700',
    letterSpacing: typography.caption.letterSpacing,
    marginBottom: spacing.md,
  },
  hero: {
    color: colors.text,
    fontSize: typography.hero.fontSize,
    fontWeight: typography.hero.fontWeight,
    fontStyle: typography.hero.fontStyle,
    marginBottom: spacing.sm,
  },
  heroHighlight: {
    color: colors.accent,
  },
  subtitle: {
    color: colors.text,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    marginBottom: spacing.lg,
  },
  body: {
    color: colors.textMuted,
    fontSize: typography.body.fontSize,
    lineHeight: 24,
  },
  footer: {
    paddingTop: spacing.lg,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: typography.caption.fontSize,
    textAlign: 'center',
    marginTop: spacing.xl,
    letterSpacing: 2,
  },
});
