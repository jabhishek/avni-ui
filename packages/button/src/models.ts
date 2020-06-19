import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'filled' | 'outline' | 'unstyled' | 'transparent';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  baseColor?: string;
  variant?: ButtonVariants;
  isDisabled?: boolean;
}
