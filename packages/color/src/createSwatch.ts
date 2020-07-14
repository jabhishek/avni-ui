import { Swatch, SwatchColor } from '@avni-ui/core';
import { mix, getContrast, parseToRgb, rgbToColorString } from 'polished';

const contrasts = [0.15, 0.3, 0.5, 0.7, 0.85, 1, 0.85, 0.7, 0.5, 0.35];
const colorWeights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const toHslString = (color: string): string => {
  const rgb = parseToRgb(color);
  return rgbToColorString(rgb);
};

const getSwatchColor = (swatchColor: string): SwatchColor => {
  return {
    color: toHslString(swatchColor),
    contrastToWhite: getContrast(swatchColor, '#fff'),
    contrastToBlack: getContrast(swatchColor, '#000'),
  };
};

export const createSwatch = (baseColor: string): Swatch => {
  const mainSwatch: Swatch = {};
  const mainColor = baseColor;
  let swatchColor;

  for (let index = 0; index < 10; index++) {
    const colorWeight = colorWeights[index];
    if (index < 5) {
      swatchColor = mix(contrasts[index], mainColor, 'white');
      mainSwatch[colorWeight] = getSwatchColor(swatchColor);
    } else if (index === 5) {
      mainSwatch[colorWeight] = getSwatchColor(mainColor);
    } else if (index >= 6) {
      swatchColor = mix(contrasts[index], mainColor, 'black');
      mainSwatch[colorWeight] = getSwatchColor(swatchColor);
    }
  }

  return mainSwatch;
};
