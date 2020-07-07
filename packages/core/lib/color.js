"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContrastingTextColor = exports.getContrastingColor = exports.getColor = void 0;
const Color = require('color');
exports.getColor = function getColor(color) {
    return Color(color);
};
exports.getContrastingColor = (baseColor, contrastLevel) => {
    const colorObject = exports.getColor(baseColor);
    const lightness = colorObject.lightness();
    const isDark = colorObject.isDark();
    let contrast = 1;
    let newLightness = lightness;
    let color2 = colorObject;
    while (contrast < contrastLevel && newLightness > 0 && newLightness < 100) {
        if (isDark) {
            newLightness--;
        }
        else {
            newLightness++;
        }
        color2 = colorObject.lightness(newLightness);
        contrast = colorObject.contrast(color2);
    }
    return color2;
};
exports.getContrastingTextColor = (color, darkColor = '#000', lightColor = '#fff') => {
    const darkColorObj = exports.getColor(darkColor);
    const lightColorObj = exports.getColor(lightColor);
    const contrastWithDark = color.contrast(darkColorObj);
    const contrastWithLight = color.contrast(lightColorObj);
    return contrastWithDark > contrastWithLight ? darkColor : lightColor;
};
