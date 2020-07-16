import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11Y } from '@storybook/addon-a11y';
import { withContexts } from '@storybook/addon-contexts/react';
import {contexts} from "./contexts";
import React from "react";
import {ThemeProvider, defaultTheme, CSSReset} from "@avni-ui/core";
import {css, Global} from "@emotion/core";

addDecorator(withInfo);
addDecorator(withA11Y);
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
            body {
              padding: 20px;
            }
          `}
    />
    {storyFn()}
</ThemeProvider>);
