"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../../uiApi");
var _crStyle = require("../../zhn-utils/crStyle");
var _useToggle2 = _interopRequireDefault(require("../../hooks/useToggle"));
var _useTheme = _interopRequireDefault(require("../../hoc/useTheme"));
var _Word = _interopRequireDefault(require("./Word.Style"));
var _GestureSwipeX = _interopRequireDefault(require("../../zhn-gesture/GestureSwipeX"));
var _ItemHeader = _interopRequireDefault(require("../ItemHeader"));
var _WordDef = _interopRequireDefault(require("./WordDef"));
var _jsxRuntime = require("react/jsx-runtime");
var D_REMOVE_UNDER = 60;
var CL_ITEM_HEADER = "article-header";
var S_ROOT = {
    position: 'relative',
    lineHeight: 1.5,
    marginBottom: 5,
    marginRight: 16,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: 2
  },
  S_HEADER = {
    backgroundColor: '#404040'
  },
  S_CAPTION = {
    display: 'inline-block',
    color: 'black',
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  S_CAPTION_OPEN = {
    color: '#607d8b'
  },
  S_SVG_CLOSE = {
    position: 'absolute',
    top: 8,
    right: 0
  },
  DF_CONFIG = {};
var Word = function Word(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? DF_CONFIG : _ref$config,
    onCloseItem = _ref.onCloseItem,
    onAddToWatch = _ref.onAddToWatch;
  var _refToggleTimeStamp = (0, _uiApi.useRef)(),
    _useToggle = (0, _useToggle2["default"])(),
    isShow = _useToggle[0],
    toggleIsShow = _useToggle[1],
    _setTimeStamp = (0, _uiApi.useCallback)(function (timeStamp) {
      (0, _uiApi.setRefValue)(_refToggleTimeStamp, timeStamp);
    }, []),
    _hToggle = (0, _uiApi.useCallback)(function (_ref2) {
      var timeStamp = _ref2.timeStamp;
      var _toggleTimeStamp = (0, _uiApi.getRefValue)(_refToggleTimeStamp);
      if (_toggleTimeStamp && timeStamp - _toggleTimeStamp < 200) {
        return;
      }
      (0, _uiApi.setRefValue)(_refToggleTimeStamp, timeStamp);
      toggleIsShow();
    }, []),
    _hClose = (0, _uiApi.useCallback)(function () {
      onCloseItem(config);
    }, []),
    _onGestureSwipeX = (0, _uiApi.useCallback)(function (dX) {
      return dX > D_REMOVE_UNDER ? (_hClose(), false) : true;
    }, []),
    title = config.title,
    caption = config.caption,
    TS = (0, _useTheme["default"])(_Word["default"]),
    _captionStyle = (0, _crStyle.crStyle2)(S_CAPTION, isShow && S_CAPTION_OPEN);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_GestureSwipeX["default"], {
    style: S_ROOT,
    setTimeStamp: _setTimeStamp,
    onGesture: _onGestureSwipeX,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemHeader["default"], {
      className: CL_ITEM_HEADER,
      style: (0, _extends2["default"])({}, S_HEADER, TS.HEADER),
      captionStyle: _captionStyle,
      svgCloseStyle: S_SVG_CLOSE,
      title: title,
      caption: caption,
      isShow: isShow,
      onClick: _hToggle,
      onClose: _hClose,
      onAddToWatch: onAddToWatch
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordDef["default"], {
      style: TS.DESCR,
      isShow: isShow,
      config: config
    })]
  });
};
var _default = Word;
exports["default"] = _default;
//# sourceMappingURL=Word.js.map