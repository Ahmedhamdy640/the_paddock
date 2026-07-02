import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useOnboardingStorage } from '../../../hooks/use-onboarding-storage';
import { colors, spacing, typography, borderRadius } from '../../../theme/theme';

const OPTIONS = [
  { id: 'account', title: 'Account Settings', icon: 'person' as const },
  { id: 'notifications', title: 'Push Notifications', icon: 'notifications' as const },
  { id: 'appearance', title: 'Appearance', icon: 'color-palette' as const },
  { id: 'reset', title: 'Reset Onboarding', icon: 'refresh' as const, isDestructive: true },
];

export default function MoreScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { resetOnboarding } = useOnboardingStorage();

  const handlePress = async (id: string) => {
    if (id === 'reset') {
      await resetOnboarding();
      router.replace('/(onboarding)');
    } else {
      Alert.alert('Coming Soon', 'This feature is not yet implemented.');
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      onPress={() => handlePress(item.id)}
    >
      <View style={styles.rowLeft}>
        <Ionicons name={item.icon} size={24} color={item.isDestructive ? colors.accent : colors.text} style={styles.icon} />
        <Text style={[styles.rowText, item.isDestructive && styles.destructiveText]}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
    </Pressable>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>MORE <Text style={styles.titleHighlight}>OPTIONS</Text></Text>
      </View>
      
      <FlatList
        data={OPTIONS}
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
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
  },
  rowPressed: {
    opacity: 0.8,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: spacing.md,
  },
  rowText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  destructiveText: {
    color: colors.accent,
  },
});
