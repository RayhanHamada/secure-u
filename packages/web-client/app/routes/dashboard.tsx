import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';

export default function Dashboard() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
        >
          <Navbar.Section>My Passwords</Navbar.Section>
          <Navbar.Section>My Secret Notes</Navbar.Section>
          <Navbar.Section>Shared Secrets</Navbar.Section>
          <Navbar.Section grow>Generate Password</Navbar.Section>
          <Navbar.Section>Settings</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>
              <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                <b>SecureU</b>
              </a>{' '}
              <a
                href="/dashboard"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                | Dashboard
              </a>
            </Text>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
