import React from 'react';
import { Box } from '@avni-ui/core/lib/Box';

export default {
  title: 'Components/Box',
  component: Box,
};

export const BoxStory = () => (
  <Box as="button" alt="hello" color="primary" p="sm">
    Hello World!
  </Box>
);

BoxStory.story = {
  name: 'Box',
};
