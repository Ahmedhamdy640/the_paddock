import { Redirect } from 'expo-router';
import { useOnboardingStorage } from '../hooks/use-onboarding-storage';

export default function Index() {
  const { isCompleted } = useOnboardingStorage();

  if (isCompleted === false) {
    return <Redirect href="/(onboarding)" />;
  }

  if (isCompleted === true) {
    return <Redirect href="/(tabs)" />;
  }

  return null;
}
