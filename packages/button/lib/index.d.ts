import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variantColor: string;
}
export declare const Button: React.FC<IButtonProps>;
export {};
