const primary = 'blue';
const white = '#fff';
const black = '#000';
const textBlack = '#111';

export type Colors = {
  primary: string;
  white: string;
  black: string;
} & Record<string, string>;

export const colors: Colors = {
  primary,
  white,
  black,
  textBlack,
};
