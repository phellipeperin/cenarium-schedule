import { DayPeriod, WeekDay } from '../interfaces';

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

export const translateWeekDayFullName = (weekday: WeekDay): string => {
  switch (weekday) {
    case WeekDay.MONDAY: return 'Segunda';
    case WeekDay.TUESDAY: return 'Terça';
    case WeekDay.WEDNESDAY: return 'Quarta';
    case WeekDay.THURSDAY: return 'Quinta';
    case WeekDay.FRIDAY: return 'Sexta';
    case WeekDay.SATURDAY: return 'Sábado';
    // case WeekDay.SUNDAY: return 'Domingo';
  }
};

export const translateWeekDayTableName = (weekday: WeekDay): string => {
  switch (weekday) {
    case WeekDay.MONDAY: return 'SEGUNDA';
    case WeekDay.TUESDAY: return 'TERCA';
    case WeekDay.WEDNESDAY: return 'QUARTA';
    case WeekDay.THURSDAY: return 'QUINTA';
    case WeekDay.FRIDAY: return 'SEXTA';
    case WeekDay.SATURDAY: return 'SABADO';
    // case WeekDay.SUNDAY: return 'DOMINGO';
  }
};

export const translateDayPeriodTableName = (dayPeriod: DayPeriod): string => {
  switch (dayPeriod) {
    case DayPeriod.MORNING: return 'MANHA';
    case DayPeriod.AFTERNOON: return 'TARDE';
    case DayPeriod.EVENING: return 'NOITE';
  }
}