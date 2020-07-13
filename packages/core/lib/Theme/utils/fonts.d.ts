export declare const DEFAULT_BASE_FONT_SIZE = 10;
export declare const pxToRem: (px: number, baseFontSize?: number) => string;
export declare type Typography = {
    fonts: {
        body: string;
        heading: string;
        mono: string;
    };
    fontSizes: Record<string, string>;
};
export declare const typography: Typography;
