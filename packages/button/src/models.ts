import * as React from 'react';
import { BoxProps } from '@avni-ui/core/src/Box/BoxProps';

export type ButtonVariants = 'filled' | 'outline' | 'unstyled' | 'transparent';

export interface IButtonProps extends BoxProps {
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
}
