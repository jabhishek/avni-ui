import * as React from 'react';
import { Box } from '@avni-ui/core';

export const ColorPicker = ({ onChange }: { onChange: (color: string) => void }) => {
  const [hue, setHue] = React.useState<string>('10');
  const [sat, setSat] = React.useState<string>('100');
  const [lightness, setLightness] = React.useState<string>('40');

  React.useEffect(() => {
    const color = `hsl(${hue}, ${sat}%, ${lightness || '0'}%)`;
    onChange(color);
  }, [hue, sat, lightness, onChange]);

  return (
    <Box mb={8}>
      <input type="number" value={hue} onChange={(e: any) => setHue(e.target.value || '0')} />
      <input type="number" value={sat} onChange={(e: any) => setSat(e.target.value || '0')} />
      <input
        type="number"
        value={lightness}
        onChange={(e: any) => setLightness(e.target.value || '0')}
      />
    </Box>
  );
};
