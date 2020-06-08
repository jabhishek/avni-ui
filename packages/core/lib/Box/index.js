"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const styled_1 = require("@emotion/styled");
const styled_system_1 = require("styled-system");
const shouldForwardProp_1 = require("./shouldForwardProp");
const customProps_1 = require("./customProps");
exports.Box = styled_1.default('div', { shouldForwardProp: shouldForwardProp_1.shouldForwardProp })(styled_system_1.background, styled_system_1.border, styled_system_1.color, styled_system_1.flexbox, styled_system_1.grid, styled_system_1.layout, styled_system_1.position, styled_system_1.shadow, styled_system_1.space, styled_system_1.typography, styled_system_1.opacity, styled_system_1.overflow, customProps_1.customProps);
