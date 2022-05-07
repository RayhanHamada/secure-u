import { Header, Text } from '@mantine/core';

const LandingHeader: React.FC = () => {
  return (
    <Header height={70} p="md">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Text>
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <b>SecureU</b>
          </a>
        </Text>
      </div>
    </Header>
  );
};

export default LandingHeader;
