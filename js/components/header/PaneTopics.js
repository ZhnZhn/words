"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));
var _jsxRuntime = require("preact/jsx-runtime");
const ItemsStack = _ref2 => {
  let {
    refItem,
    items,
    clItem,
    onClose
  } = _ref2;
  return items.map((item, index) => {
    const _ref = index === 0 ? refItem : void 0;
    return (0, _jsxRuntime.jsx)(_Atoms.default.MenuItem, {
      refEl: _ref,
      className: clItem,
      ...item,
      onClose: onClose
    }, item.caption);
  });
};
const PaneTopics = _ref3 => {
  let {
    isShow,
    className,
    clItem,
    items,
    onClose
  } = _ref3;
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
    children: (0, _jsxRuntime.jsx)(_Atoms.default.ShowHide, {
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