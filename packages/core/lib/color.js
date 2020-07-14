"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwatch = exports.getContrastingTextColor = exports.getContrastingColor = exports.getColor = void 0;
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
    const colorObj = exports.getColor(color);
    const darkColorObj = exports.getColor(darkColor);
    const lightColorObj = exports.getColor(lightColor);
    const contrastWithDark = colorObj.contrast(darkColorObj);
    const contrastWithLight = colorObj.contrast(lightColorObj);
    return contrastWithDark > contrastWithLight ? darkColor : lightColor;
};
const contrasts = [0.15, 0.3, 0.5, 0.7, 0.85, 1, 0.85, 0.7, 0.5, 0.35];
const colorWeights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const stringifyColor = (color) => {
    return color.hsl().toString();
};
const getSwatchColor = (swatchColor) => {
    return {
        color: stringifyColor(swatchColor),
        contrastToWhite: swatchColor.contrast(Color('#fff')),
        contrastToBlack: swatchColor.contrast(Color('#000')),
    };
};
exports.createSwatch = (baseColor) => {
    const color = Color(baseColor).rgb();
    const mainSwatch = {};
    const mainColor = color;
    let swatchColor;
    for (let index = 0; index < 10; index++) {
        const colorWeight = colorWeights[index];
        if (index < 5) {
            swatchColor = Color('white').mix(mainColor, contrasts[index]);
            mainSwatch[colorWeight] = getSwatchColor(swatchColor);
        }
        else if (index === 5) {
            mainSwatch[colorWeight] = getSwatchColor(mainColor);
        }
        else if (index >= 6) {
            swatchColor = Color('black').mix(mainColor, contrasts[index]);
            mainSwatch[colorWeight] = getSwatchColor(swatchColor);
        }
    }
    return mainSwatch;
};
