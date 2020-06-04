import React from 'react';
import { Button } from '@avni-ui/button';

export default {
    title: 'Example Button',
    component: Button
};

export const ButtonStory = () => (
    <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);
ButtonStory.story = {
    name: 'Button',
};
