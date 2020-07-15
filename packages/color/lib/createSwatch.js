"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwatch = void 0;
const polished_1 = require("polished");
const contrasts = [0.15, 0.3, 0.5, 0.7, 0.85, 1, 0.85, 0.7, 0.5, 0.35];
const colorWeights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const toHslString = (color) => {
    const rgb = polished_1.parseToRgb(color);
    return polished_1.rgbToColorString(rgb);
};
const getSwatchColor = (swatchColor) => {
    return {
        color: toHslString(swatchColor),
        contrastToWhite: polished_1.getContrast(swatchColor, '#fff'),
        contrastToBlack: polished_1.getContrast(swatchColor, '#000'),
    };
};
exports.createSwatch = (baseColor) => {
    const mainSwatch = {};
    const mainColor = baseColor;
    let swatchColor;
    for (let index = 0; index < 10; index++) {
        const colorWeight = colorWeights[index];
        if (index < 5) {
            swatchColor = polished_1.mix(contrasts[index], mainColor, 'white');
            mainSwatch[colorWeight] = getSwatchColor(swatchColor);
        }
        else if (index === 5) {
            mainSwatch[colorWeight] = getSwatchColor(mainColor);
        }
        else if (index >= 6) {
            swatchColor = polished_1.mix(contrasts[index], mainColor, 'black');
            mainSwatch[colorWeight] = getSwatchColor(swatchColor);
        }
    }
    return mainSwatch;
};
//# sourceMappingURL=createSwatch.js.map