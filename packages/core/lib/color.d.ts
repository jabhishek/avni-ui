export declare const getColor: (color: string) => any;
export declare const getContrastingColor: (baseColor: string, contrastLevel: number) => any;
export declare const getContrastingTextColor: (color: any, darkColor?: string, lightColor?: string) => string;
declare type PaletteColor = {
    color: string;
    contrastToWhite: number;
    contrastToBlack: number;
};
export declare const createPalette: (baseColor: string) => Array<PaletteColor>;
export {};
