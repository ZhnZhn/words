"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../../hoc/withTheme"));

var _Word = _interopRequireDefault(require("./Word.Style"));

var _DndOnlyX = _interopRequireDefault(require("../../zhn-dnd/DndOnlyX"));

var _ItemHeader = _interopRequireDefault(require("../ItemHeader"));

var _WordDef = _interopRequireDefault(require("./WordDef"));

var _jsxRuntime = require("react/jsx-runtime");

var D_REMOVE_UNDER = 60;
var D_REMOVE_ITEM = 35;
var CL_ITEM_HEADER = "article-header";
var S = {
  ROOT: {
    position: 'relative',
    lineHeight: 1.5,
    marginBottom: 5,
    marginRight: 25,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: 2
  },
  LEFT_LINE: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 3,
    height: 8,
    backgroundColor: '#3f51b5'
  },
  HEADER: {
    backgroundColor: '#404040'
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display: 'inline-block',
    color: 'black',
    paddingRight: 8,
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b'
  },
  SVG_CLOSE: {
    position: 'absolute',
    top: 8,
    right: 0
  }
};

var Word = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(Word, _Component);

  function Word() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: false
    };

    _this._hToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._hClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          config = _this$props.config;
      onCloseItem(config);
    };

    _this._onDragEnd = function (dX) {
      var _this$props2 = _this.props,
          onRemoveUnder = _this$props2.onRemoveUnder,
          config = _this$props2.config;

      if (dX > D_REMOVE_UNDER) {
        onRemoveUnder(config);
      } else if (dX > D_REMOVE_ITEM) {
        _this._hClose();
      }
    };

    _this._onDragTouchEnd = function (dX) {
      if (dX > D_REMOVE_UNDER) {
        _this._hClose();

        return false;
      } else {
        return true;
      }
    };

    return _this;
  }

  var _proto = Word.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        config = _this$props3.config,
        theme = _this$props3.theme,
        onAddToWatch = _this$props3.onAddToWatch,
        title = config.title,
        caption = config.caption,
        TS = theme.createStyle(_Word["default"]),
        isShow = this.state.isShow,
        _headerStyle = isShow ? (0, _extends2["default"])({}, S.HEADER, S.HEADER_OPEN) : S.HEADER,
        _captionStyle = isShow ? (0, _extends2["default"])({}, S.CAPTION, S.CAPTION_OPEN) : S.CAPTION;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DndOnlyX["default"], {
      style: S.ROOT,
      onDragEnd: this._onDragEnd,
      onDragTouchEnd: this._onDragTouchEnd,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemHeader["default"], {
        className: CL_ITEM_HEADER,
        style: (0, _extends2["default"])({}, _headerStyle, TS.HEADER),
        captionStyle: _captionStyle,
        svgCloseStyle: S.SVG_CLOSE,
        title: title,
        caption: caption,
        isShow: isShow,
        onClick: this._hToggle,
        onClose: this._hClose,
        onAddToWatch: onAddToWatch
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordDef["default"], {
        style: TS.DESCR,
        isShow: isShow,
        config: config
      })]
    });
  };

  return Word;
}(_react.Component);

Word.defaultProps = {
  config: {}
};

var _default = (0, _withTheme["default"])(Word);

exports["default"] = _default;
//# sourceMappingURL=Word.js.map