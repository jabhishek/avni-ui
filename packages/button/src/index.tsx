import * as React from 'react';
import { PseudoBox } from '@avni-ui/core';
import { ButtonHTMLAttributes } from 'react';
import { useStyles } from './useStyles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variantColor?: string;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  type = 'button',
  variantColor = '#ff5a5a',
  ...props
}: IButtonProps) => {
  const styleProps = useStyles(variantColor);
  console.log('styleProps', styleProps);

  return (
    <PseudoBox as="button" type={type} {...styleProps} {...props}>
      {children}
    </PseudoBox>
  );
};
