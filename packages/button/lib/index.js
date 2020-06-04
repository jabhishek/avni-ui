"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const React = require("react");
exports.Button = ({ children }) => {
    return React.createElement("button", { type: "button" }, children);
};
