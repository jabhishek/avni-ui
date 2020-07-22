const path = require('path');
const { createEmotionPlugin } = require('emotion-ts-plugin');

module.exports = {
    stories: ['../stories/**/*.stories.(tsx|mdx)'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-contexts/register',
        '@storybook/addon-a11y/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                sourceLoaderOptions: null,
            },
        },
    ],
    webpackFinal: async config => {
        config.module.rules.push({
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({
                                before: [createEmotionPlugin({ // <------------------- here
                                    sourcemap: true,
                                    autoLabel: true,
                                    labelFormat: '[local]',
                                    autoInject: true,     //if the jsxFactory is set, should we auto insert the import statement
                                })],
                            }),
                            compilerOptions: {
                                // set jsx pragma to jsx or alias which is from the @emotion/core package to enable css property in jsx component
                                jsxFactory: "jsx"
                            }
                        },
                    },
                    {
                        loader: require.resolve('react-docgen-typescript-loader')
                    },
                ],
            }
            );
        config.resolve.extensions.push('.ts', '.tsx', '.mdx');
        return config;
    },
};
