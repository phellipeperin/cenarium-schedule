import { WeekDay } from '../interfaces';

export const translateWeekDay = (weekday: WeekDay): string => {
  switch (weekday) {
    case WeekDay.MONDAY: return 'Seg';
    case WeekDay.TUESDAY: return 'Ter';
    case WeekDay.WEDNESDAY: return 'Qua';
    case WeekDay.THURSDAY: return 'Qui';
    case WeekDay.FRIDAY: return 'Sex';
    case WeekDay.SATURDAY: return 'Sáb';
    // case WeekDay.SUNDAY: return 'Dom';
  }
};