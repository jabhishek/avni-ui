import * as React from 'react';
declare type Props = {
    onChange: (value: boolean) => void;
    onLabel?: string;
    offLabel?: string;
    value: boolean;
};
export declare const Knob: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    on: boolean;
}, object>;
export declare const Switch: ({ onChange, onLabel, offLabel, value }: Props) => JSX.Element;
export {};
