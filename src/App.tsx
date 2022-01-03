import React, { useCallback, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { AppTheme } from './types/utils/colors';

import { DefaultLayout } from './layouts/DefaultLayout';

import { Greetings } from './components/Greetings';
import { ErrorBoundary } from './components/ErrorBoundary';

import { theme } from './styles/theme';
import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  const [appTheme, setAppTheme] = useState<AppTheme>('light');

  const toggleAppTheme = useCallback(() => {
    setAppTheme(state => (state === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storageTheme = localStorage.getItem('@appTheme') as AppTheme | null;
      setAppTheme(storageTheme || 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@appTheme', appTheme);
  }, [appTheme]);

  return (
    <ThemeProvider theme={theme[appTheme]}>
      <GlobalStyle />

      <DefaultLayout appTheme={appTheme} toggleAppTheme={toggleAppTheme}>
        <ErrorBoundary>
          <Greetings />
        </ErrorBoundary>
      </DefaultLayout>
    </ThemeProvider>
  );
};
