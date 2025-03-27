import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebase.db';
import { ClassSchedule } from '../interfaces';

export const loadAllClassSchedule = async (): Promise<Array<ClassSchedule>> => {
  return (await getDocs(collection(db, 'modalities'))).docs.map((doc) => doc.data() as ClassSchedule);
};

export const addClassSchedule = async (classSchedule: ClassSchedule): Promise<void> => {};

export const editClassSchedule = async (classSchedule: ClassSchedule): Promise<void> => {};

export const removeClassSchedule = async (classScheduleId: string): Promise<void> => {};
