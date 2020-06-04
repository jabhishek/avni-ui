"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxStory = void 0;
const react_1 = require("react");
const Box_1 = require("@avni-ui/core/lib/Box");
exports.default = {
    title: 'Example Box',
    component: Box_1.Box
};
exports.BoxStory = () => (react_1.default.createElement(Box_1.Box, { as: "button", type: "button" },
    react_1.default.createElement("span", { role: "img", "aria-label": "so cool" }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF")));
exports.BoxStory.story = {
    name: 'Box',
};
