import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebase.db';
import { Modality } from '../interfaces';

export const loadAllModalities = async (): Promise<Array<Modality>> => {
  return (await getDocs(collection(db, 'modalities'))).docs.map((doc) => doc.data() as Modality);
};

export const addModality = async (modality: Modality): Promise<void> => {};

export const editModality = async (modality: Modality): Promise<void> => {};

export const removeModality = async (modalityId: string): Promise<void> => {};
