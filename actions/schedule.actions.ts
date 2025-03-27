'use server';

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../db/firebase.db';
import { ClassSchedule } from '../interfaces';

const collectionName = 'schedule';

export const loadAllClassSchedule = async (): Promise<Array<ClassSchedule>> => {
  return (await getDocs(collection(db, collectionName))).docs.map((doc) => doc.data() as ClassSchedule);
};

export const addClassSchedule = async (classSchedule: ClassSchedule): Promise<void> => {
  await addDoc(collection(db, collectionName), classSchedule);
};

export const editClassSchedule = async (classSchedule: ClassSchedule): Promise<void> => {
  if (classSchedule.id) {
    const ref = doc(db, collectionName, classSchedule.id);
    const { id, ...infoToSave } = classSchedule;
    updateDoc(ref, infoToSave);
  }
};

export const removeClassSchedule = async (classScheduleId: string): Promise<void> => {
  const ref = doc(db, collectionName, classScheduleId);
  deleteDoc(ref);
};
