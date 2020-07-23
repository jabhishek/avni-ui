export type Typography = {
  baseFontSize?: number;
  fonts: {
    body: string;
    heading: string;
    mono: string;
  };
  fontSizes: Record<string, string>;
};

export type Swatch = Record<string, string>;

export type ThemeColor = string | Swatch;

export type Colors = {
  primary: ThemeColor;
  white: string;
  black: string;
  textColor: string;
  backgroundColor: string;
} & Record<string, ThemeColor>;
