"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const getColorProps = (variantColor) => {
    return {
        backgroundColor: variantColor,
    };
};
const defaultStyle = {
    p: '5px 20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '2px',
};
exports.useStyles = (variantColor) => {
    const colorProps = getColorProps(variantColor);
    return Object.assign(Object.assign({}, defaultStyle), colorProps);
};
