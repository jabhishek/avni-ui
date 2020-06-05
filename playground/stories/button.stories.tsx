import React from 'react';
import { Button } from '@avni-ui/button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example Button',
  component: Button,
};

export const ButtonStory = () => <Button onClick={action('clicked')}>Submit</Button>;
ButtonStory.story = {
  name: 'Button',
};
