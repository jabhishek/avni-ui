import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withContexts } from '@storybook/addon-contexts/react';
import {contexts} from "./contexts";
import React from "react";
import {ThemeProvider, defaultTheme, CSSReset} from "@avni-ui/core";
import {css, Global} from "@emotion/core";

addDecorator(withInfo);
addDecorator(withContexts(contexts));

addParameters({
    backgrounds: [
        { name: 'Default Theme', value: 'aliceblue', default: true },
        { name: 'Dark Theme', value: '#121212' },
    ]
})

addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>
    <CSSReset />
    <Global
        styles={css`
            html {
              font-size: 62.5%;
              box-sizing: border-box;
            }
            body {
              font-size: 1.6rem;
              font-family: ${defaultTheme.fonts.body};
              color: ${defaultTheme.colors.textBlack};
              padding: 20px;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            *, *:before, *:after {
               box-sizing: inherit;
            }
          `}
    />
    {storyFn()}
</ThemeProvider>);
