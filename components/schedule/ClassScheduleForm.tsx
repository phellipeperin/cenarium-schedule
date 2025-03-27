'use client';

import { Button, Checkbox, Flex, Group, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ClassSchedule, Modality, WeekDay } from '../../interfaces';
import { generateAllowedTimes } from '../../utils/time';
import { translateWeekDay } from '../../utils/translator';

interface Props {
  item: ClassSchedule;
  modalityList: Array<Modality>;
  cancel: () => void;
  confirm: (newItem: ClassSchedule) => void;
}

export const ClassScheduleForm = ({ item, modalityList, cancel, confirm }: Props) => {
  const allowedTimes = generateAllowedTimes().map((time) => time.time);
  const weekdays = Object.values(WeekDay);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      id: item.id,
      modalityId: item.modalityId, 
      startingTime: item.startingTime,
      endingTime: item.endingTime,
      daysOfWeek: item.daysOfWeek,
      teacher: item.teacher,
      ageGroup: item.ageGroup,
      extraInfo: item.extraInfo,
      extraInfo2: item.extraInfo2,
    },
    validate: {
      modalityId: (value) => (!value ? 'Mandatório' : null),
      startingTime: (value) => (!value ? 'Mandatório' : null),
      endingTime: (value) => (!value ? 'Mandatório' : null),
      teacher: (value) => (!value ? 'Mandatório' : null),
      ageGroup: (value) => (!value ? 'Mandatório' : null),
      daysOfWeek: (value) =>
        value.length === 0 ? 'Selecione pelo menos 1 dia' : null,
    },
  });

  const validateAndConfirm = (): void => {
    if (!form.validate().hasErrors) {
      confirm(form.getValues());
    }
  };

  return (
    <Flex direction='column' gap={20}>
      <Select
        label="Modalidade"
        searchable
        nothingFoundMessage="Nenhuma modalidade encontrada"
        data={modalityList.map((modality) => ({ value: modality.id || '', label: modality.name }))}
        key={form.key('modalityId')}
        {...form.getInputProps('modalityId')}
      />

      <Flex gap={8} w='100%' justify='space-between'>
        <Select
          label="Horário Início"
          data={[...allowedTimes]}
          key={form.key('startingTime')}
          {...form.getInputProps('startingTime')}
        />
        <Select
          label="Horário Fim"
          data={[...allowedTimes]}
          key={form.key('endingTime')}
          {...form.getInputProps('endingTime')}
        />
      </Flex>

      <Checkbox.Group
        label="Days of the Week"
        {...form.getInputProps('daysOfWeek')}
      >
        <Group>
          {weekdays.map((day) => (
            <Checkbox key={day} value={day} label={translateWeekDay(day)} />
          ))}
        </Group>
      </Checkbox.Group>

      <Flex gap={8} w='100%' justify='space-between'>
        <TextInput size="sm" radius="md" label='Professor' key={form.key('teacher')} {...form.getInputProps('teacher')} w='100%' />
        <TextInput size="sm" radius="md" label='Idade' key={form.key('ageGroup')} {...form.getInputProps('ageGroup')} w='100%' />
      </Flex>

      <Flex gap={8} w='100%' justify='space-between'>
        <TextInput size="sm" radius="md" label='Info Extra #1' key={form.key('extraInfo')} {...form.getInputProps('extraInfo')} w='100%' />
        <TextInput size="sm" radius="md" label='Info Extra #2' key={form.key('extraInfo2')} {...form.getInputProps('extraInfo2')} w='100%' />
      </Flex>

      <Flex w='100%' justify='end' gap={8}>
        <Button onClick={cancel} variant="subtle">Cancelar</Button>
        <Button onClick={validateAndConfirm}>Salvar</Button>
      </Flex>
    </Flex>
  );
};
