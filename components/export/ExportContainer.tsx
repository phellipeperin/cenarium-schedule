'use client';

import { Button, Divider, Flex, Textarea, Text } from '@mantine/core';
import { PageHeader } from '../header/PageHeader';
import { useState } from 'react';
import { exportModalities as convertModalities } from '../../utils/converter/modality.exporter';
import { exportSchedule as convertSchedule } from '../../utils/converter/schedule.exporter';
import { useLoadAllClassSchedule, useLoadAllModalities } from '../../hooks/serverActions';
import { notifications } from '@mantine/notifications';


export const ExportContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalityExport, setModalityExport] = useState('');
  const [scheduleExport, setScheduleExport] = useState('');
  const loadAllModalities = useLoadAllModalities();
  const loadAllClassSchedule = useLoadAllClassSchedule();

  const exportModalities = async (): Promise<void> => {
    setIsLoading(true);
    const modalities = await loadAllModalities();
    const html = convertModalities(modalities);
    setModalityExport(html);
    setTimeout(() => {
      notifications.show({ message: 'Exportação concluída com sucesso!' });
      handleCopy(html);
      setIsLoading(false);
    }, 100);
  };

  const exportSchedule = async (): Promise<void> => {
    setIsLoading(true);
    const modalities = await loadAllModalities();
    const classSchedule = await loadAllClassSchedule();
    const html = convertSchedule(classSchedule, modalities);
    setScheduleExport(html);
    setTimeout(() => {
      notifications.show({ message: 'Exportação concluída com sucesso!' });
      handleCopy(html);
      setIsLoading(false);
    }, 100);
  };

  const handleCopy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      notifications.show({ message: 'Copiado, agora é só colar no site!' });
    } catch (err) {
      notifications.show({ message: 'Não deu para copiar automaticamente, por favor faça-o manualmente.' });
    }
  };

  return (
    <>
      <PageHeader title='Exportar Modalidades' buttonLabel={isLoading ? 'Trabalhando... Aguarde' : 'Exportar'} buttonDisabled={isLoading} buttonAction={exportModalities} />
      <Textarea
        size="xl"
        placeholder="Use o botão acima para exportar as modalidades"
        disabled
        autosize
        minRows={4}
        maxRows={10}
        value={modalityExport}
      />
      {modalityExport && (
        <Flex w='100%' align='center' justify='end' gap={20} mt={12}>
          <Text>O texto (HTML) gerado deve ser copiado na parte de modalidades (logo acima da tabela de horários).</Text>
          <Button onClick={() => handleCopy(modalityExport)} variant='outline'>
            Copiar
          </Button>
        </Flex>
      )}
      <Divider my={40} />
      <PageHeader title='Exportar Horários' buttonLabel={isLoading ? 'Trabalhando... Aguarde' : 'Exportar'} buttonDisabled={isLoading} buttonAction={exportSchedule} />
      <Textarea
        size="xl"
        placeholder="Use o botão acima para exportar os horários"
        disabled
        autosize
        minRows={4}
        maxRows={20}
        value={scheduleExport}
      />
      {scheduleExport && (
        <Flex w='100%' align='center' justify='end' gap={20} mt={12}>
          <Text>O texto (HTML) gerado deve ser copiado na tabela de modalidades.</Text>
          <Button onClick={() => handleCopy(modalityExport)} variant='outline'>
            Copiar
          </Button>
        </Flex>
      )}
    </>
  );
};
