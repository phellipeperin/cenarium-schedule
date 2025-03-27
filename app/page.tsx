import { Metadata } from 'next';
import ServerActionsProvider from '../providers/ServerActionsProvider';
import { loadAllModalities } from '../actions/modality.actions';
import { addClassSchedule, editClassSchedule, loadAllClassSchedule, removeClassSchedule } from '../actions/schedule.actions';
import { ClassScheduleList } from '../components/schedule/ClassScheduleList';

export const metadata: Metadata = {
  title: 'Cenarium - Horários',
};

const SchedulePage = async () => {
  return (
    <ServerActionsProvider loadAllModalities={loadAllModalities} loadAllClassSchedule={loadAllClassSchedule} addClassSchedule={addClassSchedule} editClassSchedule={editClassSchedule} removeClassSchedule={removeClassSchedule}>
      <ClassScheduleList />
    </ServerActionsProvider>
  );
};

export default SchedulePage;