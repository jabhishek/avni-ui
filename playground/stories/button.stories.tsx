import React from 'react';
import { Button } from '@avni-ui/button';
import { defaultTheme } from '@avni-ui/core/lib/Theme';
import { ThemeProvider } from '@avni-ui/core/lib/ThemeProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example Button',
  component: Button,
};

export const ButtonStory = () => (
  <ThemeProvider theme={defaultTheme}>
    <Button type="button" onClick={action('clicked')}>
      Submit
    </Button>
  </ThemeProvider>
);
ButtonStory.story = {
  name: 'Button',
};
