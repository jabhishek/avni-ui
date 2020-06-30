/** @jsx jsx */
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { FunctionComponent } from 'react';
import { config } from '../Box/customProps';
import { BoxProps } from '../Box/BoxProps';
import { Box } from '../Box';

/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */
const hover = '&:hover';
const active = '&:active, &[data-active=true]';
const focus = '&:focus';
const visited = '&:visited';
const disabled =
  '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover';

// Transform the custom alias to a format that styled-system CSS supports
const transformAlias = (prop: string, propValue: string) => {
  const configKeys = Object.keys(config);
  const result: any = {};

  if (configKeys.includes(prop)) {
    if (config[prop] === true) {
      result[prop] = propValue;
    }
  } else {
    result[prop] = propValue;
  }
  return result;
};

export const transformAliasProps = (props: any) => {
  let result = {};
  for (const prop in props) {
    if (typeof props[prop] === 'object') {
      result = { ...result, [prop]: transformAliasProps(props[prop]) };
    } else {
      result = { ...result, ...transformAlias(prop, props[prop]) };
    }
  }
  return result;
};

type PseudoBoxProps = {
  _disabled?: any;
  _hover?: any;
  _focus?: any;
  _active?: any;
  _visited?: any;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const PseudoBox: FunctionComponent<PseudoBoxProps & BoxProps> = styled(Box)(
  (props: PseudoBoxProps) => {
    const { _disabled, _hover, _active, _focus, _visited } = props;
    return css({
      [disabled]: transformAliasProps(_disabled),
      [hover]: transformAliasProps(_hover),
      [active]: transformAliasProps(_active),
      [focus]: transformAliasProps(_focus),
      [visited]: transformAliasProps(_visited),
    });
  },
);

PseudoBox.displayName = 'PseudoBox';
