import { defaultTheme, ITheme, ThemeColor, Swatch } from '@avni-ui/core';
import get from 'lodash.get';
import { getContrastingTextColor, createSwatch } from '@avni-ui/color';
import { SizeVariants } from '../models';

export const baseBoxShadow =
  '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)';
const hoverBoxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`;

const getSwatch = (baseColor: string | Swatch): Swatch => {
  if (typeof baseColor === 'string') {
    return createSwatch(baseColor);
  }

  return baseColor;
};

const getColorProps = ({ baseColor, theme }: { baseColor: ThemeColor; theme: ITheme }) => {
  const swatch: Swatch = getSwatch(baseColor);

  console.log('swatch', swatch);

  const color = swatch['500'].color;

  const hoverBgColor = swatch['400'].color;
  const outlineColor = swatch['600'].color;

  return {
    backgroundColor: color,
    color: getContrastingTextColor(color, theme.colors.textBlack),
    ':hover:enabled': {
      backgroundColor: hoverBgColor,
      boxShadow: hoverBoxShadow,
    },
    ':focus:enabled, :active:enabled': {
      outline: `1px solid ${outlineColor}`,
      outlineOffset: '2px',
      boxShadow: `none`,
    },
    ':disabled': {
      opacity: 0.2,
      boxShadow: 'none',
      cursor: 'not-allowed',
    },
  };
};

export const defaultStyle = {
  cursor: 'pointer',
  border: 'none',
  borderRadius: '2px',
  outline: 'none',
  transition: '0.25s background-color, 0.25s color',
  boxShadow: baseBoxShadow,
};

const getSizeProps = ({ size, theme }: { size?: SizeVariants; theme: ITheme }) => {
  const { space, fontSizes } = theme;
  if (size === 'small') {
    return {
      fontSize: fontSizes.xs,
      padding: `${space.sm} ${space.md}`,
      minWidth: 80,
    };
  }
  if (size === 'medium') {
    return {
      fontSize: fontSizes.md,
      padding: `${space.sm} ${space.md}`,
      minWidth: 100,
    };
  }
  return {
    fontSize: fontSizes.md,
    padding: `${space.md} ${space.xl}`,
    minWidth: 120,
  };
};

const getColorFromUserTheme = (baseColor: string, theme: ITheme): string | undefined => {
  const color = get(theme, `colors.${baseColor}`);
  return color && typeof color === 'string' ? color : undefined;
};

const getBaseColorToUse = (baseColor: string | undefined, theme: ITheme): ThemeColor => {
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

export const getStyles = ({
  baseColor,
  theme,
  size,
}: {
  baseColor?: string;
  size?: SizeVariants;
  theme: ITheme;
}) => {
  const colorProps = getColorProps({ baseColor: getBaseColorToUse(baseColor, theme), theme });
  const sizeProps = getSizeProps({ size, theme });
  return { ...colorProps, ...sizeProps };
};
