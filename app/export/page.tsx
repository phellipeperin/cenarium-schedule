import { Metadata } from 'next';
import ServerActionsProvider from '../../providers/ServerActionsProvider';
import { loadAllClassSchedule } from '../../actions/schedule.actions';
import { loadAllModalities } from '../../actions/modality.actions';
import { ExportContainer } from '../../components/export/ExportContainer';

export const metadata: Metadata = {
  title: 'Cenarium - Export',
};

const ExportPage = async () => {
  return (
    <ServerActionsProvider loadAllModalities={loadAllModalities} loadAllClassSchedule={loadAllClassSchedule}>
      <ExportContainer />
    </ServerActionsProvider>
  );
};

export default ExportPage;
