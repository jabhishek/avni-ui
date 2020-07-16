"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProps = exports.config = exports.CUSTOM_PROPS = void 0;
const styled_system_1 = require("styled-system");
exports.CUSTOM_PROPS = ['cursor'];
exports.config = {
    cursor: true,
    outline: true,
    transition: true,
};
exports.customProps = styled_system_1.system(exports.config);
