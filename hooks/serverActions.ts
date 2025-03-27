import { useContext } from 'react';
import { ServerActionsContext } from '../providers/ServerActionsProvider';
import { loadAllModalities, addModality, editModality, removeModality } from '../actions/modality.actions';
import { loadAllClassSchedule, addClassSchedule, editClassSchedule, removeClassSchedule } from '../actions/schedule.actions';

// Modalities
export const useLoadAllModalities = (): typeof loadAllModalities => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useLoadAllModalities must be used within a ServerActionsContext');
  }
  if (!context.loadAllModalities) {
    throw new Error('loadAllModalities was not defined in this ServerActionsContext');
  }
  return context.loadAllModalities;
};

export const useAddModality = (): typeof addModality => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useAddModality must be used within a ServerActionsContext');
  }
  if (!context.addModality) {
    throw new Error('addModality was not defined in this ServerActionsContext');
  }
  return context.addModality;
};

export const useEditModality = (): typeof editModality => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useEditModality must be used within a ServerActionsContext');
  }
  if (!context.editModality) {
    throw new Error('editModality was not defined in this ServerActionsContext');
  }
  return context.editModality;
};

export const useRemoveModality = (): typeof removeModality => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useRemoveModality must be used within a ServerActionsContext');
  }
  if (!context.removeModality) {
    throw new Error('removeModality was not defined in this ServerActionsContext');
  }
  return context.removeModality;
};

// Class Schedule
export const useLoadAllClassSchedule = (): typeof loadAllClassSchedule => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useLoadAllClassSchedule must be used within a ServerActionsContext');
  }
  if (!context.loadAllClassSchedule) {
    throw new Error('loadAllClassSchedule was not defined in this ServerActionsContext');
  }
  return context.loadAllClassSchedule;
};

export const useAddClassSchedule = (): typeof addClassSchedule => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useAddClassSchedule must be used within a ServerActionsContext');
  }
  if (!context.addClassSchedule) {
    throw new Error('addClassSchedule was not defined in this ServerActionsContext');
  }
  return context.addClassSchedule;
};

export const useEditClassSchedule = (): typeof editClassSchedule => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useEditClassSchedule must be used within a ServerActionsContext');
  }
  if (!context.editClassSchedule) {
    throw new Error('editClassSchedule was not defined in this ServerActionsContext');
  }
  return context.editClassSchedule;
};

export const useRemoveClassSchedule = (): typeof removeClassSchedule => {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useRemoveClassSchedule must be used within a ServerActionsContext');
  }
  if (!context.removeClassSchedule) {
    throw new Error('removeClassSchedule was not defined in this ServerActionsContext');
  }
  return context.removeClassSchedule;
};