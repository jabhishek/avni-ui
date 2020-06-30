import * as CSS from 'csstype';
export declare const CUSTOM_PROPS: string[];
export interface ICustomProps {
    outline?: CSS.CursorProperty;
    cursor?: CSS.CursorProperty;
}
export declare const config: {
    [value: string]: boolean;
};
export declare const customProps: import("styled-system").styleFn;
