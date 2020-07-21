import { ITheme, Swatch, ThemeColor, defaultTheme } from '@avni-ui/core';
import { createSwatch, getContrastingTextColor } from '@avni-ui/color';
import get from 'lodash.get';
import { getHoverColor } from '@avni-ui/color';
import { ButtonVariants } from '../models';

const disabledStateStyles = {
  opacity: 0.2,
  boxShadow: 'none',
  cursor: 'not-allowed',
};

const getFocusStateStyles = (outlineColor: string) => {
  return {
    outline: `1px solid ${outlineColor}`,
    outlineOffset: '2px',
    boxShadow: `none`,
  };
};

export const baseBoxShadow =
  '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)';
const hoverBoxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`;
const getSwatch = (baseColor: string | Swatch): Swatch => {
  if (typeof baseColor === 'string') {
    return createSwatch(baseColor);
  }

  return baseColor;
};
const getFilledButtonStyles = (swatch: Swatch, theme: ITheme) => {
  const color = swatch['500'].color;

  const hoverBgColor = swatch['400'].color;
  const outlineColor = swatch['600'].color;

  return {
    backgroundColor: color,
    color: getContrastingTextColor(color, theme.colors.textColor),
    ':hover:enabled': {
      backgroundColor: hoverBgColor,
      boxShadow: hoverBoxShadow,
    },
    ':focus:enabled, :active:enabled': getFocusStateStyles(outlineColor),
    ':disabled': disabledStateStyles,
  };
};

const getOutlineButtonStyles = (swatch: Swatch, theme: ITheme) => {
  const bodyBackgroundColor = theme.colors.backgroundColor;

  console.log('bodyBackgroundColor', bodyBackgroundColor);

  const bgColor = swatch['500'].color;
  const textColor = getContrastingTextColor(
    bodyBackgroundColor,
    swatch['700'].color,
    swatch['200'].color,
  );

  const hoverBgColor = getHoverColor(bodyBackgroundColor);
  const hoverTextColor = getContrastingTextColor(
    hoverBgColor,
    swatch['700'].color,
    swatch['200'].color,
  );
  const outlineColor = swatch['600'].color;

  return {
    border: `2px solid ${bgColor}`,
    backgroundColor: 'transparent',
    boxShadow: `none`,
    color: textColor,
    ':hover:enabled, :focus:enabled, :active:enabled': {
      backgroundColor: hoverBgColor,
      color: hoverTextColor,
    },
    ':focus:enabled, :active:enabled': {
      outline: `1px solid ${outlineColor}`,
      outlineOffset: '2px',
      boxShadow: `none`,
    },
    ':disabled': disabledStateStyles,
  };
};

export const getColorProps = ({
  baseColor,
  theme,
  variant,
}: {
  baseColor: ThemeColor;
  theme: ITheme;
  variant: ButtonVariants;
}) => {
  const swatch: Swatch = getSwatch(baseColor);

  if (variant === 'filled') {
    return getFilledButtonStyles(swatch, theme);
  }
  if (variant === 'outline') {
    return getOutlineButtonStyles(swatch, theme);
  }

  return {};
};
export const getColorFromUserTheme = (baseColor: string, theme: ITheme): string | undefined => {
  const color = get(theme, `colors.${baseColor}`);
  return color && typeof color === 'string' ? color : undefined;
};
export const getBaseColorToUse = (baseColor: string | undefined, theme: ITheme): ThemeColor => {
  if (baseColor) {
    // check if it's a color defined in theme
    const colorFromUserTheme = getColorFromUserTheme(baseColor, theme);
    if (colorFromUserTheme) {
      return colorFromUserTheme;
    }

    return baseColor;
  }

  // primary color from the theme
  return defaultTheme.colors.primary;
};
