import { parseToHsl, lighten, darken } from 'polished';

export const getHoverColor = (bgColor: string): string => {
  const lightness = parseToHsl(bgColor).lightness;
  if (lightness < 0.5) {
    return lighten(0.1, bgColor);
  }
  return darken(0.05, bgColor);
};
