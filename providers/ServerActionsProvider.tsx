'use client';

import { createContext } from 'react';
import { loadAllModalities, addModality, editModality, removeModality } from '../actions/modality.actions';
import { loadAllClassSchedule, addClassSchedule, editClassSchedule, removeClassSchedule } from '../actions/schedule.actions';

type ServerActionsContextType = {
  loadAllModalities?: typeof loadAllModalities;
  addModality?: typeof addModality;
  editModality?: typeof editModality;
  removeModality?: typeof removeModality;
  loadAllClassSchedule?: typeof loadAllClassSchedule;
  addClassSchedule?: typeof addClassSchedule;
  editClassSchedule?: typeof editClassSchedule;
  removeClassSchedule?: typeof removeClassSchedule;
};

export const ServerActionsContext = createContext<ServerActionsContextType | null>(null);

interface Props extends ServerActionsContextType {
  children: React.ReactNode;
}

export default function ServerActionsProvider({ loadAllModalities, addModality, editModality, removeModality, loadAllClassSchedule, addClassSchedule, editClassSchedule, removeClassSchedule, children }: Props) {
  return <ServerActionsContext.Provider value={{ loadAllModalities, addModality, editModality, removeModality, loadAllClassSchedule, addClassSchedule, editClassSchedule, removeClassSchedule }}>{children}</ServerActionsContext.Provider>;
}
