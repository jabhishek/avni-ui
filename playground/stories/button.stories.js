"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStory = void 0;
const react_1 = require("react");
const addon_actions_1 = require("@storybook/addon-actions");
const Button_1 = require("./Button");
exports.default = {
    title: 'Example Button',
    component: Button_1.Button
};
exports.ButtonStory = () => (react_1.default.createElement(Button_1.Button, { onClick: addon_actions_1.action('clicked') },
    react_1.default.createElement("span", { role: "img", "aria-label": "so cool" }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF")));
exports.ButtonStory.story = {
    name: 'Button',
};
