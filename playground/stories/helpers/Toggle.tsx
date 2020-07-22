import * as React from 'react';
import { Switch } from '@avni-ui/switch';

export const Toggle = ({ onChange }: { onChange: (value: boolean) => void }) => {
  const [value, setValue] = React.useState(false);

  const onClick = () => {
    setValue(!value);
    onChange(!value);
  };

  return <Switch onChange={onClick} value={value} />;
};
