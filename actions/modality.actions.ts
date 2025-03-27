'use server';

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../db/firebase.db';
import { Modality } from '../interfaces';

const collectionName = 'modalities';

export const loadAllModalities = async (): Promise<Array<Modality>> => {
  return (await getDocs(collection(db, collectionName))).docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Modality);
};

export const addModality = async (modality: Modality): Promise<void> => {
  await addDoc(collection(db, collectionName), modality);
};

export const editModality = async (modality: Modality): Promise<void> => {
  if (modality.id) {
    const ref = doc(db, collectionName, modality.id);
    const { id, ...infoToSave } = modality;
    updateDoc(ref, infoToSave);
  }
};

export const removeModality = async (modalityId: string): Promise<void> => {
  const ref = doc(db, collectionName, modalityId);
  deleteDoc(ref);
};
