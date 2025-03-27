type FirebaseEntity = {
  id?: string;
};

export type Modality = FirebaseEntity & {
  key: string;
  name: string;
  color: string;
};

export type ClassSchedule = FirebaseEntity & {
  modalityId: string;
  startingTime: string;
  endingTime: string;
  daysOfWeek: Array<WeekDay>;
  teacher: string;
  ageGroup: string;
  extraInfo: string;
  extraInfo2: string;
};

export type TimeSchedule = {
  time: string;
  period: DayPeriod;
}

export enum WeekDay {
  'MONDAY' = 'MONDAY',
  'TUESDAY' = 'TUESDAY',
  'WEDNESDAY' = 'WEDNESDAY',
  'THURSDAY' = 'THURSDAY',
  'FRIDAY' = 'FRIDAY',
  'SATURDAY' = 'SATURDAY',
  // 'SUNDAY' = 'SUNDAY',
}

export enum DayPeriod {
  'MORNING' = 'MORNING',
  'AFTERNOON' = 'AFTERNOON',
  'EVENING' = 'EVENING',
}