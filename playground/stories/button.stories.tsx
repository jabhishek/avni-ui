import React from 'react';
import { Button } from '@avni-ui/button';
import { defaultTheme } from '@avni-ui/core/lib/Theme';
import { ThemeProvider } from '@avni-ui/core/lib/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { Box } from '@avni-ui/core';
import { CSSReset } from '@avni-ui/core/lib/CSSReset';
import { css, Global } from '@emotion/core';

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
        <CSSReset />
        <Global
          styles={css`
            html {
              font-size: 16px;
            }
            body {
              font-size: 62.5%;
            }
          `}
        />
        <Box mb={8}>
          <input type="number" value={hue} onChange={(e) => setHue(e.target.value)} />
          <input type="number" value={sat} onChange={(e) => setSat(e.target.value)} />
          <input type="number" value={lightness} onChange={(e) => setLightness(e.target.value)} />
        </Box>
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
