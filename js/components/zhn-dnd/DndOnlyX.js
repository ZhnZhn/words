'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_LEFT = 'border-left';
var DRAG_START_BORDER_LEFT = "4px solid #D64336";

var LONG_TOUCH = 1000;

var _getClientX = function _getClientX(ev) {
  var targetTouches = ev.targetTouches,
      changedTouches = ev.changedTouches;

  return targetTouches && targetTouches[0] ? targetTouches[0].clientX : changedTouches && changedTouches[0] ? changedTouches[0].clientX : 0;
};

var DndOnlyX = function (_Component) {
  (0, _inherits3.default)(DndOnlyX, _Component);

  /*
  static propTypes = {
    style: PropTypes.object,
      onDragEnd: PropTypes.func,
    onDragTouchEnd: PropTypes.func
  }
  */

  function DndOnlyX(props) {
    (0, _classCallCheck3.default)(this, DndOnlyX);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DndOnlyX.__proto__ || Object.getPrototypeOf(DndOnlyX)).call(this));

    _this._dragTouchEnd = function (ev) {
      if (_this._isDragTouch) {
        if (_this._isMoveStart) {
          ev.preventDefault();
          ev.persist();
          var _clientX = _getClientX(ev),
              _dX = Math.abs(_this.clientX - _clientX);
          if (_this.props.onDragTouchEnd(_dX)) {
            _this._dragTouchEndStyle(ev.currentTarget, true);
          }
          _this._isMoveStart = false;
        } else {
          _this._dragTouchEndStyle(ev.currentTarget);
        }
        _this._isDragTouch = false;
      } else {
        clearTimeout(_this._dragTouchId);
      }
    };

    _this.clientX = 0;
    _this._isDragTouch = false;

    _this._dragStartStyle = _this._dragStartStyle.bind(_this);
    _this._dragEndStyle = _this._dragEndStyle.bind(_this);
    _this._dragStart = _this._dragStart.bind(_this);
    _this._dragEnd = _this._dragEnd.bind(_this);

    _this._startDragTouch = _this._startDragTouch.bind(_this);
    _this._dragTouchStart = _this._dragTouchStart.bind(_this);
    _this._dragTouchMove = _this._dragTouchMove.bind(_this);
    _this._dragTouchEnd = _this._dragTouchEnd.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(DndOnlyX, [{
    key: '_dragStartStyle',
    value: function _dragStartStyle(ev) {
      if (this._node) {
        this._node.style.removeProperty(BORDER_LEFT);
      }
      this._node = ev.currentTarget;
      this._node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
    }
  }, {
    key: '_dragEndStyle',
    value: function _dragEndStyle() {
      this._node.style.removeProperty(BORDER_LEFT);
      this._node = null;
    }
  }, {
    key: '_dragStart',
    value: function _dragStart(ev) {
      ev.persist();
      this.clientX = ev.clientX;
      this._dragStartStyle(ev);
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.dropEffect = "move";
    }
  }, {
    key: '_dragEnd',
    value: function _dragEnd(ev) {
      ev.preventDefault();
      ev.persist();
      this._dragEndStyle();
      this.props.onDragEnd(Math.abs(this.clientX - ev.clientX));
    }
  }, {
    key: '_preventDefault',
    value: function _preventDefault(ev) {
      ev.preventDefault();
    }
  }, {
    key: '_dragTouchStartStyle',
    value: function _dragTouchStartStyle(node) {
      node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
    }
  }, {
    key: '_startDragTouch',
    value: function _startDragTouch(node) {
      this._isDragTouch = true;
      this._dragTouchStartStyle(node);
    }
  }, {
    key: '_dragTouchStart',
    value: function _dragTouchStart(ev) {
      var _this2 = this;

      var node = ev.currentTarget;
      this._dragTouchId = setTimeout(function () {
        return _this2._startDragTouch(node);
      }, LONG_TOUCH);
    }
  }, {
    key: '_dragTouchMoveStyle',
    value: function _dragTouchMoveStyle(node, dX) {
      var _opacity = 1 - 0.5 * Math.abs(dX) / 60;
      node.style.right = dX + 'px';
      node.style.opacity = _opacity;
    }
  }, {
    key: '_dragTouchMove',
    value: function _dragTouchMove(ev) {
      if (this._isDragTouch) {
        ev.persist();
        var _clientX = _getClientX(ev);
        if (_clientX) {
          if (!this._isMoveStart) {
            this.clientX = this._startMoveX = _clientX;
            this._isMoveStart = true;
          } else {
            var _dX = this._startMoveX - _clientX;
            this._dragTouchMoveStyle(ev.currentTarget, _dX);
          }
        }
      }
    }
  }, {
    key: '_dragTouchEndStyle',
    value: function _dragTouchEndStyle(node, isBack) {
      node.style.removeProperty(BORDER_LEFT);
      if (isBack) {
        node.style.right = '0px';
        node.style.opacity = 1;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        {
          style: style,
          draggable: true,
          onDragStart: this._dragStart,
          onDragEnd: this._dragEnd,

          onDrop: this._preventDefault,
          onDragOver: this._preventDefault,
          onDragEnter: this._preventDefault,
          onDragLeave: this._preventDefault,

          onTouchStart: this._dragTouchStart,
          onTouchMove: this._dragTouchMove,
          onTouchEnd: this._dragTouchEnd
        },
        children
      );
    }
  }]);
  return DndOnlyX;
}(_react.Component);

exports.default = DndOnlyX;
//# sourceMappingURL=DndOnlyX.js.map