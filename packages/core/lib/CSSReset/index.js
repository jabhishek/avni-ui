"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSReset = void 0;
const React = require("react");
const core_1 = require("@emotion/core");
const getHtmlFontSize = (baseFontSize) => {
    if (!baseFontSize) {
        return '62.5%';
    }
    return `${((baseFontSize * 100) / 16).toFixed(2)}%`;
};
const styles = (theme) => {
    console.log('Global props', theme);
    const baseFontSize = getHtmlFontSize(theme.baseFontSize);
    return core_1.css `
    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
      box-sizing: border-box;
      font-family: ${theme.fonts.body};
      font-size: ${baseFontSize};
    }

    body {
      margin: 0;
      font-size: 1.6rem;
      font-family: ${theme.fonts.body};
      color: ${theme.colors.textBlack};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    main {
      display: block;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    pre {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    a {
      background-color: transparent;
    }

    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
    }

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    img {
      border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }

    button,
    input {
      overflow: visible;
    }

    button,
    select {
      text-transform: none;
    }

    [type='button'],
    [type='reset'],
    [type='submit'],
    button {
      -webkit-appearance: button;
    }

    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }

    progress {
      vertical-align: baseline;
    }

    textarea {
      overflow: auto;
    }

    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }

    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }

    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }

    details {
      display: block;
    }

    summary {
      display: list-item;
    }

    template {
      display: none;
    }

    [hidden] {
      display: none;
    }
  `;
};
exports.CSSReset = () => {
    return React.createElement(core_1.Global, { styles: styles });
};
exports.CSSReset.displayName = 'CSSReset';
//# sourceMappingURL=index.js.map