import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { MoonStars, Sun } from 'tabler-icons-react';

const ThemeSwitchButton: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const { hovered, ref } = useHover();

  return (
    <Tooltip
      opened={hovered}
      label="Ctrl + J"
      radius="xl"
      position="bottom"
      withArrow
    >
      <div ref={ref}>
        <ActionIcon
          variant="outline"
          color={isDark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
        >
          {isDark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
      </div>
    </Tooltip>
  );
};

export default ThemeSwitchButton;
