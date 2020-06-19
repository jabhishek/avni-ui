"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const core_1 = require("@avni-ui/core");
const lodash_get_1 = require("lodash.get");
const colorBlack = core_1.getColor(`#000`);
const colorWhite = core_1.getColor(`#fff`);
const getContrastingColor = (color) => {
    const contrastDark = color.contrast(colorBlack);
    const contrastLight = color.contrast(colorWhite);
    return contrastDark > contrastLight ? '#000' : '#fff';
};
const getColorProps = ({ baseColor, variant }) => {
    const color = core_1.getColor(baseColor).rgb();
    const action = color.isDark() ? 'lighten' : 'darken';
    const borderColor = color[action](0.1).string();
    const hoverBgColor = color[action](0.1);
    const hoverTextColor = getContrastingColor(hoverBgColor);
    return {
        backgroundColor: baseColor,
        color: getContrastingColor(color),
        border: `1px solid ${borderColor}`,
        _hover: { backgroundColor: hoverBgColor.hsl().string(), color: hoverTextColor, opacity: 0.9 },
    };
};
const defaultStyle = {
    p: '5px 20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '2px',
    transition: '0.5s all',
};
const getColorFromUserTheme = (baseColor) => {
    const theme = core_1.useTheme();
    const color = lodash_get_1.default(theme, `colors.${baseColor}`);
    return color && typeof color === 'string' ? color : undefined;
};
const getBaseColorToUse = (baseColor) => {
    if (baseColor) {
        if (core_1.getColor(baseColor)) {
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
