import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import useColorSchemeFromLocalStorage from './hooks/useColorSchemeFromLocalStorage';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Secure-U Password Manager',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorSchemeFromLocalStorage();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <Outlet />
          </MantineProvider>
        </ColorSchemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
