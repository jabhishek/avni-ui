"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const styled_1 = require("@emotion/styled");
const styled_system_1 = require("styled-system");
exports.Box = styled_1.default.div `
  ${styled_system_1.color},
  ${styled_system_1.space}
`;
