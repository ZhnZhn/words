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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalPane = require('../zhn-moleculs/ModalPane');

var _ModalPane2 = _interopRequireDefault(_ModalPane);

var _Atoms = require('../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaneTopics = function (_Component) {
  (0, _inherits3.default)(PaneTopics, _Component);

  function PaneTopics() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PaneTopics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = PaneTopics.__proto__ || Object.getPrototypeOf(PaneTopics)).call.apply(_ref2, [this].concat(args))), _this), _this._ref = function (n) {
      return _this.firstItem = n;
    }, _this._renderItems = function (_ref3) {
      var clItem = _ref3.clItem,
          items = _ref3.items,
          onClose = _ref3.onClose;

      return items.map(function (item, index) {
        var _ref = index === 0 ? _this._ref : undefined;
        return _react2.default.createElement(_Atoms2.default.MenuItem, (0, _extends3.default)({
          key: item.caption,
          ref: _ref,
          className: clItem
        }, item, {
          onClose: onClose
        }));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PaneTopics, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props !== prevProps) {
        var isShow = this.props.isShow;

        if (isShow && !prevProps.isShow) {
          this.prevFocused = document.activeElement;
          this.firstItem.focus();
        } else if (!isShow && prevProps.isShow) {
          if (this.prevFocused) {
            this.prevFocused.focus();
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          paneStyle = _props.paneStyle,
          isShow = _props.isShow,
          clItem = _props.clItem,
          items = _props.items,
          onClose = _props.onClose;


      return _react2.default.createElement(
        _ModalPane2.default,
        {
          isShow: isShow,
          onClose: onClose
        },
        _react2.default.createElement(
          _Atoms2.default.ShowHide,
          {
            className: className,
            style: paneStyle,
            isShow: isShow
          },
          this._renderItems({ clItem: clItem, items: items, onClose: onClose })
        )
      );
    }
  }]);
  return PaneTopics;
}(_react.Component);

exports.default = PaneTopics;
//# sourceMappingURL=PaneTopics.js.map