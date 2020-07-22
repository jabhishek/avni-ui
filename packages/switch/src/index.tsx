import * as React from 'react';
import styled from '@emotion/styled';
import { ITheme } from '@avni-ui/core';

console.log('avniStyled', styled);

type Props = {
  onChange: (value: boolean) => void;
  onLabel?: string;
  offLabel?: string;
  value: boolean;
};

const borderWidth = 1;
const padding = 1;
const knobSize = 30;
const switchWidth = knobSize * 2;
const knobLeftOn = switchWidth - knobSize - 2 * (padding + borderWidth);

export const Knob = styled.span<{ on: boolean }>((props: any) => ({
  width: knobSize,
  height: knobSize,
  borderRadius: '100%',
  display: 'block',
  transform: props.on ? `translateX(${knobLeftOn}px)` : 'translateX(0)',
  backgroundColor: props.theme.colors.primary,
  transition: '0.3s transform',
}));

const SwitchWrapper = styled.button`
  user-select: none;
  color: #111;
  cursor: pointer;
  border: ${borderWidth}px solid #111;
  background-color: white;
  outline: none;
  -webkit-appearance: none;
  width: ${switchWidth}px;
  border-radius: ${knobSize}px;
  position: relative;
  padding: ${padding}px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
/*

const SwitchWrapper2 = styled.button(({ theme }: { theme: ITheme }) => {
  console.log('props', theme);
  return {
    userSelect: 'none',
    color: '#111',
    cursor: 'pointer',
    border: `${borderWidth}px solid #111`,
    backgroundColor: 'white',
    outline: 'none',
    webkitAppearance: 'none',
    width: switchWidth,
    borderRadius: knobSize,
    position: 'relative',
    padding,

    '&:focus': {
      boxShadow:
        '0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08), inset 0px 0px 0px 3px #9c9c9c',
    },
    [Knob]: {
      color: 'red',
    },
  };
});
*/

export const Switch = ({ onChange, onLabel, offLabel, value }: Props) => {
  const onClick = () => {
    onChange(!value);
  };

  return (
    <SwitchWrapper onClick={onClick} role="switch" aria-checked={value}>
      <Knob on={value} />
    </SwitchWrapper>
  );
};
