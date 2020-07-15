import * as React from 'react';

export type ButtonVariants = 'filled' | 'outline' | 'unstyled' | 'transparent';
export type SizeVariants = 'small' | 'medium' | 'large';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  size?: SizeVariants;
  /** Is Button fullwidth */
  fullWidth?: boolean;
}
