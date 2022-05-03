import { AppShell, Text } from '@mantine/core';
import { useState } from 'react';
import AppHeader from '~/layouts/Header';
import SideNavbar from '~/layouts/SideNavbar';

export default function Dashboard() {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbar={<SideNavbar opened={opened} />}
      header={
        <AppHeader opened={opened} burgerOnClick={() => setOpened(!opened)} />
      }
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
