import * as React from 'react';
import { Context, useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../Theme';
import { ITheme } from '..';

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: {
  theme?: ITheme;
  children: React.ReactChildren | React.ReactChild;
}) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
ThemeProvider.displayName = 'ThemeProvider';

export const useTheme = (): ITheme => {
  const theme = useContext<ITheme>(ThemeContext as Context<ITheme>);

  if (typeof theme === 'undefined') {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
