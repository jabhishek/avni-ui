import * as React from 'react';

export type ButtonVariants = 'filled' | 'outline' | 'unstyled' | 'transparent';
export type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'fullWidth';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: React.ReactNode;
  /** The base color of the button */
  baseColor?: string;
  /** Button variants */
  variant?: ButtonVariants;
  /** Is button disabled */
  isDisabled?: boolean;
  /** Button type */
  type: 'submit' | 'reset' | 'button' | undefined;
  /** Button size */
  size?: SizeVariants | undefined;
}
