/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { useStyles } from './styles';

export type SwitchSize = 'sm' | 'md' | 'lg' | number;

type Props = {
  onChange: (value: boolean) => void;
  onLabel?: string;
  offLabel?: string;
  on: boolean;
  size?: SwitchSize;
};

export const Switch = ({ onChange, onLabel = 'B', offLabel = 'A', on, size = 'md' }: Props) => {
  const onClick = () => {
    onChange(!on);
  };

  const { buttonStyles, knobStyles, labelStyles } = useStyles(on, size);

  return (
    <button onClick={onClick} role="switch" aria-checked={on} css={buttonStyles}>
      <span aria-hidden="true" css={knobStyles} />
      <span aria-hidden="true" css={labelStyles}>
        {on ? onLabel : offLabel}
      </span>
    </button>
  );
};
