import { FunctionComponent } from 'react';
import { BoxProps } from '../Box/BoxProps';
export declare const transformAliasProps: (props: any) => {};
declare type PseudoBoxProps = {
    _disabled?: any;
    _hover?: any;
    _focus?: any;
    _active?: any;
    _visited?: any;
};
export declare const PseudoBox: FunctionComponent<PseudoBoxProps & BoxProps>;
export {};
