import { useMemo } from 'react';
import { getCalendarEvents, type RaceEvent } from '../data/calendar-data';

interface CalendarDay {
  date: Date;
  dayName: string;
  dayNumber: string;
  monthName: string;
  isToday: boolean;
  dateKey: string; // YYYY-MM-DD for comparison
}

const SHORT_DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const;
const SHORT_MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] as const;

function toDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function generateDays(daysBefore: number, daysAfter: number): CalendarDay[] {
  const today = new Date();
  const todayKey = toDateKey(today);
  const days: CalendarDay[] = [];

  for (let offset = -daysBefore; offset <= daysAfter; offset++) {
    const date = new Date();
    date.setDate(today.getDate() + offset);

    const dayOfWeek = date.getDay();
    // Only include Thursday (4), Friday (5), Saturday (6), Sunday (0), and Monday (1)
    if ([0, 1, 4, 5, 6].includes(dayOfWeek)) {
      days.push({
        date,
        dayName: SHORT_DAYS[dayOfWeek],
        dayNumber: String(date.getDate()).padStart(2, '0'),
        monthName: SHORT_MONTHS[date.getMonth()],
        isToday: toDateKey(date) === todayKey,
        dateKey: toDateKey(date),
      });
    }
  }

  return days;
}

export function getEventsForDate(dateKey: string, events: RaceEvent[]): RaceEvent[] {
  return events.filter((event) => {
    return dateKey >= event.startDate && dateKey <= event.endDate;
  });
}

export function getDaysUntil(targetDateString: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(targetDateString);
  target.setHours(0, 0, 0, 0);
  const diffMs = target.getTime() - today.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function formatSessionTime(isoDateTime: string): string {
  const date = new Date(isoDateTime);
  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).toUpperCase();
}

export function getSessionsForDate(event: RaceEvent, dateKey: string): RaceEvent['sessions'] {
  return event.sessions.filter((session) => {
    const sessionDate = new Date(session.dateTime);
    return toDateKey(sessionDate) === dateKey;
  });
}

export function useCalendarDays(selectedMonth: number): CalendarDay[] {
  const events = useMemo(() => getCalendarEvents(), []);
  return useMemo(() => {
    const todayKey = getTodayKey();
    const sessionDates = new Set<string>();

    // Only collect dates that actually have a session
    events.forEach(event => {
      event.sessions.forEach(session => {
        const sessionDate = new Date(session.dateTime);
        // Filter by selected month (0-indexed)
        if (sessionDate.getMonth() === selectedMonth) {
          sessionDates.add(toDateKey(sessionDate));
        }
      });
    });

    const sortedKeys = Array.from(sessionDates).sort();

    return sortedKeys.map(key => {
      const parts = key.split('-');
      const date = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      return {
        date,
        dayName: SHORT_DAYS[date.getDay()],
        dayNumber: String(date.getDate()).padStart(2, '0'),
        monthName: SHORT_MONTHS[date.getMonth()],
        isToday: key === todayKey,
        dateKey: key,
      };
    });
  }, [events, selectedMonth]);
}

/** Returns sorted 0-indexed months that have at least one session */
export function useAvailableMonths(): number[] {
  const events = useMemo(() => getCalendarEvents(), []);
  return useMemo(() => {
    const months = new Set<number>();
    events.forEach(event => {
      event.sessions.forEach(session => {
        const sessionDate = new Date(session.dateTime);
        months.add(sessionDate.getMonth());
      });
    });
    return Array.from(months).sort((a, b) => a - b);
  }, [events]);
}

export function getTodayKey(): string {
  return toDateKey(new Date());
}

export function getSeriesLabel(seriesId: string, round: number): string {
  const seriesMap: Record<string, string> = {
    f1: 'F1',
    wec: 'WEC',
    gt: 'GT',
  };
  const prefix = seriesMap[seriesId] ?? seriesId.toUpperCase();
  return `${prefix} RD ${round}`;
}

