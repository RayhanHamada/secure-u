import { ActionIcon, Header, Text, useMantineColorScheme } from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

const LandingHeader: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const isDark = colorScheme === 'dark';

  return (
    <Header
      height={70}
      p="md"
      styles={(theme) => ({
        main: {
          background:
            colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      >
        <Text size="lg">
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <b>SecureU</b>
          </a>
        </Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <ActionIcon
            variant="outline"
            color={isDark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {isDark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </div>
      </div>
    </Header>
  );
};

export default LandingHeader;
