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
import { CUSTOM_PROPS } from './customProps';

const all = compose(
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
);
const styledProps: Array<string> = all.propNames as Array<string>;

export const shouldForwardProp = createShouldForwardProp([...styledProps, ...CUSTOM_PROPS]);
