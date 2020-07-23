import { getContrast } from 'polished';

export const getContrastingTextColor = (color: string, darkColor = '#000', lightColor = '#fff') => {
  // Another approach is to use gray-scale contrast, but it works only for black and white text colors
  // const y = (0.2126 * (R / 255)) ^ (2.2 + 0.7151 * (G / 255)) ^ (2.2 + 0.0721 * (B / 255)) ^ 2.2;
  // if y > 0.18 use black otherwise use white
  const contrastWithDark = getContrast(color, darkColor);
  const contrastWithLight = getContrast(color, lightColor);

  return contrastWithDark > contrastWithLight ? darkColor : lightColor;
};
