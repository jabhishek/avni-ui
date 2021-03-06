import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { getStyles, defaultStyle } from './styles/getStyles';
import { IButtonProps } from './models';

export { IButtonProps };

const StyledButton = styled('button', {
  shouldForwardProp(propName: string): boolean {
    return isPropValid(propName);
  },
})((props: any) => {
  const { baseColor, theme, size, fullWidth, variant } = props;
  const styleProps = getStyles({ baseColor, theme, size, variant });

  return {
    ...defaultStyle,
    ...styleProps,
    ...(fullWidth ? { width: '100%' } : {}),
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
      hello="world"
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
Button.displayName = 'Button';
