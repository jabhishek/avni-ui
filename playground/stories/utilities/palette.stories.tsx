import React from 'react';
import { Box } from '@avni-ui/core';
import { createSwatch } from '@avni-ui/color';
import { ColorPicker } from '../helpers/ColorPicker';

export default {
  title: 'Swatch',
};

const ColorBox = ({ color }: { color: string }) => {
  return (
    <Box display="flex">
      <Box bg={color} height={40} width={150} mr={8} lineHeight="40px" textAlign="center" />

      {color}
      {/* - {contrastToWhite.toFixed(2)} - {contrastToBlack.toFixed(2)}*/}
    </Box>
  );
};

export const SwatchStory = () => {
  const [color, setColor] = React.useState<string>();
  const swatch = color ? createSwatch(color) : {};

  return (
    <React.Fragment>
      <ColorPicker onChange={setColor} />
      <div>
        <h2>Selected Color</h2>
        <Box bg={color} height={40} width={150} />
      </div>
      <div>
        <h2>Swatch</h2>
        {Object.values(swatch).map((color, index) => {
          return <ColorBox key={index} color={color} />;
        })}
      </div>
    </React.Fragment>
  );
};
SwatchStory.story = {
  name: 'Swatch',
};
