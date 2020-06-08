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
const useStyles_1 = require("./useStyles");
exports.Button = (_a) => {
    var { children, type = 'button', variantColor = '#ff5a5a' } = _a, props = __rest(_a, ["children", "type", "variantColor"]);
    const styleProps = useStyles_1.useStyles(variantColor);
    console.log('styleProps', styleProps);
    return (React.createElement(core_1.PseudoBox, Object.assign({ as: "button", type: type }, styleProps, props), children));
};
