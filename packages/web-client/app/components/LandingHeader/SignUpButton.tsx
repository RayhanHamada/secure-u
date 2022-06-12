import { Button } from '@mantine/core';
import { Link } from '@remix-run/react';

const SignUpButton: React.FC = (_props) => {
  return (
    <Link to={'/signup'}>
      <Button size="xs" variant="outline">
        Sign Up
      </Button>
    </Link>
  );
};

export default SignUpButton;
