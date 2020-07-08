import * as React from 'react';
import { BoxProps } from '@avni-ui/core/src/Box/BoxProps';
export declare type ButtonVariants = 'filled' | 'outline' | 'unstyled' | 'transparent';
export interface IButtonProps extends BoxProps {
    children: React.ReactNode;
    baseColor?: string;
    variant?: ButtonVariants;
    isDisabled?: boolean;
    type: 'submit' | 'reset' | 'button' | undefined;
}
