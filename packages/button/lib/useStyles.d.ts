import { ButtonVariants } from './models';
export declare const useStyles: ({ baseColor, variant, }: {
    baseColor?: string | undefined;
    variant?: "transparent" | "filled" | "outline" | "unstyled" | undefined;
}) => {
    backgroundColor: string;
    color: string;
    border: string;
    _hover: {
        backgroundColor: any;
        color: string;
        opacity: number;
    };
    p: string;
    cursor: string;
    borderRadius: string;
    transition: string;
};
