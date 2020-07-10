const path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.(tsx|mdx)'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-contexts/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
    ],
    webpackFinal: async config => {
        config.module.rules.push({
                test: /\.(ts|tsx)$/,
                use: [
                    require.resolve('ts-loader'),
                    {
                        loader: require.resolve('react-docgen-typescript-loader'), options: {
                            // Provide the path to your tsconfig.json so that your stories can
                            // display types from outside each individual story.
                            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
                        },
                    },
                ],
            }
            );
        config.resolve.extensions.push('.ts', '.tsx', '.mdx');
        return config;
    },
};
