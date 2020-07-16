export type Typography = {
  baseFontSize?: number;
  fonts: {
    body: string;
    heading: string;
    mono: string;
  };
  fontSizes: Record<string, string>;
};

export type SwatchColor = {
  color: string;
  contrastToWhite: number;
  contrastToBlack: number;
};

export type Swatch = Record<string, SwatchColor>;
export type ThemeColor = string | Swatch;

export type Colors = {
  primary: ThemeColor;
  white: string;
  black: string;
  textBlack: string;
} & Record<string, ThemeColor>;
