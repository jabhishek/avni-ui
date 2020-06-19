import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import {
  background,
  border,
  buttonStyle,
  color,
  colorStyle,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  textStyle,
  typography,
} from 'styled-system';
import { CUSTOM_PROPS, customProps } from './customProps';

export const allStyled = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
  customProps,
);

const styledProps: Array<string> = allStyled.propNames as Array<string>;

export const shouldForwardProp = createShouldForwardProp([...styledProps, ...CUSTOM_PROPS]);
