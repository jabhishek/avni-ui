export declare type Typography = {
    baseFontSize?: number;
    fonts: {
        body: string;
        heading: string;
        mono: string;
    };
    fontSizes: Record<string, string>;
};
export declare type Swatch = Record<string, string>;
export declare type ThemeColor = string | Swatch;
export declare type Colors = {
    primary: ThemeColor;
    white: string;
    black: string;
    textColor: string;
    backgroundColor: string;
} & Record<string, ThemeColor>;
