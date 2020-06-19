import React from 'react';
import { Button } from '@avni-ui/button';
import { defaultTheme } from '@avni-ui/core/lib/Theme';
import { ThemeProvider } from '@avni-ui/core/lib/ThemeProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example Button',
  component: Button,
};

export const ButtonStory = () => {
  const [hue, setHue] = React.useState<string>('0');
  const [sat, setSat] = React.useState<string>('100');
  const [lightness, setLightness] = React.useState<string>('72');

  const color = `hsl(${hue}, ${sat}%, ${lightness || '0'}%)`;

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <div>
          <input type="number" value={hue} onChange={(e) => setHue(e.target.value)} />
          <input type="number" value={sat} onChange={(e) => setSat(e.target.value)} />
          <input type="number" value={lightness} onChange={(e) => setLightness(e.target.value)} />
        </div>
        <Button type="button" baseColor={color} onClick={action('clicked')}>
          Submit
        </Button>
      </React.Fragment>
    </ThemeProvider>
  );
};
ButtonStory.story = {
  name: 'Button',
};
