import { ITheme } from '@avni-ui/core';
import { ButtonVariants, SizeVariants } from '../models';
export declare const defaultStyle: {
    cursor: string;
    border: string;
    borderRadius: string;
    outline: string;
    transition: string;
    boxShadow: string;
};
export declare const getStyles: ({ baseColor, theme, size, variant, }: {
    baseColor?: string | undefined;
    size?: "medium" | "large" | "small" | undefined;
    theme: ITheme;
    variant: ButtonVariants;
}) => {
    fontSize: string;
    padding: string;
    minWidth: number;
};
