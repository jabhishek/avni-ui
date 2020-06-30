import { ITheme } from './ITheme';

export const defaultTheme: ITheme = {
  fonts: {
    body: 'Roboto, sans-serif',
  },
  colors: {
    primary: '#ff7070',
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
  variantTheme: {
    buttons: {
      primary: {
        color: 'white',
        bgColor: 'primary',
      },
    },
  },
};