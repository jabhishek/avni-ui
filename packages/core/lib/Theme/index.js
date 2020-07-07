"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
const fonts_1 = require("./utils/fonts");
const colors_1 = require("./utils/colors");
exports.defaultTheme = Object.assign(Object.assign({}, fonts_1.typography), { colors: colors_1.colors, space: {
        none: 0,
        xs: fonts_1.pxToRem(4),
        sm: fonts_1.pxToRem(8),
        md: fonts_1.pxToRem(12),
        lg: fonts_1.pxToRem(16),
        xl: fonts_1.pxToRem(24),
        '2xl': fonts_1.pxToRem(32),
        '3xl': fonts_1.pxToRem(48),
    }, breakpoints: ['20em', '48em', '64em', '114em'], variantTheme: {
        buttons: {
            primary: {
                color: 'white',
                bgColor: 'primary',
            },
        },
    } });
