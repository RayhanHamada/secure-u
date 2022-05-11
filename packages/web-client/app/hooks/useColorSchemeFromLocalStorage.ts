import type { ColorScheme } from '@mantine/core';
import { useLocalStorageState } from 'ahooks';

const useColorSchemeFromLocalStorage = () => {
  const [localColorScheme, setLocalColorScheme] =
    useLocalStorageState<ColorScheme>('color-scheme');

  const colorScheme = localColorScheme || 'dark';

  const toggleColorScheme = (value?: ColorScheme) => {
    setLocalColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return {
    colorScheme,
    toggleColorScheme,
  };
};

export default useColorSchemeFromLocalStorage;
