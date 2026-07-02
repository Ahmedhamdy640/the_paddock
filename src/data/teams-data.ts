export interface Team {
  id: string;
  name: string;
  icon: string;
  seriesId: string;
  manufacturerId: string;
}

export const TEAMS_DATA: Team[] = [
  {
    id: 'f1_ferrari',
    name: 'Scuderia Ferrari',
    icon: '🏎️',
    seriesId: 'f1',
    manufacturerId: 'ferrari',
  },
  {
    id: 'f1_mercedes',
    name: 'Mercedes-AMG Petronas F1 Team',
    icon: '✨',
    seriesId: 'f1',
    manufacturerId: 'mercedes',
  },
  {
    id: 'f1_redbull',
    name: 'Oracle Red Bull Racing',
    icon: '🐂',
    seriesId: 'f1',
    manufacturerId: 'redbull',
  },
  {
    id: 'f1_mclaren',
    name: 'McLaren F1 Team',
    icon: '🏁',
    seriesId: 'f1',
    manufacturerId: 'mclaren',
  },
  {
    id: 'f1_aston_martin',
    name: 'Aston Martin Aramco F1 Team',
    icon: '🏎️',
    seriesId: 'f1',
    manufacturerId: 'aston_martin',
  },
  {
    id: 'wec_toyota',
    name: 'Toyota Gazoo Racing',
    icon: '🇯🇵',
    seriesId: 'wec',
    manufacturerId: 'toyota',
  },
  {
    id: 'wec_ferrari',
    name: 'Ferrari AF Corse',
    icon: '🏎️',
    seriesId: 'wec',
    manufacturerId: 'ferrari',
  },
  {
    id: 'wec_porsche',
    name: 'Porsche Penske Motorsport',
    icon: '🛡️',
    seriesId: 'wec',
    manufacturerId: 'porsche',
  },
  {
    id: 'wec_aston_martin',
    name: 'Heart of Racing Team',
    icon: '🏎️',
    seriesId: 'wec',
    manufacturerId: 'aston_martin',
  },
  {
    id: 'gt_mercedes',
    name: 'AKKODIS ASP Team',
    icon: '✨',
    seriesId: 'gt',
    manufacturerId: 'mercedes',
  },
  {
    id: 'gt_porsche',
    name: 'Manthey EMA',
    icon: '🛡️',
    seriesId: 'gt',
    manufacturerId: 'porsche',
  },
  {
    id: 'gt_ferrari',
    name: 'AF Corse',
    icon: '🏎️',
    seriesId: 'gt',
    manufacturerId: 'ferrari',
  },
  {
    id: 'gt_mclaren',
    name: 'Garage 59',
    icon: '🏁',
    seriesId: 'gt',
    manufacturerId: 'mclaren',
  },
];
