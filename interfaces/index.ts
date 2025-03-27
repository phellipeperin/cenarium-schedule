export type Modality = {
  id: string;
  key: string;
  name: string;
  color: string;
};

export type Schedule = {
  modalityId: string;
  startingTime: string;
  endingTime: string;
  daysOfWeek: Array<WeekDay>;
  teacher: string;
  ageGroup: string;
  extraInfo: string;
  extraInfo2: string;
}

export enum WeekDay {
  'MONDAY' = 'MONDAY',
  'TUESDAY' = 'TUESDAY',
  'WEDNESDAY' = 'WEDNESDAY',
  'THURSDAY' = 'THURSDAY',
  'FRIDAY' = 'FRIDAY',
  'SATURDAY' = 'SATURDAY',
  'SUNDAY' = 'SUNDAY',
}