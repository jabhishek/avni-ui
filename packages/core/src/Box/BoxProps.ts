import * as React from 'react';
import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  FlexboxProps,
  ShadowProps,
  GridProps,
  OpacityProps,
  OverflowProps,
  TypographyProps,
} from 'styled-system';

export type StyledSystemProps = LayoutProps &
  ColorProps &
  SpaceProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  FlexboxProps &
  ShadowProps &
  GridProps &
  OpacityProps &
  OverflowProps &
  TypographyProps;

export type BoxProps = React.AllHTMLAttributes<HTMLElement> & StyledSystemProps;
