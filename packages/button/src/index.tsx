import * as React from 'react';
import styled from '@emotion/styled';
import { getStyles, defaultStyle } from './styles/getStyles';
import { IButtonProps } from './models';

export { IButtonProps };

const StyledButton = styled('button')((props: any) => {
  const { baseColor, theme, rest, size, fullWidth } = props;
  const styleProps = getStyles({ baseColor, theme, size });
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
  onClick,
  size = 'medium',
  ...props
}: IButtonProps) => {
  return (
    <StyledButton
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type={type}
      onClick={onClick}
      size={size}
      {...props}
      rest={props}
    >
      {children}
    </StyledButton>
  );
};
Button.displayName = 'Button';
