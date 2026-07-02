import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useOnboardingStorage } from '../hooks/use-onboarding-storage';
import { useLoadFonts } from '../theme/fonts';
import { OnboardingProvider } from '../contexts/onboarding-context';
import { View } from 'react-native';
import { colors } from '../theme/theme';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, fontError } = useLoadFonts();
  const { isCompleted } = useOnboardingStorage();

  useEffect(() => {
    if ((fontsLoaded || fontError) && isCompleted !== null) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError, isCompleted]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (isCompleted === null) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style="light" />
      <OnboardingProvider>
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }} />
      </OnboardingProvider>
    </View>
  );
}
