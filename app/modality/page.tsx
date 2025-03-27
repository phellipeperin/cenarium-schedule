import { Metadata } from 'next';
import ServerActionsProvider from '../../providers/ServerActionsProvider';
import { ModalityList } from '../../components/modality/ModalityList';
import { addModality, editModality, loadAllModalities, removeModality } from '../../actions/modality.actions';

export const metadata: Metadata = {
  title: 'Cenarium - Modalidades',
};

const ModalityPage = async () => {
  return (
    <ServerActionsProvider loadAllModalities={loadAllModalities} addModality={addModality} editModality={editModality} removeModality={removeModality}>
      <ModalityList />
    </ServerActionsProvider>
  );
};

export default ModalityPage;
