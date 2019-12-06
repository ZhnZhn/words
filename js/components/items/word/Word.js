'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Word = require('./Word.Style');

var _Word2 = _interopRequireDefault(_Word);

var _DndOnlyX = require('../../zhn-dnd/DndOnlyX');

var _DndOnlyX2 = _interopRequireDefault(_DndOnlyX);

var _ItemHeader = require('../ItemHeader');

var _ItemHeader2 = _interopRequireDefault(_ItemHeader);

var _WordDef = require('./WordDef');

var _WordDef2 = _interopRequireDefault(_WordDef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    backgroundColor: '#404040',
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 32,
    paddingBottom: 16,
    width: '100%',
    lineHeight: 1.5,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
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

var Word = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Word, _Component);

  function Word() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Word);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Word.__proto__ || Object.getPrototypeOf(Word)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: false
    }, _this._hToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    }, _this._hClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          config = _this$props.config;

      onCloseItem(config);
    }, _this._onDragEnd = function (dX) {
      var _this$props2 = _this.props,
          onRemoveUnder = _this$props2.onRemoveUnder,
          config = _this$props2.config;

      if (dX > D_REMOVE_UNDER) {
        onRemoveUnder(config);
      } else if (dX > D_REMOVE_ITEM) {
        _this._hClose();
      }
    }, _this._onDragTouchEnd = function (dX) {
      if (dX > D_REMOVE_UNDER) {
        _this._hClose();
        return false;
      } else {
        return true;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Word, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          theme = _props.theme,
          onAddToWatch = _props.onAddToWatch,
          title = config.title,
          caption = config.caption,
          TS = theme.createStyle(_Word2.default),
          isShow = this.state.isShow,
          _headerStyle = isShow ? (0, _extends3.default)({}, S.HEADER, S.HEADER_OPEN) : S.HEADER,
          _captionStyle = isShow ? (0, _extends3.default)({}, S.CAPTION, S.CAPTION_OPEN) : S.CAPTION;

      return _react2.default.createElement(
        _DndOnlyX2.default,
        {
          style: S.ROOT,
          onDragEnd: this._onDragEnd,
          onDragTouchEnd: this._onDragTouchEnd
        },
        _react2.default.createElement(_ItemHeader2.default, {
          className: CL_ITEM_HEADER,
          style: (0, _extends3.default)({}, _headerStyle, TS.HEADER),
          captionStyle: _captionStyle,
          svgCloseStyle: S.SVG_CLOSE,
          title: title,
          caption: caption,
          isShow: isShow,
          onClick: this._hToggle,
          onClose: this._hClose,
          onAddToWatch: onAddToWatch
        }),
        _react2.default.createElement(_WordDef2.default, {
          style: TS.DESCR,
          isShow: isShow,
          config: config
        })
      );
    }
  }]);
  return Word;
}(_react.Component), _class.defaultProps = {
  config: {}
}, _temp2);
exports.default = (0, _withTheme2.default)(Word);
//# sourceMappingURL=Word.js.map