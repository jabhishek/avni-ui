import { Colors, Typography } from './utils/types';

export type ITheme = Typography & {
  colors: Colors;
  space: Record<string, number | string>;
};
