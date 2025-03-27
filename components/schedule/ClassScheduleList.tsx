'use client';

import { useEffect, useState } from 'react';
import { Button, Flex, Modal, Table, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAddClassSchedule, useEditClassSchedule, useLoadAllClassSchedule, useLoadAllModalities, useRemoveClassSchedule } from '../../hooks/serverActions';
import { ClassSchedule, Modality } from '../../interfaces';
import { PageHeader } from '../header/PageHeader';
import { Notifications, notifications } from '@mantine/notifications';
import { ClassScheduleListItem } from './ClassScheduleListItem';
import { ClassScheduleForm } from './ClassScheduleForm';

export const ClassScheduleList = () => {
  const [modalityList, setModalityList] = useState<Array<Modality>>([]);
  const [list, setList] = useState<Array<ClassSchedule>>([]);
  const [item, setItem] = useState<ClassSchedule>({ modalityId: '', startingTime: '', endingTime: '', daysOfWeek: [], teacher: '', ageGroup: '', extraInfo: '', extraInfo2: '' });
  const [openedEdit, { open: openEdit, close: closeEdit }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] = useDisclosure(false);

  // Server Actions
  const loadAllModalities = useLoadAllModalities();
  const loadAllClassSchedule = useLoadAllClassSchedule();
  const addClassSchedule = useAddClassSchedule();
  const editClassSchedule = useEditClassSchedule();
  const removeClassSchedule = useRemoveClassSchedule();

  useEffect(() => {
    (async () => {
      setModalityList(await loadAllModalities());
      await reloadList();
    })();
  }, []);

  const addNew = (): void => {
    setItem({ modalityId: '', startingTime: '', endingTime: '', daysOfWeek: [], teacher: '', ageGroup: '', extraInfo: '', extraInfo2: '' });
    openEdit();
  };

  const edit = (item: ClassSchedule): void => {
    setItem({ ...item });
    openEdit();
  };

  const remove = (item: ClassSchedule): void => {
    setItem({ ...item });
    openDelete();
  };

  const confirmSave = async (newItem: ClassSchedule): Promise<void> => {
    if (newItem.id) {
      await editClassSchedule(newItem);
    } else {
      await addClassSchedule(newItem);
    }
    closeEdit();
    notifications.show({ message: 'Salvo com sucesso' });
    await reloadList();
  };

  const confirmRemove = async (): Promise<void> => {
    if (item.id) {
      await removeClassSchedule(item.id);
      closeDelete();
      notifications.show({ message: 'Excluído com sucesso' });
      await reloadList();
    }
  };

  const reloadList = async (): Promise<void> => {
    setList((await loadAllClassSchedule()).sort((a, b) => a.startingTime.localeCompare(b.startingTime)));    
  };

  return (
    <>
      <Notifications />
      <PageHeader title='Horários' buttonLabel='Adicionar' buttonAction={addNew} />
      <Table highlightOnHover stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Modalidade</Table.Th>
            <Table.Th>Horário</Table.Th>
            <Table.Th>Dias</Table.Th>
            <Table.Th>Professor</Table.Th>
            <Table.Th>Idade</Table.Th>
            <Table.Th>Info Extra #1</Table.Th>
            <Table.Th>Info Extra #2</Table.Th>
            <Table.Th>Ações</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {list.map((item) => <ClassScheduleListItem key={item.id} item={item} modality={modalityList.find((modality) => modality.id === item.modalityId)} edit={() => edit(item)} remove={() => remove(item)} />)}
        </Table.Tbody>

        <Modal opened={openedEdit} onClose={closeEdit} title={!item?.id ? 'Nova Turma' : ''} centered>
          <ClassScheduleForm item={item} cancel={closeEdit} confirm={confirmSave} modalityList={modalityList} />
        </Modal>

        <Modal opened={openedDelete} onClose={closeDelete} title='Remover' centered>
          <Text>Confirma a exclusão do horário?</Text>
          <Flex w='100%' justify='end' gap={8} mt={20}>
            <Button onClick={closeDelete} variant="subtle">Cancelar</Button>
            <Button onClick={confirmRemove}>Confirmar</Button>
          </Flex>
        </Modal>
      </Table>
    </>
  );
};
