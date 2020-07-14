import { Swatch } from './Theme/utils/types';
export declare const getColor: (color: string) => any;
export declare const getContrastingColor: (baseColor: string, contrastLevel: number) => any;
export declare const getContrastingTextColor: (color: string, darkColor?: string, lightColor?: string) => string;
export declare const createSwatch: (baseColor: string) => Swatch;
