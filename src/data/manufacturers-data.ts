export interface Manufacturer {
  id: string;
  name: string;
  icon: string;
  seriesIds: string[];
}

export const MANUFACTURERS_DATA: Manufacturer[] = [
  {
    id: 'ferrari',
    name: 'Ferrari',
    icon: '🏎️',
    seriesIds: ['f1', 'wec', 'gt'],
  },
  {
    id: 'mercedes',
    name: 'Mercedes-AMG',
    icon: '✨',
    seriesIds: ['f1', 'gt'],
  },
  {
    id: 'porsche',
    name: 'Porsche',
    icon: '🛡️',
    seriesIds: ['wec', 'gt'],
  },
  {
    id: 'toyota',
    name: 'Toyota Gazoo Racing',
    icon: '🇯🇵',
    seriesIds: ['wec'],
  },
  {
    id: 'aston_martin',
    name: 'Aston Martin',
    icon: '🏎️',
    seriesIds: ['f1', 'wec', 'gt'],
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    icon: '🏁',
    seriesIds: ['f1', 'gt'],
  },
  {
    id: 'redbull',
    name: 'Red Bull Powertrains',
    icon: '🐂',
    seriesIds: ['f1'],
  },
];
