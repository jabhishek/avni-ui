import { Colors, Typography } from './utils/types';
export interface ITheme extends Typography {
    colors: Colors;
    space: Record<string, number | string>;
}
