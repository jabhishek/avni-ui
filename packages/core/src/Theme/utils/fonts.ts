const body = 'Roboto, sans-serif';
const heading = 'Roboto Slab, serif';
const mono = 'Roboto mono, monospace';

export const DEFAULT_BASE_FONT_SIZE = 10;
export const pxToRem = (px: number, baseFontSize = DEFAULT_BASE_FONT_SIZE) => {
  return `${px / baseFontSize}rem`;
};

const fonts = {
  body,
  heading,
  mono,
};

const fontSizes = {
  xs: pxToRem(12),
  sm: pxToRem(14),
  md: pxToRem(16),
  lg: pxToRem(18),
  xl: pxToRem(20),
  '2xl': pxToRem(24),
  '3xl': pxToRem(30),
  '4xl': pxToRem(36),
  '5xl': pxToRem(48),
  '6xl': pxToRem(64),
};

export const typography = {
  fonts,
  fontSizes,
};
