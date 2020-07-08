import * as React from 'react';
import { PseudoBox } from '@avni-ui/core';
import { useStyles } from './useStyles';
import { IButtonProps } from './models';

export { IButtonProps };

/*
 * Button component
 *  */
export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  type = 'button',
  baseColor,
  variant,
  isDisabled,
  ...props
}: IButtonProps) => {
  const styleProps = useStyles({ baseColor, variant });

  return (
    <PseudoBox
      as="button"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type={type}
      {...styleProps}
      {...props}
    >
      {children}
    </PseudoBox>
  );
};
Button.displayName = 'Button';
