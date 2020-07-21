"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = exports.pxToRem = exports.DEFAULT_BASE_FONT_SIZE = void 0;
const body = 'Roboto, sans-serif';
const heading = 'Roboto Slab, serif';
const mono = 'Roboto mono, monospace';
exports.DEFAULT_BASE_FONT_SIZE = 10;
exports.pxToRem = (px, baseFontSize = exports.DEFAULT_BASE_FONT_SIZE) => {
    return `${px / baseFontSize}rem`;
};
const fonts = {
    body,
    heading,
    mono,
};
const fontSizes = {
    xs: exports.pxToRem(12),
    sm: exports.pxToRem(14),
    body: exports.pxToRem(16),
    l1: exports.pxToRem(18),
    l2: exports.pxToRem(20),
    l3: exports.pxToRem(24),
    l4: exports.pxToRem(30),
    l5: exports.pxToRem(36),
    l6: exports.pxToRem(48),
};
exports.typography = {
    baseFontSize: exports.DEFAULT_BASE_FONT_SIZE,
    fonts,
    fontSizes,
};
