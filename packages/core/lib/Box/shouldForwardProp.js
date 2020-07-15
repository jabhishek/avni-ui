"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldForwardProp = exports.allStyled = void 0;
const should_forward_prop_1 = require("@styled-system/should-forward-prop");
const styled_system_1 = require("styled-system");
const customProps_1 = require("./customProps");
exports.allStyled = styled_system_1.compose(styled_system_1.space, styled_system_1.typography, styled_system_1.color, styled_system_1.layout, styled_system_1.flexbox, styled_system_1.border, styled_system_1.background, styled_system_1.position, styled_system_1.grid, styled_system_1.shadow, styled_system_1.buttonStyle, styled_system_1.textStyle, styled_system_1.colorStyle, customProps_1.customProps);
const styledProps = exports.allStyled.propNames;
exports.shouldForwardProp = should_forward_prop_1.createShouldForwardProp([...styledProps, ...customProps_1.CUSTOM_PROPS]);
//# sourceMappingURL=shouldForwardProp.js.map