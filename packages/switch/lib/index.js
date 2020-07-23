"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const core_1 = require("@emotion/core");
const styles_1 = require("./styles");
exports.Switch = ({ onChange, onLabel = '', offLabel = '', on, size = 'md' }) => {
    const onClick = () => {
        onChange(!on);
    };
    const { buttonStyles, knobStyles, labelStyles } = styles_1.useStyles(on, size);
    return (core_1.jsx("button", { onClick: onClick, role: "switch", "aria-checked": on, css: buttonStyles },
        core_1.jsx("span", { "aria-hidden": "true", css: knobStyles }),
        core_1.jsx("span", { "aria-hidden": "true", css: labelStyles }, on ? onLabel : offLabel)));
};
