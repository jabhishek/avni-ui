import { Typography } from './types';

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
  body: pxToRem(16),
  l1: pxToRem(18),
  l2: pxToRem(20),
  l3: pxToRem(24),
  l4: pxToRem(30),
  l5: pxToRem(36),
  l6: pxToRem(48),
};

export const typography: Typography = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  fonts,
  fontSizes,
};
