import { ThemeProvider, defaultTheme } from '@avni-ui/core';

export const contexts = [{
    icon: 'box',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
        // abhi-todo - support multiple themes
        { name: 'Default Theme', props: { theme: defaultTheme }, default: true },
    ],
}]
