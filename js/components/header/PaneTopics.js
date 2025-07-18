"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _a11yFn = require("../a11yFn");
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _jsxRuntime = require("preact/jsx-runtime");
const ItemsStack = _ref => {
  let {
    refItem,
    items,
    clItem,
    onClose
  } = _ref;
  return (0, _uiApi.safeMap)(items, (item, index) => (0, _jsxRuntime.jsx)("div", {
    ...(0, _a11yFn.crMenuItemRole)((0, _uiApi.crOnClick)(item.onClick, onClose, !0), "0"),
    ref: index === 0 ? refItem : void 0,
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
  const _refItem = (0, _uiApi.useRef)(),
    _refPrevEl = (0, _uiApi.useRef)();
  (0, _uiApi.useEffect)(() => {
    if (isShow) {
      (0, _uiApi.setRefValue)(_refPrevEl, document.activeElement);
      (0, _uiApi.focusRefElement)(_refItem);
    } else {
      (0, _uiApi.focusRefElement)(_refPrevEl);
    }
  }, [isShow]);
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShow,
      className: className,
      children: (0, _jsxRuntime.jsx)(ItemsStack, {
        refItem: _refItem,
        items: items,
        clItem: clItem,
        onClose: onClose
      })
    })
  });
};
var _default = exports.default = PaneTopics;
//# sourceMappingURL=PaneTopics.js.map