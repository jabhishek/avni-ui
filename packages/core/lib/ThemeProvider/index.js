"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = void 0;
const React = require("react");
const react_1 = require("react");
const core_1 = require("@emotion/core");
const emotion_theming_1 = require("emotion-theming");
const Theme_1 = require("../Theme");
exports.ThemeProvider = ({ theme = Theme_1.defaultTheme, children, }) => {
    return React.createElement(emotion_theming_1.ThemeProvider, { theme: theme }, children);
};
exports.useTheme = () => {
    const theme = react_1.useContext(core_1.ThemeContext);
    if (typeof theme === 'undefined') {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};
