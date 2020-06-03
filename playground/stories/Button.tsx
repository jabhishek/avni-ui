import * as React from 'react';

type Props = { children: React.ReactNode, onClick: () => void };
export const Button: React.FC<Props> = ({ onClick, children }) => {
    return <button onClick={onClick} type="button">{children}</button>
}
