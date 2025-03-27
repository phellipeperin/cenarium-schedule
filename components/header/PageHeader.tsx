'use client';

import { Button, Flex, Title } from '@mantine/core';

interface Props {
  title: string;
  buttonLabel?: string;
  buttonDisabled?: boolean;
  buttonAction?: () => void;
}

export const PageHeader = ({ title, buttonLabel = '', buttonDisabled = false, buttonAction = () => {} }: Props) => {
  return (
    <Flex w='100%' justify='space-between' align='center' mb={20}>
      <Title order={4} c='primary'>{title}</Title>
      {buttonLabel && (<Button onClick={buttonAction} disabled={buttonDisabled}>{buttonLabel}</Button>)}
    </Flex>
  );
};
