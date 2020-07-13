import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withContexts } from '@storybook/addon-contexts/react';
import {contexts} from "./contexts";
import React from "react";

addDecorator(withInfo);
addDecorator(withContexts(contexts));

addParameters({
    backgrounds: [
        { name: 'Default Theme', value: '#fafafa', default: true },
        { name: 'Dark Theme', value: '#121212' },
    ]
})
