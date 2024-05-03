"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const FN_NOOP = () => {};
const MenuItem = _ref => {
  let {
    refEl,
    className,
    caption,
    onClick = FN_NOOP,
    onClose = FN_NOOP
  } = _ref;
  const _refDiv = (0, _uiApi.useRef)(),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      const {
        keyCode
      } = evt;
      if (keyCode === 13) {
        onClick();
      } else if (keyCode === 27) {
        onClose({
          target: (0, _uiApi.getRefValue)(_refDiv)
        });
      }
    }, [onClick, onClose]);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    focus: () => {
      (0, _uiApi.focusRefElement)(_refDiv);
    }
  }), []);
  return (0, _jsxRuntime.jsx)("div", {
    role: "button",
    ref: _refDiv,
    className: className,
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: caption
  });
};
var _default = exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map