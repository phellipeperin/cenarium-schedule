'use client';

import { ActionIcon, Box, Flex, Table, Text } from '@mantine/core';
import { Modality } from '../../interfaces';
import { IconPencil, IconTrash } from '@tabler/icons-react';

interface Props {
  item: Modality;
  edit: () => void;
  remove: () => void;
}

export const ModalityListItem = ({ item, edit, remove }: Props) => {

  return (
    <Table.Tr>
      <Table.Td><Text>{item.name}</Text></Table.Td>
      <Table.Td><Text>{item.key}</Text></Table.Td>
      <Table.Td>
        <Flex gap={4} align='center'>
          <Box w={16} h={16} bg={item.color} style={{ borderRadius: 4 }} />
          <Text>{item.color}</Text>
        </Flex>
      </Table.Td>
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
