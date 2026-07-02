export interface RaceSession {
  id: string;
  name: string;
  dateTime: string; // ISO date-time string
  isMainEvent: boolean;
}

export interface RaceEvent {
  id: string;
  seriesId: string;
  round: number;
  title: string;
  circuit: string;
  location: string;
  startDate: string; // ISO date (YYYY-MM-DD)
  endDate: string; // ISO date (YYYY-MM-DD)
  sessions: RaceSession[];
}

/**
 * Fixed race calendar across multiple months (Mar–Nov 2025)
 * so the month picker dropdown has real data to show.
 */
export function getCalendarEvents(): RaceEvent[] {
  return [
    // ── MARCH ──
    {
      id: 'f1-r1',
      seriesId: 'f1',
      round: 1,
      title: 'BAHRAIN GRAND PRIX',
      circuit: 'BAHRAIN INTERNATIONAL CIRCUIT',
      location: 'SAKHIR, BAHRAIN',
      startDate: '2025-03-14',
      endDate: '2025-03-16',
      sessions: [
        { id: 'f1-r1-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-03-14T14:30:00', isMainEvent: false },
        { id: 'f1-r1-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-03-14T18:00:00', isMainEvent: false },
        { id: 'f1-r1-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-03-15T14:30:00', isMainEvent: false },
        { id: 'f1-r1-q', name: 'QUALIFYING', dateTime: '2025-03-15T18:00:00', isMainEvent: false },
        { id: 'f1-r1-race', name: 'GRAND PRIX RACE', dateTime: '2025-03-16T18:00:00', isMainEvent: true },
      ],
    },

    // ── APRIL ──
    {
      id: 'f1-r4',
      seriesId: 'f1',
      round: 4,
      title: 'JAPANESE GRAND PRIX',
      circuit: 'SUZUKA INTERNATIONAL RACING COURSE',
      location: 'SUZUKA, JAPAN',
      startDate: '2025-04-04',
      endDate: '2025-04-06',
      sessions: [
        { id: 'f1-r4-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-04-04T04:30:00', isMainEvent: false },
        { id: 'f1-r4-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-04-04T08:00:00', isMainEvent: false },
        { id: 'f1-r4-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-04-05T04:30:00', isMainEvent: false },
        { id: 'f1-r4-q', name: 'QUALIFYING', dateTime: '2025-04-05T08:00:00', isMainEvent: false },
        { id: 'f1-r4-race', name: 'GRAND PRIX RACE', dateTime: '2025-04-06T07:00:00', isMainEvent: true },
      ],
    },

    // ── MAY ──
    {
      id: 'f1-r6',
      seriesId: 'f1',
      round: 6,
      title: 'MIAMI GRAND PRIX',
      circuit: 'MIAMI INTERNATIONAL AUTODROME',
      location: 'MIAMI, USA',
      startDate: '2025-05-02',
      endDate: '2025-05-04',
      sessions: [
        { id: 'f1-r6-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-05-02T19:30:00', isMainEvent: false },
        { id: 'f1-r6-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-05-02T23:00:00', isMainEvent: false },
        { id: 'f1-r6-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-05-03T18:30:00', isMainEvent: false },
        { id: 'f1-r6-q', name: 'QUALIFYING', dateTime: '2025-05-03T22:00:00', isMainEvent: false },
        { id: 'f1-r6-race', name: 'GRAND PRIX RACE', dateTime: '2025-05-04T22:00:00', isMainEvent: true },
      ],
    },
    {
      id: 'wec-r3',
      seriesId: 'wec',
      round: 3,
      title: '6 HOURS OF IMOLA',
      circuit: 'AUTODROMO ENZO E DINO FERRARI',
      location: 'IMOLA, ITALY',
      startDate: '2025-05-16',
      endDate: '2025-05-18',
      sessions: [
        { id: 'wec-r3-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-05-16T10:00:00', isMainEvent: false },
        { id: 'wec-r3-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-05-16T15:30:00', isMainEvent: false },
        { id: 'wec-r3-q', name: 'QUALIFYING / HYPERPOLE', dateTime: '2025-05-17T11:00:00', isMainEvent: false },
        { id: 'wec-r3-race', name: '6 HOURS RACE', dateTime: '2025-05-18T11:00:00', isMainEvent: true },
      ],
    },

    // ── JUNE ──
    {
      id: 'f1-r8',
      seriesId: 'f1',
      round: 8,
      title: 'CANADIAN GRAND PRIX',
      circuit: 'CIRCUIT GILLES VILLENEUVE',
      location: 'MONTREAL, CANADA',
      startDate: '2025-06-13',
      endDate: '2025-06-15',
      sessions: [
        { id: 'f1-r8-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-06-13T19:30:00', isMainEvent: false },
        { id: 'f1-r8-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-06-13T23:00:00', isMainEvent: false },
        { id: 'f1-r8-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-06-14T18:30:00', isMainEvent: false },
        { id: 'f1-r8-q', name: 'QUALIFYING', dateTime: '2025-06-14T22:00:00', isMainEvent: false },
        { id: 'f1-r8-race', name: 'GRAND PRIX RACE', dateTime: '2025-06-15T20:00:00', isMainEvent: true },
      ],
    },

    // ── JULY ──
    {
      id: 'f1-r10',
      seriesId: 'f1',
      round: 10,
      title: 'AUSTRIAN GRAND PRIX',
      circuit: 'RED BULL RING',
      location: 'SPIELBERG, AUSTRIA',
      startDate: '2025-07-04',
      endDate: '2025-07-06',
      sessions: [
        { id: 'f1-r10-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-07-04T13:30:00', isMainEvent: false },
        { id: 'f1-r10-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-07-04T17:00:00', isMainEvent: false },
        { id: 'f1-r10-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-07-05T12:30:00', isMainEvent: false },
        { id: 'f1-r10-q', name: 'QUALIFYING', dateTime: '2025-07-05T16:00:00', isMainEvent: false },
        { id: 'f1-r10-race', name: 'GRAND PRIX RACE', dateTime: '2025-07-06T15:00:00', isMainEvent: true },
      ],
    },
    {
      id: 'f1-r11',
      seriesId: 'f1',
      round: 11,
      title: 'BRITISH GRAND PRIX',
      circuit: 'SILVERSTONE CIRCUIT',
      location: 'SILVERSTONE, UNITED KINGDOM',
      startDate: '2025-07-18',
      endDate: '2025-07-20',
      sessions: [
        { id: 'f1-r11-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-07-18T13:30:00', isMainEvent: false },
        { id: 'f1-r11-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-07-18T17:00:00', isMainEvent: false },
        { id: 'f1-r11-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-07-19T12:30:00', isMainEvent: false },
        { id: 'f1-r11-q', name: 'QUALIFYING', dateTime: '2025-07-19T16:00:00', isMainEvent: false },
        { id: 'f1-r11-race', name: 'GRAND PRIX RACE', dateTime: '2025-07-20T15:00:00', isMainEvent: true },
      ],
    },
    {
      id: 'wec-r5',
      seriesId: 'wec',
      round: 5,
      title: '6 HOURS OF SPA',
      circuit: 'CIRCUIT DE SPA-FRANCORCHAMPS',
      location: 'STAVELOT, BELGIUM',
      startDate: '2025-07-25',
      endDate: '2025-07-27',
      sessions: [
        { id: 'wec-r5-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-07-25T10:00:00', isMainEvent: false },
        { id: 'wec-r5-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-07-25T15:30:00', isMainEvent: false },
        { id: 'wec-r5-q', name: 'QUALIFYING / HYPERPOLE', dateTime: '2025-07-26T11:00:00', isMainEvent: false },
        { id: 'wec-r5-race', name: '6 HOURS RACE', dateTime: '2025-07-27T11:00:00', isMainEvent: true },
      ],
    },

    // ── AUGUST ──
    {
      id: 'f1-r12',
      seriesId: 'f1',
      round: 12,
      title: 'HUNGARIAN GRAND PRIX',
      circuit: 'HUNGARORING',
      location: 'BUDAPEST, HUNGARY',
      startDate: '2025-08-01',
      endDate: '2025-08-03',
      sessions: [
        { id: 'f1-r12-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-08-01T13:30:00', isMainEvent: false },
        { id: 'f1-r12-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-08-01T17:00:00', isMainEvent: false },
        { id: 'f1-r12-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-08-02T12:30:00', isMainEvent: false },
        { id: 'f1-r12-q', name: 'QUALIFYING', dateTime: '2025-08-02T16:00:00', isMainEvent: false },
        { id: 'f1-r12-race', name: 'GRAND PRIX RACE', dateTime: '2025-08-03T15:00:00', isMainEvent: true },
      ],
    },

    // ── SEPTEMBER ──
    {
      id: 'f1-r15',
      seriesId: 'f1',
      round: 15,
      title: 'ITALIAN GRAND PRIX',
      circuit: 'AUTODROMO NAZIONALE MONZA',
      location: 'MONZA, ITALY',
      startDate: '2025-09-05',
      endDate: '2025-09-07',
      sessions: [
        { id: 'f1-r15-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-09-05T13:30:00', isMainEvent: false },
        { id: 'f1-r15-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-09-05T17:00:00', isMainEvent: false },
        { id: 'f1-r15-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-09-06T12:30:00', isMainEvent: false },
        { id: 'f1-r15-q', name: 'QUALIFYING', dateTime: '2025-09-06T16:00:00', isMainEvent: false },
        { id: 'f1-r15-race', name: 'GRAND PRIX RACE', dateTime: '2025-09-07T15:00:00', isMainEvent: true },
      ],
    },

    // ── OCTOBER ──
    {
      id: 'f1-r19',
      seriesId: 'f1',
      round: 19,
      title: 'UNITED STATES GRAND PRIX',
      circuit: 'CIRCUIT OF THE AMERICAS',
      location: 'AUSTIN, USA',
      startDate: '2025-10-17',
      endDate: '2025-10-19',
      sessions: [
        { id: 'f1-r19-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-10-17T19:30:00', isMainEvent: false },
        { id: 'f1-r19-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-10-17T23:00:00', isMainEvent: false },
        { id: 'f1-r19-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-10-18T20:00:00', isMainEvent: false },
        { id: 'f1-r19-q', name: 'QUALIFYING', dateTime: '2025-10-18T23:00:00', isMainEvent: false },
        { id: 'f1-r19-race', name: 'GRAND PRIX RACE', dateTime: '2025-10-19T21:00:00', isMainEvent: true },
      ],
    },

    // ── NOVEMBER ──
    {
      id: 'f1-r22',
      seriesId: 'f1',
      round: 22,
      title: 'ABU DHABI GRAND PRIX',
      circuit: 'YAS MARINA CIRCUIT',
      location: 'ABU DHABI, UAE',
      startDate: '2025-11-28',
      endDate: '2025-11-30',
      sessions: [
        { id: 'f1-r22-fp1', name: 'FREE PRACTICE 1', dateTime: '2025-11-28T13:30:00', isMainEvent: false },
        { id: 'f1-r22-fp2', name: 'FREE PRACTICE 2', dateTime: '2025-11-28T17:00:00', isMainEvent: false },
        { id: 'f1-r22-fp3', name: 'FREE PRACTICE 3', dateTime: '2025-11-29T14:30:00', isMainEvent: false },
        { id: 'f1-r22-q', name: 'QUALIFYING', dateTime: '2025-11-29T18:00:00', isMainEvent: false },
        { id: 'f1-r22-race', name: 'GRAND PRIX RACE', dateTime: '2025-11-30T17:00:00', isMainEvent: true },
      ],
    },
  ];
}
