"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.getLabelStyles = exports.getKnobStyles = exports.getButtonStyles = void 0;
const core_1 = require("@avni-ui/core");
const padding = 2;
const SIZE_MAPPING = {
    sm: 20,
    md: 30,
    lg: 40,
};
const defaultButtonProps = {
    userSelect: 'none',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    appearance: 'none',
    position: 'relative',
    padding,
};
const defaultKnobProps = {
    borderRadius: '100%',
    display: 'block',
    backgroundColor: 'hsl(0, 100%, 98%)',
    transition: '0.3s transform',
};
const defaultLabelProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    pointerEvents: 'none',
    userSelect: 'none',
};
const getColorFromThemeKey = (colorKey, theme) => {
    const primaryColorInTheme = theme.colors[colorKey];
    if (typeof primaryColorInTheme === 'string') {
        return primaryColorInTheme;
    }
    return primaryColorInTheme['500'];
};
const getButtonColorStyles = (on, theme) => {
    const primaryColor = getColorFromThemeKey('primary', theme);
    return {
        backgroundColor: on ? primaryColor : 'hsl(0, 0%, 80%)',
    };
};
exports.getButtonStyles = (on, switchWidth, switchHeight, theme) => {
    const colorStyles = getButtonColorStyles(on, theme);
    return Object.assign(Object.assign(Object.assign({}, defaultButtonProps), colorStyles), { width: switchWidth, borderRadius: switchHeight, '&:focus': {
            boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
        } });
};
exports.getKnobStyles = (on, knobSize, knobLeftOn) => {
    return Object.assign(Object.assign({}, defaultKnobProps), { width: knobSize, height: knobSize, transform: on ? `translateX(${knobLeftOn}px)` : 'translateX(0)' });
};
exports.getLabelStyles = (on, switchHeight) => {
    return Object.assign(Object.assign({}, defaultLabelProps), { width: switchHeight, lineHeight: `${switchHeight}px`, left: on ? 0 : 'auto', right: on ? 'auto' : 0, fontSize: switchHeight / 2 });
};
const getSizeAttributes = (size) => {
    const knobSize = typeof size === 'string' ? SIZE_MAPPING[size] : size;
    const switchWidth = knobSize * 2;
    const knobLeftOn = switchWidth - knobSize - 2 * padding;
    const switchHeight = knobSize + 2 * padding;
    return { knobSize, switchWidth, knobLeftOn, switchHeight };
};
exports.useStyles = (on, size) => {
    const theme = core_1.useTheme();
    const { knobSize, switchWidth, knobLeftOn, switchHeight } = getSizeAttributes(size);
    const buttonStyles = exports.getButtonStyles(on, switchWidth, switchHeight, theme);
    const knobStyles = exports.getKnobStyles(on, knobSize, knobLeftOn);
    const labelStyles = exports.getLabelStyles(on, switchHeight);
    return { buttonStyles, knobStyles, labelStyles };
};
