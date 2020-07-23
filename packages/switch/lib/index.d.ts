/// <reference types="react" />
export declare type SwitchSize = 'sm' | 'md' | 'lg' | number;
declare type Props = {
    onChange: (value: boolean) => void;
    onLabel?: string;
    offLabel?: string;
    on: boolean;
    size?: SwitchSize;
};
export declare const Switch: ({ onChange, onLabel, offLabel, on, size }: Props) => JSX.Element;
export {};
