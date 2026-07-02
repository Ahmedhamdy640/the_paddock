export interface Series {
  id: string;
  name: string;
  image: string;
  colorAccent: string;
}

export const SERIES_DATA: Series[] = [
  {
    id: 'f1',
    name: 'FORMULA 1',
    image: 'https://images.unsplash.com/photo-1541344405232-a5e1ed4f2d33?q=80&w=1000&auto=format&fit=crop', // Placeholder F1 car
    colorAccent: '#FF1801',
  },
  {
    id: 'wec',
    name: 'WEC',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000&auto=format&fit=crop', // Placeholder GT/Prototype car
    colorAccent: '#1C5B99',
  },
  {
    id: 'gt',
    name: 'GT WORLD CHALLENGE',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop', // Placeholder GT car
    colorAccent: '#F3A900',
  },
];
