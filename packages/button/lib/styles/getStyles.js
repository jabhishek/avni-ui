"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = exports.defaultStyle = void 0;
const colorStyles_1 = require("./colorStyles");
exports.defaultStyle = {
    cursor: 'pointer',
    border: 'none',
    borderRadius: '2px',
    outline: 'none',
    transition: '0.25s background-color, 0.25s opacity, 0.25s box-shadow',
    boxShadow: colorStyles_1.baseBoxShadow,
};
const getSizeProps = ({ size, theme }) => {
    const { space, fontSizes } = theme;
    if (size === 'small') {
        return {
            fontSize: fontSizes.xs,
            padding: `${space.sm} ${space.md}`,
            minWidth: 80,
        };
    }
    if (size === 'medium') {
        return {
            fontSize: fontSizes.md,
            padding: `${space.sm} ${space.md}`,
            minWidth: 100,
        };
    }
    return {
        fontSize: fontSizes.md,
        padding: `${space.md} ${space.xl}`,
        minWidth: 120,
    };
};
exports.getStyles = ({ baseColor, theme, size, variant, }) => {
    const colorProps = colorStyles_1.getColorProps({
        baseColor: colorStyles_1.getBaseColorToUse(baseColor, theme),
        theme,
        variant,
    });
    const sizeProps = getSizeProps({ size, theme });
    return Object.assign(Object.assign({}, colorProps), sizeProps);
};
