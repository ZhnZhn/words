"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Pane = _interopRequireDefault(require("./Pane.Style"));

var _crModelMore = _interopRequireDefault(require("./crModelMore"));

var _Comp = _interopRequireDefault(require("../Comp"));

//import PropTypes from 'prop-types'
var CHILD_MARGIN = 36,
    RESIZE_INIT_WIDTH = 635,
    RESIZE_MIN_WIDTH = 375,
    RESIZE_MAX_WIDTH = 1200,
    RESIZE_DELTA = 10,
    CL = {
  SHOW_POPUP: "show-popup",
  MENU_MORE: "popup-menu items__menu-more"
};
var S = {
  ROOT_DIV: {
    backgroundColor: '#4d4d4d',
    padding: '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: 4,
    width: 635,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    marginLeft: 16,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  BR_CAPTION: {
    marginRight: -2
  },
  BT_CIRCLE: {
    position: 'relative',
    top: -3,
    marginLeft: 16,
    marginRight: 6
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    overflowX: 'hidden',
    //height: '92%',
    height: 'calc(100% - 120px)',
    paddingRight: 10
  },
  INLINE_BLOCK: {
    display: 'inline-block'
  },
  NONE: {
    display: 'none'
  }
};
var T = {
  R: "Click to remove all items"
};

var _fnNoop = function _fnNoop() {};

var _getWidth = function _getWidth(style) {
  return parseInt(style.width, 10) || RESIZE_INIT_WIDTH;
};

var _toStyleWidth = function _toStyleWidth(width) {
  return width + 'px';
};

var NewsPane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(NewsPane, _Component);

  /*
    static propTypes = {
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
  function NewsPane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, option) {
      if (option === void 0) {
        option = {};
      }

      var _this$props = _this.props,
          id = _this$props.id,
          updateAction = _this$props.updateAction,
          showAction = _this$props.showAction,
          toggleAction = _this$props.toggleAction,
          watchAction = _this$props.watchAction;

      if (option.id === id) {
        switch (actionType) {
          case updateAction:
            _this.setState({
              isShow: true,
              configs: option.configs
            });

            break;

          case showAction:
            _this.setState(function (prevState) {
              return prevState.isShow ? null : {
                isShow: true
              };
            });

            break;

          case toggleAction:
            _this.setState(function (prevState) {
              return {
                isShow: !prevState.isShow
              };
            });

            break;

          case watchAction:
            _this.setState({
              word: option.caption
            });

            break;

          default:
            return void 0;
        }
      }
    };

    _this._showMore = function () {
      _this.setState({
        isMore: true
      });
    };

    _this._hToggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._getRootNodeStyle = function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          rootDiv = _assertThisInitialize.rootDiv,
          _ref = rootDiv || {},
          _ref$style = _ref.style,
          style = _ref$style === void 0 ? {} : _ref$style;

      return style;
    };

    _this._resizeTo = function (width) {
      _this._getRootNodeStyle().width = _toStyleWidth(width);
    };

    _this._plusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) + RESIZE_DELTA;

      if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._minusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) - RESIZE_DELTA;

      if (w > RESIZE_MIN_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._hHide = function () {
      _this.props.onClose();

      _this.setState({
        isShow: false
      });
    };

    _this._getRootDiv = function () {
      return _this.rootDiv;
    };

    _this._hLoadItem = function () {
      var _this$props2 = _this.props,
          itemConf = _this$props2.itemConf,
          onLoad = _this$props2.onLoad,
          _word = _this.iWord ? _this.iWord.getValue() : void 0;

      onLoad({
        itemConf: itemConf,
        word: _word
      });
    };

    _this._refRootDiv = function (node) {
      return _this.rootDiv = node;
    };

    _this._refIWord = function (comp) {
      return _this.iWord = comp;
    };

    _this.childMargin = CHILD_MARGIN;
    _this._MODEL = (0, _crModelMore["default"])({
      onMinWidth: _this._resizeTo.bind((0, _assertThisInitialized2["default"])(_this), RESIZE_MIN_WIDTH),
      onInitWidth: _this._resizeTo.bind((0, _assertThisInitialized2["default"])(_this), RESIZE_INIT_WIDTH),
      onPlusWidth: _this._plusToWidth,
      onMinusWidth: _this._minusToWidth,
      onRemoveItems: props.onRemoveItems
    });
    _this.state = {
      isShow: true,
      isMore: false,
      word: 'example',
      configs: []
    };
    return _this;
  }

  var _proto = NewsPane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto._renderConfigs = function _renderConfigs(configs) {
    if (configs === void 0) {
      configs = [];
    }

    var _this$props3 = this.props,
        Item = _this$props3.Item,
        onCloseItem = _this$props3.onCloseItem,
        onRemoveUnder = _this$props3.onRemoveUnder,
        onAddToWatch = _this$props3.onAddToWatch;
    return configs.map(function (config) {
      return /*#__PURE__*/_react["default"].createElement(Item, {
        key: config.id,
        config: config,
        onCloseItem: onCloseItem,
        onRemoveUnder: onRemoveUnder,
        onAddToWatch: onAddToWatch
      });
    });
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        paneCaption = _this$props4.paneCaption,
        theme = _this$props4.theme,
        Input = _this$props4.Input,
        onRemoveItems = _this$props4.onRemoveItems,
        _this$state = this.state,
        isShow = _this$state.isShow,
        isMore = _this$state.isMore,
        word = _this$state.word,
        configs = _this$state.configs,
        TS = theme.createStyle(_Pane["default"]),
        _showStyle = isShow ? S.INLINE_BLOCK : S.NONE,
        _showCl = isShow ? CL.SHOW_POPUP : void 0;

    return /*#__PURE__*/_react["default"].createElement("div", {
      ref: this._refRootDiv,
      className: _showCl,
      style: (0, _extends2["default"])({}, S.ROOT_DIV, TS.BG_COLOR, _showStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Comp["default"].ModalSlider, {
      isShow: isMore,
      className: CL.MENU_MORE,
      style: TS.BG_COLOR,
      model: this._MODEL,
      onClose: this._hToggleMore
    }), /*#__PURE__*/_react["default"].createElement(_Comp["default"].BrowserCaption, {
      rootStyle: (0, _extends2["default"])({}, S.BR_CAPTION, TS.PANE_CAPTION),
      caption: paneCaption,
      onMore: this._showMore,
      onClose: this._hHide
    }, /*#__PURE__*/_react["default"].createElement(_Comp["default"].CircleButton, {
      caption: "R",
      title: T.R,
      style: S.BT_CIRCLE,
      onClick: onRemoveItems
    }), /*#__PURE__*/_react["default"].createElement(_Comp["default"].SvgHrzResize, {
      svgStyle: TS.SVG_RESIZE,
      minWidth: RESIZE_MIN_WIDTH,
      maxWidth: RESIZE_MAX_WIDTH,
      getDomNode: this._getRootDiv
    })), /*#__PURE__*/_react["default"].createElement(Input, {
      ref: this._refIWord,
      TS: TS,
      initValue: word,
      onEnter: this._hLoadItem
    }), /*#__PURE__*/_react["default"].createElement(_Comp["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S.SCROLL_PANE
    }, this._renderConfigs(configs)));
  };

  return NewsPane;
}(_react.Component);

NewsPane.defaultProps = {
  onLoad: _fnNoop,
  onClose: _fnNoop
};

var _default = (0, _withTheme["default"])(NewsPane);

exports["default"] = _default;
//# sourceMappingURL=PaneType1.js.map