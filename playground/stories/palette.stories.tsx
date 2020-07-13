import React from 'react';
import { defaultTheme } from '@avni-ui/core/lib/Theme';
import { ThemeProvider } from '@avni-ui/core/lib/ThemeProvider';
import { Box } from '@avni-ui/core';
import { CSSReset } from '@avni-ui/core/lib/CSSReset';
import { createPalette } from '@avni-ui/core/lib/color';

export default {
  title: 'Palette',
};

const ColorBox = ({
  color,
  contrastToWhite,
  contrastToBlack,
}: {
  color: string;
  contrastToWhite: number;
  contrastToBlack: number;
}) => {
  return (
    <Box display="flex">
      <Box
        bg={color}
        height={40}
        width={150}
        mr={8}
        color={contrastToWhite > contrastToBlack ? 'white' : 'black'}
        lineHeight="40px"
        textAlign="center"
      >
        Color
      </Box>
      {color} - {contrastToWhite.toFixed(2)} - {contrastToBlack.toFixed(2)}
    </Box>
  );
};

export const PaletteStory = () => {
  const [hue, setHue] = React.useState<string>('0');
  const [sat, setSat] = React.useState<string>('100');
  const [lightness, setLightness] = React.useState<string>('72');

  const color = `hsl(${hue}, ${sat}%, ${lightness || '0'}%)`;
  const palette = createPalette(color);

  console.log('palette', palette);

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <CSSReset />
        <Box fontFamily="body">
          <Box mb={8}>
            <input type="number" value={hue} onChange={(e: any) => setHue(e.target.value)} />
            <input type="number" value={sat} onChange={(e: any) => setSat(e.target.value)} />
            <input
              type="number"
              value={lightness}
              onChange={(e: any) => setLightness(e.target.value)}
            />
          </Box>
          <div>
            <h2>Original Color</h2>
            <ColorBox color={color} contrastToWhite={0} contrastToBlack={0} />
          </div>
          <div>
            <h2>Palette</h2>
            {Object.values(palette).map(({ color, contrastToWhite, contrastToBlack }, index) => {
              return (
                <ColorBox
                  key={index}
                  contrastToWhite={contrastToWhite}
                  color={color}
                  contrastToBlack={contrastToBlack}
                />
              );
            })}
          </div>
        </Box>
      </React.Fragment>
    </ThemeProvider>
  );
};
PaletteStory.story = {
  name: 'Palette',
};
