import * as React from 'react';
import { Box } from '@avni-ui/core';
import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variantColor: string;
}

const getColorProps = (variantColor: string) => {
  return {
    color: variantColor,
  };
};

export const Button: React.FC<IButtonProps> = ({
  children,
  type = 'button',
  variantColor,
  ...props
}: IButtonProps) => {
  const colorProps = getColorProps(variantColor);

  return (
    <Box as="button" type={type} {...colorProps} {...props}>
      {children}
    </Box>
  );
};
