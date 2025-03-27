import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../config/firebase.config';

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
