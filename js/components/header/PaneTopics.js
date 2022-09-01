"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var ItemsStack = function ItemsStack(_ref2) {
  var refItem = _ref2.refItem,
      items = _ref2.items,
      clItem = _ref2.clItem,
      onClose = _ref2.onClose;
  return items.map(function (item, index) {
    var _ref = index === 0 ? refItem : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].MenuItem, (0, _extends2["default"])({
      ref: _ref,
      className: clItem
    }, item, {
      onClose: onClose
    }), item.caption);
  });
};

var PaneTopics = function PaneTopics(_ref3) {
  var isShow = _ref3.isShow,
      className = _ref3.className,
      paneStyle = _ref3.paneStyle,
      clItem = _ref3.clItem,
      items = _ref3.items,
      onClose = _ref3.onClose;

  var _refItem = (0, _uiApi.useRef)(),
      _refPrevEl = (0, _uiApi.useRef)();

  (0, _uiApi.useEffect)(function () {
    if (isShow) {
      (0, _uiApi.setRefValue)(_refPrevEl, document.activeElement);
      (0, _uiApi.focusRefElement)(_refItem);
    } else {
      (0, _uiApi.focusRefElement)(_refPrevEl);
    }
  }, [isShow]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPane["default"], {
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ShowHide, {
      className: className,
      style: paneStyle,
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemsStack, {
        refItem: _refItem,
        items: items,
        clItem: clItem,
        onClose: onClose
      })
    })
  });
};

var _default = PaneTopics;
exports["default"] = _default;
//# sourceMappingURL=PaneTopics.js.map