import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
    title: 'Example Button',
    component: Button
};

export const ButtonStory = () => (
    <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);
ButtonStory.story = {
    name: 'Button',
};
