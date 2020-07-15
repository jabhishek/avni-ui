import { ITheme, ThemeColor } from '@avni-ui/core';
import { ButtonVariants } from '../models';
export declare const baseBoxShadow = "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)";
export declare const getColorProps: ({ baseColor, theme, variant, }: {
    baseColor: ThemeColor;
    theme: ITheme;
    variant: ButtonVariants;
}) => {};
export declare const getColorFromUserTheme: (baseColor: string, theme: ITheme) => string | undefined;
export declare const getBaseColorToUse: (baseColor: string | undefined, theme: ITheme) => ThemeColor;
