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
exports.Switch = exports.Knob = void 0;
const React = __importStar(require("react"));
const styled_1 = __importDefault(require("@emotion/styled"));
console.log('avniStyled', styled_1.default);
const borderWidth = 1;
const padding = 1;
const knobSize = 30;
const switchWidth = knobSize * 2;
const knobLeftOn = switchWidth - knobSize - 2 * (padding + borderWidth);
exports.Knob = styled_1.default.span((props) => ({
    width: knobSize,
    height: knobSize,
    borderRadius: '100%',
    display: 'block',
    transform: props.on ? `translateX(${knobLeftOn}px)` : 'translateX(0)',
    backgroundColor: props.theme.colors.primary,
    transition: '0.3s transform',
}));
const SwitchWrapper = styled_1.default.button `
  user-select: none;
  color: #111;
  cursor: pointer;
  border: ${borderWidth}px solid #111;
  background-color: white;
  outline: none;
  -webkit-appearance: none;
  width: ${switchWidth}px;
  border-radius: ${knobSize}px;
  position: relative;
  padding: ${padding}px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
exports.Switch = ({ onChange, onLabel, offLabel, value }) => {
    const onClick = () => {
        onChange(!value);
    };
    return (React.createElement(SwitchWrapper, { onClick: onClick, role: "switch", "aria-checked": value },
        React.createElement(exports.Knob, { on: value })));
};
