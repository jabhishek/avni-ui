import * as React from 'react';
import { Box } from '@avni-ui/core';
import { Button } from '@avni-ui/button';

export const ButtonWithDynamicColor = () => {
  const [hue, setHue] = React.useState<string>('10');
  const [sat, setSat] = React.useState<string>('100');
  const [lightness, setLightness] = React.useState<string>('40');

  const color = `hsl(${hue}, ${sat}%, ${lightness || '0'}%)`;

  return (
    <React.Fragment>
      <Box mb={8}>
        <input type="number" value={hue} onChange={(e: any) => setHue(e.target.value || '0')} />
        <input type="number" value={sat} onChange={(e: any) => setSat(e.target.value || '0')} />
        <input
          type="number"
          value={lightness}
          onChange={(e: any) => setLightness(e.target.value || '0')}
        />
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, 200px)" gridGap={16}>
        <Button type="button" baseColor={color}>
          Default
        </Button>
        <Button type="button" baseColor={color} isDisabled>
          Disabled
        </Button>
      </Box>
    </React.Fragment>
  );
};
