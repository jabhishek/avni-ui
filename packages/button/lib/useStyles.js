"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const core_1 = require("@avni-ui/core");
const lodash_get_1 = __importDefault(require("lodash.get"));
const { getColor, getContrastingColor, getContrastingTextColor } = core_1.colorUtils;
const baseBoxShadow = '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)';
const hoverBoxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`;
const getColorProps = ({ baseColor, variant }) => {
    const color = getColor(baseColor).rgb();
    const hoverBgColor = getContrastingColor(baseColor, 1.4);
    const outlineColor = getContrastingColor(baseColor, 3);
    const hoverTextColor = getContrastingTextColor(hoverBgColor, '#000', '#fff');
    return {
        backgroundColor: baseColor,
        color: getContrastingTextColor(color),
        _hover: {
            backgroundColor: hoverBgColor.hsl().string(),
            color: hoverTextColor,
            opacity: 0.9,
            boxShadow: hoverBoxShadow,
        },
        _focus: {
            boxShadow: `0px 0px 1px 2px ${outlineColor}`,
        },
    };
};
const defaultStyle = {
    p: '5px 20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '2px',
    outline: 'none',
    transition: '0.5s all',
    fontFamily: 'body',
    boxShadow: baseBoxShadow,
};
const getColorFromUserTheme = (baseColor) => {
    const theme = core_1.useTheme();
    const color = lodash_get_1.default(theme, `colors.${baseColor}`);
    return color && typeof color === 'string' ? color : undefined;
};
const getBaseColorToUse = (baseColor) => {
    if (baseColor) {
        if (getColor(baseColor)) {
            return baseColor;
        }
        const colorFromUserTheme = getColorFromUserTheme(baseColor);
        if (colorFromUserTheme) {
            return colorFromUserTheme;
        }
    }
    return lodash_get_1.default(core_1.defaultTheme, `colors.primary`);
};
exports.useStyles = ({ baseColor = 'red', variant = 'outline', }) => {
    const colorProps = getColorProps({ baseColor: getBaseColorToUse(baseColor), variant });
    return Object.assign(Object.assign({}, defaultStyle), colorProps);
};
