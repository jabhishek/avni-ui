import React from 'react';
import { Box } from '@avni-ui/core/lib/Box';
import { defaultTheme } from '@avni-ui/core/lib/Theme';
import { ThemeProvider } from '@avni-ui/core/lib/ThemeProvider';

export default {
  title: 'Example Box',
  component: Box,
};

export const BoxStory = () => (
  <ThemeProvider theme={defaultTheme}>
    <Box as="button" alt="hello" color="primary" p="small">
      Hello World!
    </Box>
  </ThemeProvider>
);

BoxStory.story = {
  name: 'Box',
};
