import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_COMPLETED_KEY = '@ThePaddock_onboardingCompleted';

export function useOnboardingStorage() {
  const [isCompleted, setIsCompleted] = useState<boolean | null>(null);

  const loadStatus = async () => {
    try {
      const value = await AsyncStorage.getItem(ONBOARDING_COMPLETED_KEY);
      setIsCompleted(value === 'true');
    } catch (e) {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadStatus();
  }, []);


  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, 'true');
      setIsCompleted(true);
    } catch (e) {
      console.error('Failed to save onboarding status:', e);
    }
  };

  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem(ONBOARDING_COMPLETED_KEY);
      setIsCompleted(false);
    } catch (e) {
      console.error('Failed to reset onboarding status:', e);
    }
  };

  return {
    isCompleted,
    completeOnboarding,
    resetOnboarding,
  };
}
