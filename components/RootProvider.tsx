'use client';

import { createContext } from 'react';
import { Modality, Schedule } from '../interfaces';

type RootContextType = { schedule: Array<Schedule>; modalities: Array<Modality> };

export const RootContext = createContext<RootContextType | null>(null);

interface Props extends RootContextType {
  children: React.ReactNode;
}

export default function RootProvider({ schedule, modalities, children }: Props) {
  return <RootContext.Provider value={{ schedule, modalities }}>{children}</RootContext.Provider>;
}
