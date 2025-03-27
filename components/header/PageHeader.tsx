'use client';

import { Button, Flex, Title } from '@mantine/core';

interface Props {
  title: string;
  buttonLabel?: string;
  buttonAction?: () => void;
}

export const PageHeader = ({ title, buttonLabel = '', buttonAction = () => {} }: Props) => {
  return (
    <Flex w='100%' justify='space-between' align='center' mb={20}>
      <Title order={4} c='primary'>{title}</Title>
      {buttonLabel && (<Button onClick={buttonAction}>{buttonLabel}</Button>)}
    </Flex>
  );
};
