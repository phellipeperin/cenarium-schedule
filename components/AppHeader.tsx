'use server';

import Link from 'next/link';
import { Anchor, Group } from '@mantine/core';

interface Props {
  height: number;
}

export const AppHeader = async ({ height }: Props) => {
  return (
    <Group bg='primary' h={height} w='100%' align='center' justify='center'>
      <Anchor component={Link} href='/' c='white' fw={700}>
        Horários
      </Anchor>
      <Anchor component={Link} href='/modality' c='white' fw={700}>
        Modalidades
      </Anchor>
      <Anchor component={Link} href='/export' c='white' fw={700}>
        Converter
      </Anchor>
    </Group>
  );
};
