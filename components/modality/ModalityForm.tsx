'use client';

import { Button, Flex, TextInput, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Modality } from '../../interfaces';
import { IconInfoCircle } from '@tabler/icons-react';

interface Props {
  item: Modality;
  list: Array<Modality>;
  cancel: () => void;
  confirm: (newItem: Modality) => void;
}

export const ModalityForm = ({ item, list, cancel, confirm }: Props) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      id: item.id,
      name: item.name,
      key: item.key,
      color: item.color,
    },
    validate: {
      name: (value) => (!value ? 'Mandatório' : null),
      key: (value) => {
        if (!value) {
          return 'Mandatório';
        }
        if (!item.id && list.findIndex((modality) => modality.key === value) !== -1) {
          return 'Valor precisa ser único';
        }
        return null;
      },
      color: (value) => {
        if (!value) {
          return 'Mandatório';
        }
        if (!value.startsWith('#') || value.length !== 7) {
          return 'Formato inválido'
        }
        return null;
      },
    },
  });

  const validateAndConfirm = (): void => {
    if (!form.validate().hasErrors) {
      confirm(form.getValues());
    }
  };

  return (
    <Flex direction='column' gap={20}>
      <TextInput size="sm" radius="md" label='Nome' key={form.key('name')} {...form.getInputProps('name')} />
      
      <TextInput size="sm" radius="md" label='Chave' key={form.key('key')} {...form.getInputProps('key')} rightSection={
        <Tooltip
          label="ID único, o mesmo que é usado na página de modalidades como link para filtrar a lista."
          multiline
          w={220}
          transitionProps={{ transition: 'skew-up', duration: 300 }}
        >
          <IconInfoCircle />
        </Tooltip>
      } />
      <TextInput size="sm" radius="md" label='Cor' key={form.key('color')} {...form.getInputProps('color')} rightSection={
        <Tooltip
          label="Cor da modalidade que será utilizada como cor de fundo. Formato HEX: #000000"
          multiline
          w={220}
          transitionProps={{ transition: 'skew-up', duration: 300 }}
        >
          <IconInfoCircle />
        </Tooltip>
      } />

      <Flex w='100%' justify='end' gap={8}>
        <Button onClick={cancel} variant="subtle">Cancelar</Button>
        <Button onClick={validateAndConfirm}>Salvar</Button>
      </Flex>
    </Flex>
  );
};
