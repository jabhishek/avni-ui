import { InterpolationWithTheme } from '@emotion/core';
import { useTheme, ITheme } from '@avni-ui/core';
import { SwitchSize } from './index';

const padding = 2;

const SIZE_MAPPING = {
  sm: 20,
  md: 30,
  lg: 40,
};

const defaultButtonProps: InterpolationWithTheme<ITheme> = {
  userSelect: 'none',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  appearance: 'none',
  position: 'relative',
  padding,
};

const defaultKnobProps: InterpolationWithTheme<ITheme> = {
  borderRadius: '100%',
  display: 'block',
  backgroundColor: 'hsl(0, 100%, 98%)',
  transition: '0.3s transform',
};

const defaultLabelProps: InterpolationWithTheme<ITheme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  pointerEvents: 'none',
  userSelect: 'none',
};

const getColorFromThemeKey = (colorKey: string, theme: ITheme): string => {
  const primaryColorInTheme = theme.colors[colorKey];
  if (typeof primaryColorInTheme === 'string') {
    return primaryColorInTheme;
  }

  return primaryColorInTheme['500'];
};

const getButtonColorStyles = (on: boolean, theme: ITheme) => {
  const primaryColor = getColorFromThemeKey('primary', theme);
  return {
    backgroundColor: on ? primaryColor : 'hsl(0, 0%, 80%)',
  };
};

export const getButtonStyles = (
  on: boolean,
  switchWidth: number,
  switchHeight: number,
  theme: ITheme,
) => {
  const colorStyles = getButtonColorStyles(on, theme);
  return {
    ...defaultButtonProps,
    ...colorStyles,
    width: switchWidth,
    borderRadius: switchHeight,

    '&:focus': {
      boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
    },
  };
};

export const getKnobStyles = (on: boolean, knobSize: number, knobLeftOn: number) => {
  return {
    ...defaultKnobProps,
    width: knobSize,
    height: knobSize,
    transform: on ? `translateX(${knobLeftOn}px)` : 'translateX(0)',
  };
};

export const getLabelStyles = (on: boolean, size: number) => {
  return {
    ...defaultLabelProps,
    width: size,
    lineHeight: `${size}px`,
    left: on ? 0 : 'auto',
    right: on ? 'auto' : 0,
    fontSize: size / 2,
  };
};

const getSizeAttributes = (size: SwitchSize) => {
  const knobSize: number = typeof size === 'string' ? SIZE_MAPPING[size] : size;
  const switchWidth = knobSize * 2;
  const knobLeftOn = switchWidth - knobSize - 2 * padding;
  const switchHeight = knobSize + 2 * padding;

  return { knobSize, switchWidth, knobLeftOn, switchHeight };
};

export const useStyles = (on: boolean, size: SwitchSize) => {
  const theme: ITheme = useTheme();

  const { knobSize, switchWidth, knobLeftOn, switchHeight } = getSizeAttributes(size);
  const buttonStyles = getButtonStyles(on, switchWidth, switchHeight, theme);
  const knobStyles = getKnobStyles(on, knobSize, knobLeftOn);
  const labelStyles = getLabelStyles(on, switchHeight);

  return { buttonStyles, knobStyles, labelStyles };
};
