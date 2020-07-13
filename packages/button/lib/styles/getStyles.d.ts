import { ITheme } from '@avni-ui/core';
import { ButtonVariants } from '../models';
export declare const baseBoxShadow = "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)";
export declare const defaultStyle: (theme: ITheme) => {
    cursor: string;
    border: string;
    borderRadius: string;
    outline: string;
    transition: string;
    fontFamily: string;
    boxShadow: string;
};
export declare const getStyles: ({ baseColor, theme, }: {
    baseColor?: string | undefined;
    variant?: "filled" | "outline" | "unstyled" | "transparent" | undefined;
    theme: ITheme;
}) => {
    fontSize: string;
    padding: string;
    backgroundColor: string;
    color: string;
    ':hover': {
        backgroundColor: any;
        boxShadow: string;
    };
    ':focus, :active': {
        boxShadow: string;
    };
};