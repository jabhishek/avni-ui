import * as React from 'react';
import styled from '@emotion/styled';
import { ITheme } from '@avni-ui/core';
import { getStyles, defaultStyle } from './styles/getStyles';
import { IButtonProps } from './models';

export { IButtonProps };

const StyledButton = styled.button((props: IButtonProps & { theme: ITheme }) => {
  const { baseColor, theme } = props;
  const styleProps = getStyles({ baseColor, theme });
  return {
    ...defaultStyle,
    ...styleProps,
  };
});

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  type = 'button',
  isDisabled,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton disabled={isDisabled} aria-disabled={isDisabled} type={type} {...props}>
      {children}
    </StyledButton>
  );
};
Button.displayName = 'Button';
