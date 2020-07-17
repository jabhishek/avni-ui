import React from 'react';
import { Box } from '@avni-ui/core';
import { createSwatch } from '@avni-ui/color';
import { ColorPicker } from '../helpers/ColorPicker';

export default {
  title: 'Swatch',
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
      {color}
      {/* - {contrastToWhite.toFixed(2)} - {contrastToBlack.toFixed(2)}*/}
    </Box>
  );
};

export const SwatchStory = () => {
  const [color, setColor] = React.useState<string>();
  const swatch = color ? createSwatch(color) : {};

  console.log('swatch', swatch);

  return (
    <React.Fragment>
      <ColorPicker onChange={setColor} />
      <div>
        <h2>Selected Color</h2>
        <Box bg={color} height={40} width={150} />
      </div>
      <div>
        <h2>Swatch</h2>
        {Object.values(swatch).map(({ color, contrastToWhite, contrastToBlack }, index) => {
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
    </React.Fragment>
  );
};
SwatchStory.story = {
  name: 'Swatch',
};
