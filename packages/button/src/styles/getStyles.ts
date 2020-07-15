import { ITheme } from '@avni-ui/core';
import { ButtonVariants, SizeVariants } from '../models';
import { baseBoxShadow, getBaseColorToUse, getColorProps } from './colorStyles';

export const defaultStyle = {
  cursor: 'pointer',
  border: 'none',
  borderRadius: '2px',
  outline: 'none',
  transition: '0.25s background-color, 0.25s opacity, 0.25s box-shadow',
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

export const getStyles = ({
  baseColor,
  theme,
  size,
  variant,
}: {
  baseColor?: string;
  size?: SizeVariants;
  theme: ITheme;
  variant: ButtonVariants;
}) => {
  const colorProps = getColorProps({
    baseColor: getBaseColorToUse(baseColor, theme),
    theme,
    variant,
  });
  const sizeProps = getSizeProps({ size, theme });
  return { ...colorProps, ...sizeProps };
};
