import { Header, Space, Text, useMantineColorScheme } from '@mantine/core';
import ThemeSwitchButton from '~/components/Header/ThemeSwitchButton';
import SignInButton from '~/components/LandingHeader/SignInButton';
import SignUpButton from '~/components/LandingHeader/SignUpButton';

const LandingHeader: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();

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
          <SignInButton />
          <Space w="sm" />
          <SignUpButton />
          <Space w="sm" />
          <ThemeSwitchButton />
        </div>
      </div>
    </Header>
  );
};

export default LandingHeader;
