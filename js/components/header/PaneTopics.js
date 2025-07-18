"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _a11yFn = require("../a11yFn");
var _useFocus = require("../hooks/useFocus");
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _jsxRuntime = require("preact/jsx-runtime");
const ItemsStack = _ref => {
  let {
    getRefItem,
    items,
    clItem,
    onClose
  } = _ref;
  return (0, _uiApi.safeMap)(items, (item, index) => (0, _jsxRuntime.jsx)("div", {
    ...(0, _a11yFn.crMenuItemRole)((0, _uiApi.crOnClick)(item.onClick, onClose, !0), "0"),
    ref: getRefItem(index),
    className: clItem,
    children: item.caption
  }, item.caption));
};
const PaneTopics = _ref2 => {
  let {
    isShow,
    className,
    clItem,
    items,
    onClose
  } = _ref2;
  const [_refFirstItem, _refLastItem, _getRefItem] = (0, _useFocus.useItemsFocusTrap)(items, isShow);
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShow,
      className: className,
      children: (0, _jsxRuntime.jsx)(_FocusTrap.default, {
        refFirst: _refFirstItem,
        refLast: _refLastItem,
        children: (0, _jsxRuntime.jsx)(ItemsStack, {
          getRefItem: _getRefItem,
          items: items,
          clItem: clItem,
          onClose: onClose
        })
      })
    })
  });
};
var _default = exports.default = PaneTopics;
//# sourceMappingURL=PaneTopics.js.map