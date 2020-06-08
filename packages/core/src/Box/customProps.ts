import { system } from 'styled-system';
import * as CSS from 'csstype';

export const CUSTOM_PROPS = ['cursor'];

export interface ICustomProps {
  cursor?: CSS.CursorProperty;
}

export const config: { [value: string]: boolean } = {
  cursor: true,
};

export const customProps = system(config);
