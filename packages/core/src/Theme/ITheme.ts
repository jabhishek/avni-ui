import { Theme as StyledSystemTheme } from 'styled-system';

export type ButtonVariantTheme = {
  color?: string;
  bgColor?: string;
};

export interface ITheme extends StyledSystemTheme {
  variantTheme?: {
    buttons: Record<string, ButtonVariantTheme>;
  };
}
