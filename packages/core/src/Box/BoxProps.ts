import * as React from 'react';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { StyledSystemProps } from './StyledSystemProps';

/*
export interface ButtonHTMLProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    as: 'button';
}

export interface AnchorHTMLProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    as: 'a';
}

export interface AllHTMLProps<T> extends React.HTMLAttributes<T> {
    as?: Exclude<keyof JSX.IntrinsicElements, 'button' | 'a'>;
}
*/

type HTMLProps = /*AnchorHTMLProps | ButtonHTMLProps | */ React.AllHTMLAttributes<HTMLElement>;

export type BoxProps = HTMLProps & StyledSystemProps;
