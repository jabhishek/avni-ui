"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = exports.defaultStyle = exports.baseBoxShadow = void 0;
const core_1 = require("@avni-ui/core");
const lodash_get_1 = __importDefault(require("lodash.get"));
const { getColor, getContrastingColor, getContrastingTextColor } = core_1.colorUtils;
exports.baseBoxShadow = '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)';
const hoverBoxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`;
const getColorProps = ({ baseColor, theme }) => {
    const color = getColor(baseColor).rgb();
    const hoverBgColor = getContrastingColor(baseColor, 1.15);
    const outlineColor = getContrastingColor(baseColor, 3);
    return {
        backgroundColor: baseColor,
        color: getContrastingTextColor(color, theme.colors.textBlack),
        ':hover': {
            backgroundColor: hoverBgColor.hsl().string(),
            boxShadow: hoverBoxShadow,
        },
        ':focus, :active': {
            boxShadow: `0px 0px 1px 2px ${outlineColor}`,
        },
    };
};
exports.defaultStyle = {
    cursor: 'pointer',
    border: 'none',
    borderRadius: '2px',
    outline: 'none',
    transition: '0.25s all',
    boxShadow: exports.baseBoxShadow,
};
const getSizeProps = ({ theme }) => {
    return {
        fontSize: theme.fontSizes.md,
        padding: `${theme.space.md} ${theme.space.lg}`,
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
        if (getColor(baseColor)) {
            return baseColor;
        }
    }
    return core_1.defaultTheme.colors.primary;
};
exports.getStyles = ({ baseColor, theme, }) => {
    const colorProps = getColorProps({ baseColor: getBaseColorToUse(baseColor, theme), theme });
    const sizeProps = getSizeProps({ theme });
    return Object.assign(Object.assign({}, colorProps), sizeProps);
};
