'use client';

import { useEffect, useState } from 'react';
import { Button, Flex, Modal, Table, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAddModality, useEditModality, useLoadAllModalities, useRemoveModality } from '../../hooks/serverActions';
import { Modality } from '../../interfaces';
import { ModalityListItem } from './ModalityListItem';
import { PageHeader } from '../header/PageHeader';
import { ModalityForm } from './ModalityForm';
import { Notifications, notifications } from '@mantine/notifications';

export const ModalityList = () => {
  const [list, setList] = useState<Array<Modality>>([]);
  const [item, setItem] = useState<Modality>({ key: '', name: '', color: '' });
  const [openedEdit, { open: openEdit, close: closeEdit }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] = useDisclosure(false);

  // Server Actions
  const loadAllModalities = useLoadAllModalities();
  const addModality = useAddModality();
  const editModality = useEditModality();
  const removeModality = useRemoveModality();

  useEffect(() => {
    (async () => {
      setList(await loadAllModalities());
    })();
  }, []);

  const addNew = (): void => {
    setItem({ key: '', name: '', color: '' });
    openEdit();
  };

  const edit = (item: Modality): void => {
    setItem({ ...item });
    openEdit();
  };

  const remove = (item: Modality): void => {
    setItem({ ...item });
    openDelete();
  };

  const confirmSave = async (newItem: Modality): Promise<void> => {
    if (newItem.id) {
      await editModality(newItem);
    } else {
      await addModality(newItem);
    }
    closeEdit();
    notifications.show({ message: 'Salvo com sucesso' });
    setList(await loadAllModalities());
  };

  const confirmRemove = async (): Promise<void> => {
    if (item.id) {
      await removeModality(item.id);
      closeDelete();
      notifications.show({ message: 'Excluído com sucesso' });
      setList(await loadAllModalities());
    }
  };

  return (
    <>
      <Notifications />
      <PageHeader title='Modalidades' buttonLabel='Adicionar' buttonAction={addNew} />
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nome</Table.Th>
            <Table.Th>Chave</Table.Th>
            <Table.Th>Cor</Table.Th>
            <Table.Th>Ações</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {list.map((item) => <ModalityListItem key={item.key} item={item} edit={() => edit(item)} remove={() => remove(item)} />)}
        </Table.Tbody>

        <Modal opened={openedEdit} onClose={closeEdit} title={item?.name || 'Nova Modalidade'} centered>
          <ModalityForm item={item} cancel={closeEdit} confirm={confirmSave} />
        </Modal>

        <Modal opened={openedDelete} onClose={closeDelete} title='Remover' centered>
          <Text>Confirma a exclusão da modalidade <b>{item.name}</b>?</Text>
          <Flex w='100%' justify='end' gap={8} mt={20}>
            <Button onClick={closeDelete} variant="subtle">Cancelar</Button>
            <Button onClick={confirmRemove}>Confirmar</Button>
          </Flex>
        </Modal>
      </Table>
    </>
  );
};
