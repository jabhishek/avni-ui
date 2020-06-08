import * as React from 'react';
import { ITheme } from '../Theme/ITheme';
export declare const ThemeProvider: ({ theme, children, }: {
    theme?: ITheme | undefined;
    children: React.ReactChildren | React.ReactChild;
}) => JSX.Element;
export declare const useTheme: () => ITheme;
