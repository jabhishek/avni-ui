export declare type Typography = {
    fonts: {
        body: string;
        heading: string;
        mono: string;
    };
    fontSizes: Record<string, string>;
};
export declare type PaletteColor = {
    color: string;
    contrastToWhite: number;
    contrastToBlack: number;
};
export declare type Palette = Record<string, PaletteColor>;
export declare type ThemeColor = string | Palette;
export declare type Colors = {
    primary: ThemeColor;
    white: string;
    black: string;
    textBlack: string;
} & Record<string, ThemeColor>;
