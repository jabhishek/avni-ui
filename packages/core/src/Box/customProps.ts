import { system } from 'styled-system';

export const CUSTOM_PROPS = ['cursor'];

export const config: { [value: string]: boolean } = {
  cursor: true,
  outline: true,
  transition: true,
};

export const customProps = system(config);
