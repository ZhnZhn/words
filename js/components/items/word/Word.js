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

var _class, _temp;

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
    marginBottom: '5px',
    marginRight: '25px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: '2px'
  },
  LEFT_LINE: {
    position: 'absolute',
    top: '0px',
    left: 'Opx',
    width: '3px',
    height: '8px',
    backgroundColor: '#3F51B5'
  },
  HEADER: {
    backgroundColor: '#404040',
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    width: '100%',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display: 'inline-block',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingRight: '32px',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b'
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: '8px',
    right: '0px'
  }
};

var Word = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Word, _Component);

  function Word(props) {
    (0, _classCallCheck3.default)(this, Word);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Word.__proto__ || Object.getPrototypeOf(Word)).call(this));

    _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._handleClose = function () {
      var _this$props = _this.props,
          onCloseItem = _this$props.onCloseItem,
          config = _this$props.config;

      onCloseItem(config);
    };

    _this._handleHide = function () {
      _this.headerComp.focus();
      _this.setState({ isShow: false });
    };

    _this._onDragEnd = function (dX) {
      var _this$props2 = _this.props,
          onRemoveUnder = _this$props2.onRemoveUnder,
          config = _this$props2.config;

      if (dX > D_REMOVE_UNDER) {
        onRemoveUnder(config);
      } else if (dX > D_REMOVE_ITEM) {
        _this._handleClose();
      }
    };

    _this._onDragTouchEnd = function (dX) {
      if (dX > D_REMOVE_UNDER) {
        _this._handleClose();
        return false;
      } else {
        return true;
      }
    };

    _this._refItemHeader = function (comp) {
      _this.headerComp = comp;
    };

    _this.state = {
      isShow: false
    };
    return _this;
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
          ref: this._refItemHeader,
          className: CL_ITEM_HEADER,
          style: (0, _extends3.default)({}, _headerStyle, TS.HEADER),
          captionStyle: _captionStyle,
          svgCloseStyle: S.SVG_CLOSE,
          title: title,
          caption: caption,
          isShow: isShow,
          onClick: this._handleToggle,
          onClose: this._handleClose,
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
}, _temp);
exports.default = (0, _withTheme2.default)(Word);
//# sourceMappingURL=Word.js.map