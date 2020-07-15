"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const styled_1 = require("@emotion/styled");
const shouldForwardProp_1 = require("./shouldForwardProp");
exports.Box = styled_1.default('div', { shouldForwardProp: shouldForwardProp_1.shouldForwardProp })(shouldForwardProp_1.allStyled);
exports.Box.displayName = 'Box';
//# sourceMappingURL=index.js.map