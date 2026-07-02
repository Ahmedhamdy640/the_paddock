export interface DriverStanding {
  id: string;
  rank: number;
  name: string;
  teamId: string;
  points: number;
  seriesId: string;
}

export interface ConstructorStanding {
  id: string;
  rank: number;
  name: string;
  points: number;
  seriesId: string;
}

export const DRIVER_STANDINGS: DriverStanding[] = [
  { id: 'd1', rank: 1, name: 'Max Verstappen', teamId: 'f1_redbull', points: 400, seriesId: 'f1' },
  { id: 'd2', rank: 2, name: 'Lando Norris', teamId: 'f1_mclaren', points: 331, seriesId: 'f1' },
  { id: 'd3', rank: 3, name: 'Charles Leclerc', teamId: 'f1_ferrari', points: 307, seriesId: 'f1' },
  { id: 'd4', rank: 4, name: 'Oscar Piastri', teamId: 'f1_mclaren', points: 262, seriesId: 'f1' },
  { id: 'd5', rank: 5, name: 'Carlos Sainz', teamId: 'f1_ferrari', points: 244, seriesId: 'f1' },
  { id: 'd6', rank: 1, name: 'Sebastien Buemi', teamId: 'wec_toyota', points: 150, seriesId: 'wec' },
  { id: 'd7', rank: 2, name: 'Kevin Estre', teamId: 'wec_porsche', points: 142, seriesId: 'wec' },
];

export const CONSTRUCTOR_STANDINGS: ConstructorStanding[] = [
  { id: 'c1', rank: 1, name: 'McLaren', points: 593, seriesId: 'f1' },
  { id: 'c2', rank: 2, name: 'Ferrari', points: 557, seriesId: 'f1' },
  { id: 'c3', rank: 3, name: 'Red Bull Racing', points: 544, seriesId: 'f1' },
  { id: 'c4', rank: 4, name: 'Mercedes', points: 382, seriesId: 'f1' },
  { id: 'c5', rank: 1, name: 'Porsche', points: 188, seriesId: 'wec' },
  { id: 'c6', rank: 2, name: 'Toyota', points: 176, seriesId: 'wec' },
  { id: 'c7', rank: 3, name: 'Ferrari', points: 137, seriesId: 'wec' },
];
