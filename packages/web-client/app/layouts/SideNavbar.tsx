import { Navbar } from '@mantine/core';

type Props = {
  opened: boolean;
};

const SideNavbar: React.FC<Props> = ({ opened }) => {
  return (
    <Navbar
      p="lg"
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
  );
};

export default SideNavbar;
