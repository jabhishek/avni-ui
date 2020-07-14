// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Palette, PaletteColor } from './Theme/utils/types';

const Color = require('color');

export const getColor = function getColor(color: string): any {
  return Color(color);
};

export const getContrastingColor = (baseColor: string, contrastLevel: number) => {
  const colorObject = getColor(baseColor);
  const lightness = colorObject.lightness();
  const isDark = colorObject.isDark();

  let contrast = 1;
  let newLightness = lightness;
  let color2 = colorObject;

  while (contrast < contrastLevel && newLightness > 0 && newLightness < 100) {
    if (isDark) {
      newLightness--;
    } else {
      newLightness++;
    }

    color2 = colorObject.lightness(newLightness);
    contrast = colorObject.contrast(color2);
  }

  return color2;
};

export const getContrastingTextColor = (color: string, darkColor = '#000', lightColor = '#fff') => {
  const colorObj = getColor(color);
  // Another approach, but it works only for black and white text colors
  // const y = (0.2126 * (R / 255)) ^ (2.2 + 0.7151 * (G / 255)) ^ (2.2 + 0.0721 * (B / 255)) ^ 2.2;
  // if y > 0.18 use black otherwise use white

  const darkColorObj = getColor(darkColor);
  const lightColorObj = getColor(lightColor);

  const contrastWithDark = colorObj.contrast(darkColorObj);
  const contrastWithLight = colorObj.contrast(lightColorObj);

  return contrastWithDark > contrastWithLight ? darkColor : lightColor;
};

const contrasts = [0.15, 0.3, 0.5, 0.7, 0.85, 1, 0.85, 0.7, 0.5, 0.35];
const colorWeights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const stringifyColor = (color: any): string => {
  return color.hsl().toString();
};

const getPaletteColor = (paletteColor: any): PaletteColor => {
  return {
    color: stringifyColor(paletteColor),
    contrastToWhite: paletteColor.contrast(Color('#fff')),
    contrastToBlack: paletteColor.contrast(Color('#000')),
  };
};

export const createPalette = (baseColor: string): Palette => {
  const color = Color(baseColor).rgb();

  const mainPalette: Palette = {};
  const mainColor = color;
  let paletteColor;

  for (let index = 0; index < 10; index++) {
    const colorWeight = colorWeights[index];
    if (index < 5) {
      paletteColor = Color('white').mix(mainColor, contrasts[index]);
      mainPalette[colorWeight] = getPaletteColor(paletteColor);
    } else if (index === 5) {
      mainPalette[colorWeight] = getPaletteColor(mainColor);
    } else if (index >= 6) {
      paletteColor = Color('black').mix(mainColor, contrasts[index]);
      mainPalette[colorWeight] = getPaletteColor(paletteColor);
    }
  }

  return mainPalette;
};
