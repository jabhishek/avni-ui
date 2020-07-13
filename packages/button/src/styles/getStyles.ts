import { colorUtils, defaultTheme, ITheme } from '@avni-ui/core';
import get from 'lodash.get';
import { ButtonVariants } from '../models';

const { getColor, getContrastingColor, getContrastingTextColor } = colorUtils;

export const baseBoxShadow =
  '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)';
const hoverBoxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`;

const getColorProps = ({ baseColor }: { baseColor: string }) => {
  const color = getColor(baseColor).rgb();

  const hoverBgColor = getContrastingColor(baseColor, 1.15);
  const outlineColor = getContrastingColor(baseColor, 3);

  return {
    backgroundColor: baseColor,
    color: getContrastingTextColor(color),
    ':hover': {
      backgroundColor: hoverBgColor.hsl().string(),
      boxShadow: hoverBoxShadow,
    },
    ':focus, :active': {
      boxShadow: `0px 0px 1px 2px ${outlineColor}`,
    },
  };
};

export const defaultStyle = (theme: ITheme) => ({
  cursor: 'pointer',
  border: 'none',
  borderRadius: '2px',
  outline: 'none',
  transition: '0.25s all',
  fontFamily: theme.fonts.body,
  boxShadow: baseBoxShadow,
});

const getSizeProps = ({ theme }: { theme: ITheme }) => {
  return {
    fontSize: theme.fontSizes.md,
    padding: `${theme.space.md} ${theme.space.lg}`,
  };
};

const getColorFromUserTheme = (baseColor: string, theme: ITheme): string | undefined => {
  const color = get(theme, `colors.${baseColor}`);
  return color && typeof color === 'string' ? color : undefined;
};

const getBaseColorToUse = (baseColor: string | undefined, theme: ITheme): string => {
  if (baseColor) {
    if (getColor(baseColor)) {
      return baseColor;
    }

    const colorFromUserTheme = getColorFromUserTheme(baseColor, theme);
    if (colorFromUserTheme) {
      return colorFromUserTheme;
    }
  }

  return get(defaultTheme, `colors.primary`);
};

export const getStyles = ({
  baseColor = 'red',
  theme,
}: {
  baseColor?: string;
  variant?: ButtonVariants;
  theme: ITheme;
}) => {
  const colorProps = getColorProps({ baseColor: getBaseColorToUse(baseColor, theme) });
  const sizeProps = getSizeProps({ theme });
  return { ...colorProps, ...sizeProps };
};