import * as React from 'react';

interface IButtonProps {
    children: React.ReactNode
}

export const Button: React.FC<IButtonProps> = ({ children }: IButtonProps) => {
    return <button type="button">{children}</button>
};
