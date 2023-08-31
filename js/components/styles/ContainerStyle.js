"use strict";

exports.__esModule = true;
exports.crShowHideIf = exports.S_PANE_TYPE1 = exports.S_BROWSER = exports.S_ABOUT = void 0;
const CL_CONTAINER_SHOW_POPUP = 'container show-popup';
const S_PANE_TYPE1 = {
  padding: '0 0 3px 0',
  overflow: 'hidden'
};
exports.S_PANE_TYPE1 = S_PANE_TYPE1;
const S_BROWSER = {
  flexShrink: 0,
  padding: '0px 3px 35px 0px',
  minWidth: 270,
  maxWidth: 400
};
exports.S_BROWSER = S_BROWSER;
const S_ABOUT = {
  padding: 0,
  paddingBottom: 35,
  width: 390,
  minWidth: 300
};
exports.S_ABOUT = S_ABOUT;
const S_BLOCK = {
    display: 'block'
  },
  S_INLINE_BLOCK = {
    display: 'inline-block'
  },
  S_NONE = {
    display: 'none'
  };
const crShowHideIf = (isShow, isInlineBlock) => isShow ? [isInlineBlock ? S_INLINE_BLOCK : S_BLOCK, CL_CONTAINER_SHOW_POPUP] : [S_NONE];
exports.crShowHideIf = crShowHideIf;
//# sourceMappingURL=ContainerStyle.js.map