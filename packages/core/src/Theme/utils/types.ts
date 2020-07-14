export type Typography = {
  fonts: {
    body: string;
    heading: string;
    mono: string;
  };
  fontSizes: Record<string, string>;
};

export type PaletteColor = {
  color: string;
  contrastToWhite: number;
  contrastToBlack: number;
};

export type Palette = Record<string, PaletteColor>;
export type ThemeColor = string | Palette;

export type Colors = {
  primary: ThemeColor;
  white: string;
  black: string;
  textBlack: string;
} & Record<string, ThemeColor>;
