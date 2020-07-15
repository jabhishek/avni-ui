import * as React from 'react';
import styled from '@emotion/styled';
import { shouldForwardProp } from '@avni-ui/core/lib/Box/shouldForwardProp';
import { getStyles, defaultStyle } from './styles/getStyles';
import { IButtonProps } from './models';

export { IButtonProps };

const StyledButton = styled('button', {
  shouldForwardProp(propName: string): boolean {
    return shouldForwardProp(propName);
  },
})((props: any) => {
  const { baseColor, theme, size, fullWidth, variant, ...rest } = props;
  console.log('size', size);

  const styleProps = getStyles({ baseColor, theme, size, variant });
  return {
    ...defaultStyle,
    ...styleProps,
    ...(fullWidth ? { width: '100%' } : {}),
    ...rest,
  };
});

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  type = 'button',
  isDisabled,
  size = 'medium',
  variant = 'filled',
  ...rest
}: IButtonProps) => {
  return (
    <StyledButton
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type={type}
      size={size}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
Button.displayName = 'Button';
