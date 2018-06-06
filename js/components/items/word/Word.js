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

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Word = require('./Word.Style');

var _Word2 = _interopRequireDefault(_Word);

var _ItemHeader = require('../ItemHeader');

var _ItemHeader2 = _interopRequireDefault(_ItemHeader);

var _WordDef = require('./WordDef');

var _WordDef2 = _interopRequireDefault(_WordDef);

var _withDnDStyle = require('../decorators/withDnDStyle');

var _withDnDStyle2 = _interopRequireDefault(_withDnDStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LONG_TOUCH = 1000;

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

var _getClientX = function _getClientX(ev) {
  var targetTouches = ev.targetTouches,
      changedTouches = ev.changedTouches;

  return targetTouches && targetTouches[0] ? targetTouches[0].clientX : changedTouches && changedTouches[0] ? changedTouches[0].clientX : 0;
};

//const BORDER_LEFT = 'border-left';
//const DRAG_START_BORDER_LEFT = "4px solid #D64336";

var Word = (0, _withDnDStyle2.default)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Word, _Component);

  function Word(props) {
    (0, _classCallCheck3.default)(this, Word);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Word.__proto__ || Object.getPrototypeOf(Word)).call(this));

    _this._dragStart = function (ev) {
      ev.persist();
      _this.clientX = ev.clientX;
      _this.dragStartWithDnDStyle(ev);
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.dropEffect = "move";
    };

    _this._dragEnd = function (ev) {
      ev.preventDefault();
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _deltaX = Math.abs(_this.clientX - ev.clientX),
          _this$props = _this.props,
          config = _this$props.config,
          onRemoveUnder = _this$props.onRemoveUnder;

      if (_deltaX > D_REMOVE_UNDER) {
        onRemoveUnder(config);
      } else if (_deltaX > D_REMOVE_ITEM) {
        _this._handleClose();
      }
    };

    _this._startDragTouch = function (node) {
      _this._isDragTouch = true;
      _this.dragTouchStartWithDnDStyle(node);
    };

    _this._dragTouchStart = function (ev) {
      var node = ev.currentTarget;
      _this._dragTouchId = setTimeout(function () {
        return _this._startDragTouch(node);
      }, LONG_TOUCH);
    };

    _this._dragTouchMove = function (ev) {
      if (_this._isDragTouch) {
        ev.persist();
        var _clientX = _getClientX(ev);
        if (_clientX) {
          if (!_this._isMoveStart) {
            _this.clientX = _this._startMoveX = _clientX;
            _this._isMoveStart = true;
          } else {
            var _dX = _this._startMoveX - _clientX;
            _this.dragTouchMoveWithDnDStyle(ev.currentTarget, _dX);
          }
        }
      }
    };

    _this._dragTouchEnd = function (ev) {
      if (_this._isDragTouch) {
        if (_this._isMoveStart) {
          ev.preventDefault();
          ev.persist();
          var _clientX = _getClientX(ev),
              _dX = Math.abs(_this.clientX - _clientX);
          if (_dX > D_REMOVE_UNDER) {
            _this._handleClose();
          } else {
            _this.dragTouchEndWithDnDStyle(ev.currentTarget, true);
          }
          _this._isMoveStart = false;
        } else {
          _this.dragTouchEndWithDnDStyle(ev.currentTarget);
        }
        _this._isDragTouch = false;
      } else {
        clearTimeout(_this._dragTouchId);
      }
    };

    _this._handleToggle = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._handleClose = function () {
      var _this$props2 = _this.props,
          onCloseItem = _this$props2.onCloseItem,
          config = _this$props2.config;

      onCloseItem(config);
    };

    _this._handleHide = function () {
      _this.headerComp.focus();
      _this.setState({ isShow: false });
    };

    _this._refItemHeader = function (comp) {
      _this.headerComp = comp;
    };

    _this.clientX = 0;
    _this._isDragTouch = false;
    _this.state = {
      isShow: false
    };
    return _this;
  }

  (0, _createClass3.default)(Word, [{
    key: '_preventDefault',
    value: function _preventDefault(ev) {
      ev.preventDefault();
    }
  }, {
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
        'div',
        {
          style: S.ROOT,
          draggable: true,

          onTouchStart: this._dragTouchStart,

          onDragStart: this._dragStart,
          onTouchMove: this._dragTouchMove,
          onDragEnd: this._dragEnd,
          onTouchEnd: this._dragTouchEnd,

          onDrop: this._preventDefault,
          onDragOver: this._preventDefault,
          onDragEnter: this._preventDefault,
          onDragLeave: this._preventDefault
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
}(_react.Component), _class2.defaultProps = {
  config: {}
}, _temp)) || _class;

exports.default = (0, _withTheme2.default)(Word);
//# sourceMappingURL=Word.js.map