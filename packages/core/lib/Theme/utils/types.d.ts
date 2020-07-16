export declare type Typography = {
    baseFontSize?: number;
    fonts: {
        body: string;
        heading: string;
        mono: string;
    };
    fontSizes: Record<string, string>;
};
export declare type SwatchColor = {
    color: string;
    contrastToWhite: number;
    contrastToBlack: number;
};
export declare type Swatch = Record<string, SwatchColor>;
export declare type ThemeColor = string | Swatch;
export declare type Colors = {
    primary: ThemeColor;
    white: string;
    black: string;
    textBlack: string;
} & Record<string, ThemeColor>;
