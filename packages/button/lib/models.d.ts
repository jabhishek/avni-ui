import * as React from 'react';
export declare type ButtonVariants = 'filled' | 'outline' | 'unstyled' | 'transparent';
export declare type SizeVariants = 'small' | 'medium' | 'large';
export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    baseColor?: string;
    variant?: ButtonVariants;
    isDisabled?: boolean;
    type: 'submit' | 'reset' | 'button' | undefined;
    size?: SizeVariants;
    fullWidth?: boolean;
}
