import { AppShell } from '@mantine/core';
import LandingHeader from './LandingHeader';

const LandingAppShell: React.FC = ({ children }) => {
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
      header={<LandingHeader />}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
    >
      {children}
    </AppShell>
  );
};

export default LandingAppShell;
