import React from 'react';
import { Button } from '@avni-ui/button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example Button',
  component: Button,
};

export const ButtonStory = () => (
  <Button type="button" onClick={action('clicked')} variantColor="red">
    Submit
  </Button>
);
ButtonStory.story = {
  name: 'Button',
};
