"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _CircleButton = _interopRequireDefault(require("../zhn/button/CircleButton"));
var _BrowserCaption = _interopRequireDefault(require("../zhn/BrowserCaption"));
var _ScrollPane = _interopRequireDefault(require("../zhn/ScrollPane"));
var _ModalSlider = require("../zhn-modal-slider/ModalSlider");
var _SvgHrzResize = _interopRequireDefault(require("../zhn-resize/SvgHrzResize"));
var _crModelMore = _interopRequireDefault(require("./crModelMore"));
var _wordConfig = require("./wordConfig");
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const RESIZE_INIT_WIDTH = 535,
  RESIZE_MIN_WIDTH = 375,
  RESIZE_MAX_WIDTH = 1200,
  RESIZE_DELTA = 10,
  CL_PANE_T1 = 'pane-t1',
  CL_MENU_MORE = "popup-menu items__menu-more";
const S_ROOT_DIV = {
    width: RESIZE_INIT_WIDTH
  },
  S_BR_CAPTION = {
    display: 'flex'
  },
  S_BT_CIRCLE = {
    position: 'relative',
    top: 3,
    marginLeft: 16,
    marginRight: 6
  },
  S_SVG_RESIZE = {
    paddingTop: 3
  },
  S_SCROLL_PANE = {
    overflowY: 'auto',
    overflowX: 'hidden',
    //height: '92%',
    height: 'calc(100% - 120px)'
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
    onMinWidth: (0, _bindTo.bindTo)(_resizeTo, RESIZE_MIN_WIDTH),
    onInitWidth: (0, _bindTo.bindTo)(_resizeTo, RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};
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
    [word, setWord] = (0, _uiApi.useState)(_wordConfig.INITIAL_WORD)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _MODEL_MORE = (0, _uiApi.useMemo)(() => (0, _crModelMore.default)(_crModelMoreHandlers(_refRootEl, onRemoveItems)), [])
    // onRemoveItems
    /*eslint-enable react-hooks/exhaustive-deps */,
    [isMenuMore, showMenuMore, closeMenuMore] = (0, _useBool.default)(),
    [isShow, toggleIsShow] = (0, _useToggle.default)(!0)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hHide = (0, _uiApi.useCallback)(() => {
      onClose();
      toggleIsShow(!1);
    }, [onClose])
    // toggleIsShow
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hLoadItem = (0, _uiApi.useCallback)(() => {
      onLoad({
        itemConf,
        word: (0, _uiApi.getRefInputValue)(_refWord)
      });
    }, [itemConf, onLoad]);
  usePane(pOption => {
    if (pOption && pOption.id === id) {
      toggleIsShow(!0);
    }
  });
  useMsItem(option => {
    if (option && option.id === id) {
      toggleIsShow(!0);
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
  const [_showStyle, _showCl] = (0, _styleFn.crShowHideInlineIf)(isShow, CL_PANE_T1);
  return (0, _jsxRuntime.jsxs)("div", {
    ref: _refRootEl,
    className: _showCl,
    style: {
      ...S_ROOT_DIV,
      ..._showStyle
    },
    children: [(0, _jsxRuntime.jsx)(_ModalSlider.ModalSliderMemoIsShow, {
      isShow: isMenuMore,
      className: CL_MENU_MORE,
      model: _MODEL_MORE,
      onClose: closeMenuMore
    }), (0, _jsxRuntime.jsxs)(_BrowserCaption.default, {
      rootStyle: S_BR_CAPTION,
      caption: paneCaption,
      onMore: showMenuMore,
      onClose: _hHide,
      children: [(0, _jsxRuntime.jsx)(_CircleButton.default, {
        caption: "R",
        title: R_TITLE,
        style: S_BT_CIRCLE,
        onClick: onRemoveItems
      }), (0, _jsxRuntime.jsx)(_SvgHrzResize.default, {
        elementRef: _refRootEl,
        style: S_SVG_RESIZE,
        initWidth: RESIZE_INIT_WIDTH,
        minWidth: RESIZE_MIN_WIDTH,
        maxWidth: RESIZE_MAX_WIDTH
      })]
    }), (0, _jsxRuntime.jsx)(Input, {
      refEl: _refWord,
      initValue: word,
      onEnter: _hLoadItem
    }), (0, _jsxRuntime.jsx)(_ScrollPane.default, {
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
var _default = exports.default = PaneType1;
//# sourceMappingURL=PaneType1.js.map