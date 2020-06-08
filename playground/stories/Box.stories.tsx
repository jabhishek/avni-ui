import React from 'react';
import { Box } from '@avni-ui/core/lib/Box';

export default {
  title: 'Example Box',
  component: Box,
};

export const BoxStory = () => (
  <Box as="button" alt="hello" color="red">
    Hello World!
  </Box>
);

BoxStory.story = {
  name: 'Box',
};
