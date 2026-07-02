export const colors = {
  background: '#0A0A0A',
  card: '#1A1A1A',
  accent: '#FF1744',
  text: '#FFFFFF',
  textMuted: '#999999',
  border: '#333333',
  success: '#00E676',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999,
};

export const typography = {
  hero: {
    fontSize: 48,
    fontWeight: '900' as const,
    textTransform: 'uppercase' as const,
    fontStyle: 'italic' as const,
  },
  h1: {
    fontSize: 32,
    fontWeight: '800' as const,
    textTransform: 'uppercase' as const,
    fontStyle: 'italic' as const,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700' as const,
    textTransform: 'uppercase' as const,
  },
  h3: {
    fontSize: 18,
    fontWeight: '700' as const,
  },
  body: {
    fontSize: 16,
    color: colors.textMuted,
  },
  caption: {
    fontSize: 12,
    color: colors.textMuted,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
  },
};
