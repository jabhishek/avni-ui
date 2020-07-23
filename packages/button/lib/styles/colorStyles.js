"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseColorToUse = exports.getColorFromUserTheme = exports.getColorProps = exports.baseBoxShadow = void 0;
const core_1 = require("@avni-ui/core");
const color_1 = require("@avni-ui/color");
const lodash_get_1 = __importDefault(require("lodash.get"));
const disabledStateStyles = {
    opacity: 0.2,
    boxShadow: 'none',
    cursor: 'not-allowed',
};
const getFocusStateStyles = (outlineColor) => {
    return {
        outline: `1px solid ${outlineColor}`,
        outlineOffset: '2px',
        boxShadow: `none`,
    };
};
exports.baseBoxShadow = '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)';
const hoverBoxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`;
const getSwatch = (baseColor) => {
    if (typeof baseColor === 'string') {
        return color_1.createSwatch(baseColor);
    }
    return baseColor;
};
const getFilledButtonStyles = (swatch, theme) => {
    const color = swatch['500'];
    const hoverBgColor = swatch['400'];
    const outlineColor = swatch['600'];
    return {
        backgroundColor: color,
        color: color_1.getContrastingTextColor(color, theme.colors.textColor),
        ':hover:enabled': {
            backgroundColor: hoverBgColor,
            boxShadow: hoverBoxShadow,
        },
        ':focus:enabled, :active:enabled': getFocusStateStyles(outlineColor),
        ':disabled': disabledStateStyles,
    };
};
const getOutlineButtonStyles = (swatch, theme) => {
    const bodyBackgroundColor = theme.colors.backgroundColor;
    const bgColor = swatch['500'];
    const textColor = color_1.getContrastingTextColor(bodyBackgroundColor, swatch['700'], swatch['200']);
    const hoverBgColor = color_1.getHoverColor(bodyBackgroundColor);
    const hoverTextColor = color_1.getContrastingTextColor(hoverBgColor, swatch['700'], swatch['200']);
    const outlineColor = swatch['600'];
    return {
        border: `2px solid ${bgColor}`,
        backgroundColor: 'transparent',
        boxShadow: `none`,
        color: textColor,
        ':hover:enabled, :focus:enabled, :active:enabled': {
            backgroundColor: hoverBgColor,
            color: hoverTextColor,
        },
        ':focus:enabled, :active:enabled': {
            outline: `1px solid ${outlineColor}`,
            outlineOffset: '2px',
            boxShadow: `none`,
        },
        ':disabled': disabledStateStyles,
    };
};
exports.getColorProps = ({ baseColor, theme, variant, }) => {
    const swatch = getSwatch(baseColor);
    if (variant === 'filled') {
        return getFilledButtonStyles(swatch, theme);
    }
    if (variant === 'outline') {
        return getOutlineButtonStyles(swatch, theme);
    }
    return {};
};
exports.getColorFromUserTheme = (baseColor, theme) => {
    const color = lodash_get_1.default(theme, `colors.${baseColor}`);
    return color && typeof color === 'string' ? color : undefined;
};
exports.getBaseColorToUse = (baseColor, theme) => {
    if (baseColor) {
        const colorFromUserTheme = exports.getColorFromUserTheme(baseColor, theme);
        if (colorFromUserTheme) {
            return colorFromUserTheme;
        }
        return baseColor;
    }
    return core_1.defaultTheme.colors.primary;
};
