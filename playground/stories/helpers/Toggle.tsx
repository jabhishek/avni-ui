import * as React from 'react';
import { Switch } from '@avni-ui/switch';

export const Toggle = ({
  onChange,
  size,
}: {
  onChange: (value: boolean) => void;
  size: string;
}) => {
  const [value, setValue] = React.useState(false);

  const onClick = () => {
    setValue(!value);
    onChange(!value);
  };

  return <Switch onChange={onClick} on={value} size={size} />;
};
