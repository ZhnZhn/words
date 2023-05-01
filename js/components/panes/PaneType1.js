"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useToggle3 = _interopRequireDefault(require("../hooks/useToggle"));
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _SvgHrzResize = _interopRequireDefault(require("../zhn-resize/SvgHrzResize"));
var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));
var _Pane = _interopRequireDefault(require("./Pane.Style"));
var _crModelMore = _interopRequireDefault(require("./crModelMore"));
var _ContainerStyle = require("../styles/ContainerStyle");
var _Comp = _interopRequireDefault(require("../Comp"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from 'prop-types'

var RESIZE_INIT_WIDTH = 535,
  RESIZE_MIN_WIDTH = 375,
  RESIZE_MAX_WIDTH = 1200,
  RESIZE_DELTA = 10,
  CL_SHOW_POPUP = "show-popup",
  CL_MENU_MORE = "popup-menu items__menu-more";
var S_ROOT_DIV = (0, _extends2["default"])({}, _ContainerStyle.S_PANE_TYPE1, {
    width: RESIZE_INIT_WIDTH
  }),
  S_BR_CAPTION = {
    marginRight: -2
  },
  S_BT_CIRCLE = {
    position: 'relative',
    top: -3,
    marginLeft: 16,
    marginRight: 6
  },
  S_SCROLL_PANE = {
    overflowY: 'auto',
    overflowX: 'hidden',
    //height: '92%',
    height: 'calc(100% - 120px)'
  },
  S_INLINE_BLOCK = {
    display: 'inline-block'
  },
  S_NONE = {
    display: 'none'
  },
  R_TITLE = "Click to remove all items";
var FN_NOOP = function FN_NOOP() {},
  _getWidth = function _getWidth(style) {
    return parseInt(style.width, 10) || RESIZE_INIT_WIDTH;
  },
  _toStyleWidth = function _toStyleWidth(width) {
    return width + 'px';
  };
var ConfigsStack = function ConfigsStack(_ref) {
  var configs = _ref.configs,
    Item = _ref.Item,
    onCloseItem = _ref.onCloseItem,
    onRemoveUnder = _ref.onRemoveUnder,
    onAddToWatch = _ref.onAddToWatch;
  return (configs || []).map(function (config) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Item, {
      config: config,
      onCloseItem: onCloseItem,
      onRemoveUnder: onRemoveUnder,
      onAddToWatch: onAddToWatch
    }, config.id);
  });
};
var _crModelMoreHandlers = function _crModelMoreHandlers(ref, onRemoveItems) {
  var _resizeTo = function _resizeTo(width) {
      ((0, _uiApi.getRefElementStyle)(ref) || {}).width = _toStyleWidth(width);
    },
    _plusToWidth = function _plusToWidth() {
      var style = (0, _uiApi.getRefElementStyle)(ref) || {},
        w = _getWidth(style) + RESIZE_DELTA;
      if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    },
    _minusToWidth = function _minusToWidth() {
      var style = (0, _uiApi.getRefElementStyle)(ref) || {},
        w = _getWidth(style) - RESIZE_DELTA;
      if (w > RESIZE_MIN_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };
  return {
    onMinWidth: _resizeTo.bind(null, RESIZE_MIN_WIDTH),
    onInitWidth: _resizeTo.bind(null, RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};
var DF_WORD = 'example';
var PaneType1 = function PaneType1(_ref2) {
  var id = _ref2.id,
    store = _ref2.store,
    updateAction = _ref2.updateAction,
    showAction = _ref2.showAction,
    toggleAction = _ref2.toggleAction,
    watchAction = _ref2.watchAction,
    paneCaption = _ref2.paneCaption,
    Input = _ref2.Input,
    Item = _ref2.Item,
    itemConf = _ref2.itemConf,
    _ref2$onLoad = _ref2.onLoad,
    onLoad = _ref2$onLoad === void 0 ? FN_NOOP : _ref2$onLoad,
    _ref2$onClose = _ref2.onClose,
    onClose = _ref2$onClose === void 0 ? FN_NOOP : _ref2$onClose,
    onRemoveItems = _ref2.onRemoveItems,
    onCloseItem = _ref2.onCloseItem,
    onRemoveUnder = _ref2.onRemoveUnder,
    onAddToWatch = _ref2.onAddToWatch;
  var _refRootEl = (0, _uiApi.useRef)(),
    _refWord = (0, _uiApi.useRef)(),
    _useState = (0, _uiApi.useState)([]),
    configs = _useState[0],
    setConfigs = _useState[1],
    _useState2 = (0, _uiApi.useState)(DF_WORD),
    word = _useState2[0],
    setWord = _useState2[1],
    _MODEL_MORE = (0, _uiApi.useMemo)(function () {
      return (0, _crModelMore["default"])(_crModelMoreHandlers(_refRootEl, onRemoveItems));
    }, []),
    _useToggle = (0, _useToggle3["default"])(),
    isMore = _useToggle[0],
    toggleIsMore = _useToggle[1],
    _showMore = (0, _uiApi.useCallback)(function () {
      toggleIsMore(true);
    }, []),
    _useToggle2 = (0, _useToggle3["default"])(true),
    isShow = _useToggle2[0],
    toggleIsShow = _useToggle2[1],
    _hHide = (0, _uiApi.useCallback)(function () {
      onClose();
      toggleIsShow(false);
    }, [onClose]),
    _hLoadItem = (0, _uiApi.useCallback)(function () {
      onLoad({
        itemConf: itemConf,
        word: (0, _uiApi.getRefInputValue)(_refWord)
      });
    }, [itemConf, onLoad]),
    TS = (0, _useTheme["default"])(_Pane["default"]);
  (0, _useListen["default"])(store, function (actionType, option) {
    if (option === void 0) {
      option = {};
    }
    if (option.id === id) {
      switch (actionType) {
        case updateAction:
          toggleIsShow(true);
          setConfigs([].concat(option.configs));
          break;
        case showAction:
          toggleIsShow(true);
          break;
        case toggleAction:
          toggleIsShow();
          break;
        case watchAction:
          setWord(option.caption);
          break;
        default:
          return;
      }
    }
  });
  var _ref3 = isShow ? [S_INLINE_BLOCK, CL_SHOW_POPUP] : [S_NONE],
    _showStyle = _ref3[0],
    _showCl = _ref3[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: _refRootEl,
    className: _showCl,
    style: (0, _extends2["default"])({}, S_ROOT_DIV, TS.BG_COLOR, _showStyle),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalSlider, {
      isShow: isMore,
      className: CL_MENU_MORE,
      style: TS.BG_COLOR,
      model: _MODEL_MORE,
      onClose: toggleIsMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].BrowserCaption, {
      rootStyle: (0, _extends2["default"])({}, S_BR_CAPTION, TS.PANE_CAPTION),
      caption: paneCaption,
      onMore: _showMore,
      onClose: _hHide,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].CircleButton, {
        caption: "R",
        title: R_TITLE,
        style: S_BT_CIRCLE,
        onClick: onRemoveItems
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgHrzResize["default"], {
        elementRef: _refRootEl
        //svgStyle={TS.SVG_RESIZE}
        ,
        initWidth: RESIZE_INIT_WIDTH,
        minWidth: RESIZE_MIN_WIDTH,
        maxWidth: RESIZE_MAX_WIDTH
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, {
      ref: _refWord,
      TS: TS,
      initValue: word,
      onEnter: _hLoadItem
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S_SCROLL_PANE,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ConfigsStack, {
        configs: configs,
        Item: Item,
        onCloseItem: onCloseItem,
        onRemoveUnder: onRemoveUnder,
        onAddToWatch: onAddToWatch
      })
    })]
  });
};

/*
PaneType1.propTypes = {
  paneCaption: PropTypes.string,
  store: PropTypes.shape({
    listen; PropTypes.func
  }),

  id: PropTypes.string,
  addAction: PropTypes.string,
  showAction: PropTypes.string,
  toggleAction: PropTypes.string
  Input: PropTypes.element,

  itemConf: PropTypes.object,
  onLoad: PropTypes.func
  onClose: PropTypes.func

  onRemoveItems: PropTypes.func,
  onRemoveUnder: PropTypes.func,
  onCloseItem: PropTypes.func,
  onAddToWatch: PropTypes.func
}
*/
var _default = PaneType1;
exports["default"] = _default;
//# sourceMappingURL=PaneType1.js.map