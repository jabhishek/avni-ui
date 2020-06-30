import { system } from 'styled-system';
import * as CSS from 'csstype';

export const CUSTOM_PROPS = ['cursor'];

export interface ICustomProps {
  outline?: CSS.CursorProperty;
  cursor?: CSS.CursorProperty;
}

export const config: { [value: string]: boolean } = {
  cursor: true,
  outline: true,
  transition: true,
};

export const customProps = system(config);
