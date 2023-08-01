"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _SvgHrzResize = _interopRequireDefault(require("../zhn-resize/SvgHrzResize"));
var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));
var _Pane = _interopRequireDefault(require("./Pane.Style"));
var _crModelMore = _interopRequireDefault(require("./crModelMore"));
var _ContainerStyle = require("../styles/ContainerStyle");
var _Comp = _interopRequireDefault(require("../Comp"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const RESIZE_INIT_WIDTH = 535,
  RESIZE_MIN_WIDTH = 375,
  RESIZE_MAX_WIDTH = 1200,
  RESIZE_DELTA = 10,
  CL_SHOW_POPUP = "show-popup",
  CL_MENU_MORE = "popup-menu items__menu-more";
const S_ROOT_DIV = {
    ..._ContainerStyle.S_PANE_TYPE1,
    width: RESIZE_INIT_WIDTH
  },
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
const FN_NOOP = () => {},
  _getWidth = style => parseInt(style.width, 10) || RESIZE_INIT_WIDTH,
  _toStyleWidth = width => width + 'px';
const ConfigsStack = _ref => {
  let {
    configs,
    Item,
    onCloseItem,
    onRemoveUnder,
    onAddToWatch
  } = _ref;
  return (configs || []).map(config => (0, _jsxRuntime.jsx)(Item, {
    config: config,
    onCloseItem: onCloseItem,
    onRemoveUnder: onRemoveUnder,
    onAddToWatch: onAddToWatch
  }, config.id));
};
const _crModelMoreHandlers = (ref, onRemoveItems) => {
  const _resizeTo = width => {
      ((0, _uiApi.getRefElementStyle)(ref) || {}).width = _toStyleWidth(width);
    },
    _plusToWidth = () => {
      const style = (0, _uiApi.getRefElementStyle)(ref) || {},
        w = _getWidth(style) + RESIZE_DELTA;
      if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    },
    _minusToWidth = () => {
      const style = (0, _uiApi.getRefElementStyle)(ref) || {},
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
const DF_WORD = 'example';
const PaneType1 = _ref2 => {
  let {
    id,
    usePane,
    useMsItem,
    useWatch,
    paneCaption,
    Input,
    Item,
    itemConf,
    onLoad = FN_NOOP,
    onClose = FN_NOOP,
    onRemoveItems,
    onCloseItem,
    onRemoveUnder,
    onAddToWatch
  } = _ref2;
  const _refRootEl = (0, _uiApi.useRef)(),
    _refWord = (0, _uiApi.useRef)(),
    [configs, setConfigs] = (0, _uiApi.useState)([]),
    [word, setWord] = (0, _uiApi.useState)(DF_WORD)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _MODEL_MORE = (0, _uiApi.useMemo)(() => (0, _crModelMore.default)(_crModelMoreHandlers(_refRootEl, onRemoveItems)), [])
    // onRemoveItems
    /*eslint-enable react-hooks/exhaustive-deps */,
    [isMore, toggleIsMore] = (0, _useToggle.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _showMore = (0, _uiApi.useCallback)(() => {
      toggleIsMore(true);
    }, [])
    // toggleIsMore
    /*eslint-enable react-hooks/exhaustive-deps */,
    [isShow, toggleIsShow] = (0, _useToggle.default)(true)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hHide = (0, _uiApi.useCallback)(() => {
      onClose();
      toggleIsShow(false);
    }, [onClose])
    // toggleIsShow
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hLoadItem = (0, _uiApi.useCallback)(() => {
      onLoad({
        itemConf,
        word: (0, _uiApi.getRefInputValue)(_refWord)
      });
    }, [itemConf, onLoad]),
    TS = (0, _useTheme.default)(_Pane.default);
  usePane(pOption => {
    if (pOption && pOption.id === id) {
      toggleIsShow(true);
    }
  });
  useMsItem(option => {
    if (option && option.id === id) {
      toggleIsShow(true);
      setConfigs([...option.configs]);
    }
  });
  useWatch(option => {
    const {
      item
    } = option || {};
    if (item && item.id === id) {
      setWord(item.caption);
    }
  });
  const [_showStyle, _showCl] = isShow ? [S_INLINE_BLOCK, CL_SHOW_POPUP] : [S_NONE];
  return (0, _jsxRuntime.jsxs)("div", {
    ref: _refRootEl,
    className: _showCl,
    style: {
      ...S_ROOT_DIV,
      ...TS.BG_COLOR,
      ..._showStyle
    },
    children: [(0, _jsxRuntime.jsx)(_Comp.default.ModalSlider, {
      isShow: isMore,
      className: CL_MENU_MORE,
      style: TS.BG_COLOR,
      model: _MODEL_MORE,
      onClose: toggleIsMore
    }), (0, _jsxRuntime.jsxs)(_Comp.default.BrowserCaption, {
      rootStyle: {
        ...S_BR_CAPTION,
        ...TS.PANE_CAPTION
      },
      caption: paneCaption,
      onMore: _showMore,
      onClose: _hHide,
      children: [(0, _jsxRuntime.jsx)(_Comp.default.CircleButton, {
        caption: "R",
        title: R_TITLE,
        style: S_BT_CIRCLE,
        onClick: onRemoveItems
      }), (0, _jsxRuntime.jsx)(_SvgHrzResize.default, {
        elementRef: _refRootEl
        //svgStyle={TS.SVG_RESIZE}
        ,
        initWidth: RESIZE_INIT_WIDTH,
        minWidth: RESIZE_MIN_WIDTH,
        maxWidth: RESIZE_MAX_WIDTH
      })]
    }), (0, _jsxRuntime.jsx)(Input, {
      ref: _refWord,
      TS: TS,
      initValue: word,
      onEnter: _hLoadItem
    }), (0, _jsxRuntime.jsx)(_Comp.default.ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S_SCROLL_PANE,
      children: (0, _jsxRuntime.jsx)(ConfigsStack, {
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
  updateAction: PropTypes.string,
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
exports.default = _default;
//# sourceMappingURL=PaneType1.js.map