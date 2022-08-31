"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_NOT_SELECTED = "not-selected",
    TITLE = "Click to open add to watch list dialog";

var _setPrevFocused = function _setPrevFocused(element) {
  document._prevFocusedZhn = element;
};

var FN_NOOP = function FN_NOOP() {};

var ItemHeader = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      captionStyle = _ref.captionStyle,
      svgCloseStyle = _ref.svgCloseStyle,
      title = _ref.title,
      caption = _ref.caption,
      _ref$onAddToWatch = _ref.onAddToWatch,
      onAddToWatch = _ref$onAddToWatch === void 0 ? FN_NOOP : _ref$onAddToWatch,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? FN_NOOP : _ref$onClose,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? FN_NOOP : _ref$onClick;

  var _refRootNode = (0, _uiApi.useRef)(),
      _refBtAdd = (0, _uiApi.useRef)(),
      _hAddToWatch = (0, _uiApi.useCallback)(function (evt) {
    evt.stopPropagation();

    _setPrevFocused((0, _uiApi.getRefValue)(_refBtAdd));

    onAddToWatch({
      caption: caption
    });
  }, [caption, onAddToWatch]),
      _hClose = (0, _uiApi.useCallback)(function (evt) {
    evt.stopPropagation();
    onClose();
  }, [onClose]),
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    var target = evt.target,
        keyCode = evt.keyCode;

    if (target === (0, _uiApi.getRefValue)(_refRootNode)) {
      if (keyCode === 13) {
        onClick(evt);
      } else if (keyCode === 46) {
        onClose();
      } else if (keyCode === 65) {
        _hAddToWatch(event);
      }
    }
  }, [_hAddToWatch, onClick, onClose]),
      focus = (0, _uiApi.useCallback)(function () {
    var _elRoot = (0, _uiApi.getRefValue)(_refRootNode);

    if (_elRoot) {
      _elRoot.focus();
    }
  }, []);
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    focus();
  }, []); // focus

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      focus: focus
    };
  }, []); // focus

  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    tabIndex: "0",
    role: "button",
    ref: _refRootNode,
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_NOT_SELECTED,
      style: captionStyle,
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].CircleButton, {
      ref: _refBtAdd,
      caption: "A",
      title: TITLE,
      onClick: _hAddToWatch
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].SvgClose, {
      tabIndex: "-1",
      style: svgCloseStyle,
      onClose: _hClose
    })]
  });
});
var _default = ItemHeader;
exports["default"] = _default;
//# sourceMappingURL=ItemHeader.js.map