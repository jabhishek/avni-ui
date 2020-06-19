import { getColor, defaultTheme, useTheme } from '@avni-ui/core';
// @ts-ignore
import get from 'lodash.get';
import { act } from 'react-dom/test-utils';
import { ButtonVariants } from './models';

const colorBlack = getColor(`#000`);
const colorWhite = getColor(`#fff`);

const getContrastingColor = (color: any) => {
  const contrastDark = color.contrast(colorBlack);
  const contrastLight = color.contrast(colorWhite);
  /*

  console.log('color', color.hsl().string());
  console.log('contrastDark', contrastDark, contrastLight);
*/

  return contrastDark > contrastLight ? '#000' : '#fff';
};

const getColorProps = ({ baseColor, variant }: { baseColor: string; variant: ButtonVariants }) => {
  const color = getColor(baseColor).rgb();

  const action = color.isDark() ? 'lighten' : 'darken';

  const borderColor = color[action](0.1).string();
  const hoverBgColor = color[action](0.1);

  const hoverTextColor = getContrastingColor(hoverBgColor);

  return {
    backgroundColor: baseColor,
    color: getContrastingColor(color),
    border: `1px solid ${borderColor}`,
    _hover: { backgroundColor: hoverBgColor.hsl().string(), color: hoverTextColor, opacity: 0.9 },
    /*_hover: { opacity: 0.9 },*/
  };
};

const defaultStyle = {
  p: '5px 20px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '2px',
  transition: '0.5s all',
};

const getColorFromUserTheme = (baseColor: string): string | undefined => {
  const theme = useTheme();

  const color = get(theme, `colors.${baseColor}`);
  return color && typeof color === 'string' ? color : undefined;
};

const getBaseColorToUse = (baseColor: string | undefined): string => {
  if (baseColor) {
    if (getColor(baseColor)) {
      return baseColor;
    }

    const colorFromUserTheme = getColorFromUserTheme(baseColor);
    if (colorFromUserTheme) {
      return colorFromUserTheme;
    }
  }

  return get(defaultTheme, `colors.primary`);
};

export const useStyles = ({
  baseColor = 'red',
  variant = 'outline',
}: {
  baseColor?: string;
  variant?: ButtonVariants;
}) => {
  const colorProps = getColorProps({ baseColor: getBaseColorToUse(baseColor), variant });
  return { ...defaultStyle, ...colorProps };
};
