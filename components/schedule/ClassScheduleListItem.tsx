'use client';

import { ActionIcon, Flex, Table, Text } from '@mantine/core';
import { ClassSchedule, Modality } from '../../interfaces';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { translateWeekDay } from '../../utils/translator';

interface Props {
  item: ClassSchedule;
  modality?: Modality;
  edit: () => void;
  remove: () => void;
}

export const ClassScheduleListItem = ({ item, modality, edit, remove }: Props) => {

  return (
    <Table.Tr>
      <Table.Td><Text>{modality?.name || 'Modalidade não encontrada!!'}</Text></Table.Td>
      <Table.Td><Text>{item.startingTime} - {item.endingTime}</Text></Table.Td>
      <Table.Td><Text>{item.daysOfWeek.map((day) => translateWeekDay(day)).join(', ')}</Text></Table.Td>
      <Table.Td><Text>{item.teacher}</Text></Table.Td>
      <Table.Td><Text>{item.ageGroup}</Text></Table.Td>
      <Table.Td><Text>{item.extraInfo || '-'}</Text></Table.Td>
      <Table.Td><Text>{item.extraInfo2 || '-'}</Text></Table.Td>
      <Table.Td>
        <Flex gap={4} align='center'>
          <ActionIcon variant="filled" color="primary" radius="md" onClick={edit}>
            <IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="primary" radius="md" onClick={remove}>
            <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  );
};
