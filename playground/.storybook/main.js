module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-notes/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                require.resolve('babel-loader'),
                require.resolve('ts-loader'),
                require.resolve('react-docgen-typescript-loader'),
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
