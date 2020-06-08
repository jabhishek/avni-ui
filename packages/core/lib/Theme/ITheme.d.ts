import { Theme as StyledSystemTheme } from 'styled-system';
import { StyledSystemProps } from '../Box/BoxProps';
declare type IVariantElements = 'buttons';
declare type Variant = Record<string, Partial<Record<keyof StyledSystemProps, unknown>>>;
export interface ITheme extends StyledSystemTheme {
    variants?: Partial<Record<IVariantElements, Variant>>;
}
export {};
