import * as React from 'react';
import { ThemeProvider, defaultTheme, CSSReset } from '@avni-ui/core';
import {css, Global} from "@emotion/core";

const darkTheme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        backgroundColor: '#111',
        textColor: '#fff'
    }
}

const Wrapper = ({ theme, children, darkMode }) => {
    return <ThemeProvider theme={theme} darkMode={darkMode}>
        <CSSReset/>
        <Global
            styles={css`
            body {
              padding: 20px;
            }
          `}
        />
        {children}
    </ThemeProvider>
}

export const contexts = [{
    icon: 'box',
    title: 'Themes',
    components: [Wrapper],
    params: [
        { name: 'Default Theme', props: { theme: defaultTheme }, default: true },
        { name: 'Dark Theme', props: { theme: darkTheme } },
    ],
    options: {
        deep: true
    }
}]
