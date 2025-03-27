import { TimeSchedule, DayPeriod } from '../interfaces';

export function generateAllowedTimes(): TimeSchedule[] {
  const result: TimeSchedule[] = [];

  let hour = 8;
  let minute = 0;

  const toTimeString = (h: number, m: number) =>
    `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;

  const getPeriod = (h: number, m: number): DayPeriod => {
    if (h < 12 || (h === 12 && m < 15)) return DayPeriod.MORNING;
    if (h < 18 || (h === 18 && m < 15)) return DayPeriod.AFTERNOON;
    return DayPeriod.EVENING;
  };

  while (hour < 22 || (hour === 22 && minute <= 30)) {
    const time = toTimeString(hour, minute);
    const period = getPeriod(hour, minute);

    result.push({ time, period });

    minute += 15;
    if (minute >= 60) {
      minute = 0;
      hour += 1;
    }
  }

  return result;
}