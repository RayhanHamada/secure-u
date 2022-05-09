import { AppShell, useMantineColorScheme } from '@mantine/core';
import LandingHeader from './LandingHeader';

const LandingAppShell: React.FC = ({ children }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          background:
            colorScheme === 'dark'
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
