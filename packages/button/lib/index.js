"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const React = require("react");
const core_1 = require("@avni-ui/core");
const getColorProps = (variantColor) => {
    return {
        color: variantColor,
    };
};
exports.Button = (_a) => {
    var { children, type = 'button', variantColor } = _a, props = __rest(_a, ["children", "type", "variantColor"]);
    const colorProps = getColorProps(variantColor);
    return (React.createElement(core_1.Box, Object.assign({ as: "button", type: type }, colorProps, props), children));
};
