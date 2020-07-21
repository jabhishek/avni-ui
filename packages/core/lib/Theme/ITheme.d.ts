import { Colors, Typography } from './utils/types';
export declare type ITheme = Typography & {
    colors: Colors;
    space: Record<string, number | string>;
};
