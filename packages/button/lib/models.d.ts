import * as React from 'react';
export declare type ButtonVariants = 'filled' | 'outline' | 'unstyled' | 'transparent';
export declare type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'fullWidth';
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    baseColor?: string;
    variant?: ButtonVariants;
    isDisabled?: boolean;
    type: 'submit' | 'reset' | 'button' | undefined;
    size?: SizeVariants | undefined;
}
