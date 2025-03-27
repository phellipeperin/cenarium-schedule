'use server';

import { AppShell, AppShellMain, AppShellHeader, Container } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { AppHeader } from '../components/header/AppHeader';

type Props = {
  children?: React.ReactNode;
};

export const RootTemplate = async ({ children }: Props) => {
  const headerHeight = 60;

  return (
    <AppShell header={{ height: headerHeight }}>
      <Notifications position='bottom-right' color='primary' />
      <AppShellHeader>
        <AppHeader height={headerHeight} />
      </AppShellHeader>
      <AppShellMain bg='gray.0'>
        <Container fluid py={24}>
          {children}
        </Container>
      </AppShellMain>
    </AppShell>
  );
};
