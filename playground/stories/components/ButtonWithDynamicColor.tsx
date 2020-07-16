import * as React from 'react';
import { Box } from '@avni-ui/core';
import { Button } from '@avni-ui/button';
import { ColorPicker } from '../helpers/ColorPicker';

export const ButtonWithDynamicColor = () => {
  const [color, setColorHue] = React.useState<string>();
  return (
    <React.Fragment>
      <ColorPicker onChange={setColorHue} />

      <Box display="grid" gridTemplateColumns="repeat(auto-fill, 200px)" gridGap={16}>
        <Button type="button" baseColor={color}>
          Default
        </Button>
        <Button type="button" baseColor={color} isDisabled>
          Disabled
        </Button>
        <Button type="button" baseColor={color} variant="outline">
          Outline
        </Button>
        <Button type="button" baseColor={color} variant="outline" isDisabled>
          Outline disabled
        </Button>
      </Box>
    </React.Fragment>
  );
};
