// eslint-disable-next-line @typescript-eslint/no-var-requires
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

export const getContrastingTextColor = (color: any, darkColor = '#000', lightColor = '#fff') => {
  const darkColorObj = getColor(darkColor);
  const lightColorObj = getColor(lightColor);

  const contrastWithDark = color.contrast(darkColorObj);
  const contrastWithLight = color.contrast(lightColorObj);

  return contrastWithDark > contrastWithLight ? darkColor : lightColor;
};
/*
const contrasts = [0.15, 0.3, 0.5, 0.7, 0.85, 1, 0.85, 0.7, 0.5, 0.35];

export const createPalette = (baseColor: string) => {
  const color = Color(baseColor).rgb();

  const mainPalette = [];
  const accentPalette = [];
  const mainColor = color;

  for (let index = 0; index < 10; index++) {
    if (index < 5) {
      mainPalette.push(Color('white').mix(mainColor, contrasts[index]));
    } else if (index === 5) {
      mainPalette.push(mainColor);
    } else if (index >= 6) {
      mainPalette.push(Color('black').mix(mainColor, contrasts[index]));
    }
  }

  const accentColor = mainColor.saturate(1).rotate(3);
  accentPalette.push(accentColor.lighten(0.7));
  accentPalette.push(accentColor.lighten(0.5));
  accentPalette.push(accentColor.lighten(0.3));
  accentPalette.push(accentColor.lighten(0.1));

  return mainPalette.concat(accentPalette);
};
*/
