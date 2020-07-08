"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPalette = exports.getContrastingTextColor = exports.getContrastingColor = exports.getColor = void 0;
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
const contrasts = [0.15, 0.3, 0.5, 0.7, 0.85, 1, 0.85, 0.7, 0.5, 0.35];
const stringifyColor = (color) => {
    return color.hsl().toString();
};
const getPaletteColor = (paletteColor) => {
    return {
        color: stringifyColor(paletteColor),
        contrastToWhite: paletteColor.contrast(Color('#fff')),
        contrastToBlack: paletteColor.contrast(Color('#000')),
    };
};
exports.createPalette = (baseColor) => {
    const color = Color(baseColor).rgb();
    console.log('initial color', stringifyColor(color));
    const mainPalette = [];
    const mainColor = color;
    let paletteColor;
    for (let index = 0; index < 10; index++) {
        if (index < 5) {
            paletteColor = Color('white').mix(mainColor, contrasts[index]);
            mainPalette.push(getPaletteColor(paletteColor));
        }
        else if (index === 5) {
            mainPalette.push(getPaletteColor(mainColor));
        }
        else if (index >= 6) {
            paletteColor = Color('black').mix(mainColor, contrasts[index]);
            mainPalette.push(getPaletteColor(paletteColor));
        }
    }
    return mainPalette;
};
