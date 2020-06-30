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
      newLightness++;
    } else {
      newLightness--;
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
