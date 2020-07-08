import * as React from 'react';
import { ITheme } from '..';
export declare const ThemeProvider: {
    ({ theme, children, }: {
        theme?: ITheme | undefined;
        children: React.ReactChildren | React.ReactChild;
    }): JSX.Element;
    displayName: string;
};
export declare const useTheme: () => ITheme;
