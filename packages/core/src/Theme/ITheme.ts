import { Typography } from './utils/fonts';
import { Colors } from './utils/colors';

export interface ITheme extends Typography {
  colors: Colors;
  space: Record<string, number | string>;
}
