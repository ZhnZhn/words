"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _styleFn = require("../../styleFn");
var _useToggle = _interopRequireDefault(require("../../hooks/useToggle"));
var _GestureSwipeX = _interopRequireDefault(require("../../zhn-gesture/GestureSwipeX"));
var _ItemHeader = _interopRequireDefault(require("../ItemHeader"));
var _DefinitionList = _interopRequireDefault(require("./DefinitionList"));
var _jsxRuntime = require("preact/jsx-runtime");
const D_REMOVE_UNDER = 60,
  CL_ITEM_HEADER = "item-header",
  S_ROOT = {
    position: 'relative',
    lineHeight: 1.5,
    marginBottom: 5,
    marginRight: 16,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: 2
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
  S_WORD_DEF = {
    paddingTop: 6,
    paddingRight: 4,
    paddingBottom: 6,
    lineHeight: void 0
  },
  DF_CONFIG = {};
const Word = _ref => {
  let {
    config = DF_CONFIG,
    onCloseItem,
    onAddToWatch
  } = _ref;
  const _refToggleTimeStamp = (0, _uiApi.useRef)(),
    [isShow, toggleIsShow] = (0, _useToggle.default)(),
    _setTimeStamp = (0, _uiApi.useCallback)(timeStamp => {
      (0, _uiApi.setRefValue)(_refToggleTimeStamp, timeStamp);
    }, [])

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hToggle = (0, _uiApi.useCallback)(_ref2 => {
      let {
        timeStamp
      } = _ref2;
      const _toggleTimeStamp = (0, _uiApi.getRefValue)(_refToggleTimeStamp);
      if (_toggleTimeStamp && timeStamp - _toggleTimeStamp < 200) {
        return;
      }
      (0, _uiApi.setRefValue)(_refToggleTimeStamp, timeStamp);
      toggleIsShow();
    }, [])
    // toggleIsShow
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClose = (0, _uiApi.useCallback)(() => {
      onCloseItem(config);
    }, [])
    // onCloseItem, config
    ,
    _onGestureSwipeX = (0, _uiApi.useCallback)(dX => dX > D_REMOVE_UNDER ? (_hClose(), !1) : !0, [])
    // _hClose
    /*eslint-enable react-hooks/exhaustive-deps */,
    _captionStyle = (0, _styleFn.crStyle2)(S_CAPTION, isShow && S_CAPTION_OPEN);
  return (0, _jsxRuntime.jsxs)(_GestureSwipeX.default, {
    style: S_ROOT,
    setTimeStamp: _setTimeStamp,
    onGesture: _onGestureSwipeX,
    children: [(0, _jsxRuntime.jsx)(_ItemHeader.default, {
      className: CL_ITEM_HEADER,
      captionStyle: _captionStyle,
      svgCloseStyle: S_SVG_CLOSE,
      title: config.title,
      caption: config.caption,
      isShow: isShow,
      onClick: _hToggle,
      onClose: _hClose,
      onAddToWatch: onAddToWatch
    }), (0, _jsxRuntime.jsx)(_DefinitionList.default, {
      style: (0, _styleFn.crShowHide)(isShow, S_WORD_DEF),
      defItems: config.results
    })]
  });
};
var _default = exports.default = Word;
//# sourceMappingURL=Word.js.map