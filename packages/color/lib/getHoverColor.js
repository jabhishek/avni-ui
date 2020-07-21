"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoverColor = void 0;
const polished_1 = require("polished");
exports.getHoverColor = (bgColor) => {
    const lightness = polished_1.parseToHsl(bgColor).lightness;
    if (lightness < 0.5) {
        return polished_1.lighten(0.1, bgColor);
    }
    return polished_1.darken(0.05, bgColor);
};
