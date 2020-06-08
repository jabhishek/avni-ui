import { ITheme } from './ITheme';

export const defaultTheme: ITheme = {
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
  space: {
    none: 0,
    small: 4,
    med: 8,
    large: 12,
    xl: 16,
  },
  radii: {
    none: 0,
    small: 4,
    med: 8,
    large: 12,
    round: '100%',
  },
  breakpoints: ['320px', '768px', '1024px', '1824px'],
  variants: {
    buttons: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
    },
  },
};
