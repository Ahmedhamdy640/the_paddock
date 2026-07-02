export type FeedItemType = 'telemetry' | 'news' | 'alert';

export interface FeedItem {
  id: string;
  title: string;
  description: string;
  timestamp: string; // ISO string or relative time for mock
  seriesId: string;
  type: FeedItemType;
  imageUrl?: string;
}

export const FEED_DATA: FeedItem[] = [
  {
    id: 'f1-1',
    title: 'Verstappen sets fastest lap in Q3',
    description: 'Max Verstappen snatches pole position with a stunning final sector at Suzuka.',
    timestamp: '2 mins ago',
    seriesId: 'f1',
    type: 'telemetry',
    imageUrl: 'https://images.unsplash.com/photo-1541344405232-a5e1ed4f2d33?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'wec-1',
    title: 'Toyota #8 takes the lead',
    description: 'Sebastien Buemi overtakes the #50 Ferrari on the Kemmel Straight.',
    timestamp: '15 mins ago',
    seriesId: 'wec',
    type: 'news',
    imageUrl: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gt-1',
    title: 'Yellow Flag in Sector 2',
    description: 'Debris on track reported by the #4 Mercedes-AMG.',
    timestamp: 'Just now',
    seriesId: 'gt',
    type: 'alert',
  },
  {
    id: 'f1-2',
    title: 'Ferrari pits for hards',
    description: 'Leclerc switches to a 1-stop strategy, emerging in P4.',
    timestamp: '1 hr ago',
    seriesId: 'f1',
    type: 'telemetry',
  },
  {
    id: 'wec-2',
    title: 'Porsche #6 gets stop-go penalty',
    description: 'Penalty awarded for track limits violation during the final hour.',
    timestamp: '2 hrs ago',
    seriesId: 'wec',
    type: 'alert',
  },
];
