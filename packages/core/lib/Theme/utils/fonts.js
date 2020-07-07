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
    md: exports.pxToRem(16),
    lg: exports.pxToRem(18),
    xl: exports.pxToRem(20),
    '2xl': exports.pxToRem(24),
    '3xl': exports.pxToRem(30),
    '4xl': exports.pxToRem(36),
    '5xl': exports.pxToRem(48),
    '6xl': exports.pxToRem(64),
};
exports.typography = {
    fonts,
    fontSizes,
};
