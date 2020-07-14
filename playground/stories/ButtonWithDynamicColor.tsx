import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '@avni-ui/core';
import { Button } from '@avni-ui/button';

export const ButtonWithDynamicColor = () => {
  const [hue, setHue] = React.useState<string>('210');
  const [sat, setSat] = React.useState<string>('79');
  const [lightness, setLightness] = React.useState<string>('46');

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
      <Button type="button" baseColor={color} onClick={action('clicked')}>
        Dynamic baseColor
      </Button>
    </React.Fragment>
  );
};
