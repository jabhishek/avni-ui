"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const React = __importStar(require("react"));
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@avni-ui/core");
const fontSizeMapping = {
    h1: 'l6',
    h2: 'l5',
    h3: 'l4',
    h4: 'l3',
    h5: 'l2',
    h6: 'l1',
};
exports.Heading = ({ tag = 'h1', children, }) => {
    const theme = core_1.useTheme();
    const fontSize = fontSizeMapping[tag];
    const StyledHeading = styled_1.default(tag)({
        fontSize: theme.fontSizes[fontSize],
        fontWeight: 500,
        lineHeight: 'normal',
        margin: '0.5em 0',
    });
    return React.createElement(StyledHeading, null, children);
};
