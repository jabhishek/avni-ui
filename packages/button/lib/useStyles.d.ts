import { ButtonVariants } from './models';
export declare const useStyles: ({ baseColor, variant, }: {
    baseColor?: string | undefined;
    variant?: "transparent" | "filled" | "outline" | "unstyled" | undefined;
}) => {
    backgroundColor: string;
    color: any;
    _hover: {
        backgroundColor: any;
        boxShadow: string;
    };
    _focus: {
        boxShadow: string;
    };
    cursor: string;
    border: string;
    borderRadius: string;
    outline: string;
    transition: string;
    fontFamily: string;
    boxShadow: string;
};
