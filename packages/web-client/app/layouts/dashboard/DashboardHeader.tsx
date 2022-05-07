import {
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';

type Props = {
  opened: boolean;
  burgerOnClick: () => unknown;
};

const DashboardHeader: React.FC<Props> = ({ opened, burgerOnClick }) => {
  const theme = useMantineTheme();
  return (
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
            onClick={burgerOnClick}
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
  );
};

export default DashboardHeader;
