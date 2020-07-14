"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContrastingTextColor = void 0;
const polished_1 = require("polished");
exports.getContrastingTextColor = (color, darkColor = '#000', lightColor = '#fff') => {
    console.log('getContrastingTextColor', color, darkColor, lightColor);
    const contrastWithDark = polished_1.getContrast(color, darkColor);
    const contrastWithLight = polished_1.getContrast(color, lightColor);
    return contrastWithDark > contrastWithLight ? darkColor : lightColor;
};
