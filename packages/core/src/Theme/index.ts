import { ITheme } from './ITheme';
import { pxToRem, typography } from './utils/fonts';
import { colors } from './utils/colors';

export const defaultTheme: ITheme = {
  ...typography,
  colors,
  space: {
    none: 0,
    xs: pxToRem(4),
    sm: pxToRem(8),
    md: pxToRem(12),
    lg: pxToRem(16),
    xl: pxToRem(24),
    '2xl': pxToRem(32),
    '3xl': pxToRem(48),
  },
};
