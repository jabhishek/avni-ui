import * as React from 'react';
import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  grid,
  shadow,
  typography,
  opacity,
  overflow,
} from 'styled-system';
import { shouldForwardProp } from './shouldForwardProp';
import { customProps } from './customProps';
import { BoxProps } from './BoxProps';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Box: React.FC<BoxProps> = styled('div', { shouldForwardProp })(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  opacity,
  overflow,
  customProps,
);
