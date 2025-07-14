"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CircleButton = _interopRequireDefault(require("../zhn/button/CircleButton"));
var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_NOT_SELECTED = "not-selected",
  TITLE = "Click to open add to watch list dialog";
const _setPrevFocused = element => {
  document._prevFocusedZhn = element;
};
const FN_NOOP = () => {};
const ItemHeader = _ref => {
  let {
    isShow,
    className,
    style,
    captionStyle,
    svgCloseStyle,
    title,
    caption,
    onAddToWatch = FN_NOOP,
    onClose = FN_NOOP,
    onClick = FN_NOOP
  } = _ref;
  const _refRootNode = (0, _uiApi.useRef)(),
    _refBtAdd = (0, _uiApi.useRef)(),
    _hAddToWatch = (0, _uiApi.useCallback)(evt => {
      evt.stopPropagation();
      _setPrevFocused((0, _uiApi.getRefValue)(_refBtAdd));
      onAddToWatch({
        caption
      });
    }, [caption, onAddToWatch]),
    _hClose = (0, _uiApi.useCallback)(evt => {
      evt.stopPropagation();
      onClose();
    }, [onClose]),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      const {
        target,
        keyCode
      } = evt;
      if (target === (0, _uiApi.getRefValue)(_refRootNode)) {
        if (keyCode === 13) {
          onClick(evt);
        } else if (keyCode === 46) {
          onClose();
        } else if (keyCode === 65) {
          _hAddToWatch(evt);
        }
      }
    }, [_hAddToWatch, onClick, onClose]),
    focus = (0, _uiApi.useCallback)(() => {
      (0, _uiApi.focusRefElement)(_refRootNode);
    }, []);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    focus();
  }, []);
  // focus

  return (0, _jsxRuntime.jsxs)("div", {
    tabIndex: "0",
    role: "button",
    ref: _refRootNode,
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("span", {
      className: CL_NOT_SELECTED,
      style: captionStyle,
      children: title
    }), (0, _jsxRuntime.jsx)(_CircleButton.default, {
      refEl: _refBtAdd,
      caption: "A",
      title: TITLE,
      onClick: _hAddToWatch
    }), (0, _jsxRuntime.jsx)(_SvgClose.default, {
      tabIndex: "-1",
      style: svgCloseStyle,
      onClose: _hClose
    })]
  });
};
var _default = exports.default = ItemHeader;
//# sourceMappingURL=ItemHeader.js.map