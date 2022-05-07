import { AppShell } from '@mantine/core';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSideNavbar from './DashboardSideNavbar';

const DashboardAppShell: React.FC = ({ children }) => {
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
      navbar={<DashboardSideNavbar opened={opened} />}
      header={
        <DashboardHeader
          opened={opened}
          burgerOnClick={() => setOpened(!opened)}
        />
      }
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
    >
      {children}
    </AppShell>
  );
};

export default DashboardAppShell;
