"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = exports.defaultStyle = exports.baseBoxShadow = void 0;
const core_1 = require("@avni-ui/core");
const lodash_get_1 = __importDefault(require("lodash.get"));
const color_1 = require("@avni-ui/color");
exports.baseBoxShadow = '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)';
const hoverBoxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`;
const getSwatch = (baseColor) => {
    if (typeof baseColor === 'string') {
        return color_1.createSwatch(baseColor);
    }
    return baseColor;
};
const getColorProps = ({ baseColor, theme }) => {
    const swatch = getSwatch(baseColor);
    console.log('swatch', swatch);
    const color = swatch['500'].color;
    const hoverBgColor = swatch['400'].color;
    const outlineColor = swatch['600'].color;
    return {
        backgroundColor: color,
        color: color_1.getContrastingTextColor(color, theme.colors.textBlack),
        ':hover:enabled': {
            backgroundColor: hoverBgColor,
            boxShadow: hoverBoxShadow,
        },
        ':focus:enabled, :active:enabled': {
            outline: `1px solid ${outlineColor}`,
            outlineOffset: '2px',
            boxShadow: `none`,
        },
        ':disabled': {
            opacity: 0.2,
            boxShadow: 'none',
            cursor: 'not-allowed',
        },
    };
};
exports.defaultStyle = {
    cursor: 'pointer',
    border: 'none',
    borderRadius: '2px',
    outline: 'none',
    transition: '0.25s background-color, 0.25s color',
    boxShadow: exports.baseBoxShadow,
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
const getColorFromUserTheme = (baseColor, theme) => {
    const color = lodash_get_1.default(theme, `colors.${baseColor}`);
    return color && typeof color === 'string' ? color : undefined;
};
const getBaseColorToUse = (baseColor, theme) => {
    if (baseColor) {
        const colorFromUserTheme = getColorFromUserTheme(baseColor, theme);
        if (colorFromUserTheme) {
            return colorFromUserTheme;
        }
        return baseColor;
    }
    return core_1.defaultTheme.colors.primary;
};
exports.getStyles = ({ baseColor, theme, size, }) => {
    const colorProps = getColorProps({ baseColor: getBaseColorToUse(baseColor, theme), theme });
    const sizeProps = getSizeProps({ size, theme });
    return Object.assign(Object.assign({}, colorProps), sizeProps);
};
