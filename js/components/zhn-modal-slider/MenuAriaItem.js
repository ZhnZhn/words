"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const MenuAriaItem = _ref2 => {
  let {
    className,
    style,
    onClick,
    onReg,
    children
  } = _ref2;
  const _ref = (0, _uiApi.useRef)(),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      evt.preventDefault();
      const {
        keyCode
      } = evt;
      if (keyCode === 13 || keyCode === 32) {
        onClick();
      }
    }, [onClick]);

  /* eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    const _el = (0, _uiApi.getRefValue)(_ref);
    if (_el && (0, _isTypeFn.isFn)(onReg)) {
      onReg(_el);
    }
  }, []);
  // onReg
  /* eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsx)("div", {
    className: className,
    style: style,
    ref: onReg ? _ref : void 0,
    role: "menuitem",
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: children
  });
};
var _default = exports.default = MenuAriaItem;
//# sourceMappingURL=MenuAriaItem.js.map