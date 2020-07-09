"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStory = void 0;
const react_1 = require("react");
const button_1 = require("@avni-ui/button");
exports.default = {
    title: 'Example Button',
    component: button_1.Button
};
exports.ButtonStory = () => (react_1.default.createElement(button_1.Button, null,
    react_1.default.createElement("span", { role: "img", "aria-label": "so cool" }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF")));
exports.ButtonStory.story = {
    name: 'Button',
};
