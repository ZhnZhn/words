"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var BORDER_LEFT = 'border-left';
var DRAG_START_BORDER_LEFT = "4px solid #D64336";
var LONG_TOUCH = 1000;

var _getClientX = function _getClientX(ev) {
  var targetTouches = ev.targetTouches,
      changedTouches = ev.changedTouches;
  return targetTouches && targetTouches[0] ? targetTouches[0].clientX : changedTouches && changedTouches[0] ? changedTouches[0].clientX : 0;
};

var DndOnlyX =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DndOnlyX, _Component);

  /*
  static propTypes = {
    style: PropTypes.object,
      onDragEnd: PropTypes.func,
    onDragTouchEnd: PropTypes.func
  }
  */
  function DndOnlyX(props) {
    var _this;

    _this = _Component.call(this) || this;

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
    _this._dragStartStyle = _this._dragStartStyle.bind((0, _assertThisInitialized2["default"])(_this));
    _this._dragEndStyle = _this._dragEndStyle.bind((0, _assertThisInitialized2["default"])(_this));
    _this._dragStart = _this._dragStart.bind((0, _assertThisInitialized2["default"])(_this));
    _this._dragEnd = _this._dragEnd.bind((0, _assertThisInitialized2["default"])(_this));
    _this._startDragTouch = _this._startDragTouch.bind((0, _assertThisInitialized2["default"])(_this));
    _this._dragTouchStart = _this._dragTouchStart.bind((0, _assertThisInitialized2["default"])(_this));
    _this._dragTouchMove = _this._dragTouchMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this._dragTouchEnd = _this._dragTouchEnd.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = DndOnlyX.prototype;

  _proto._dragStartStyle = function _dragStartStyle(ev) {
    if (this._node) {
      this._node.style.removeProperty(BORDER_LEFT);
    }

    this._node = ev.currentTarget;

    this._node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
  };

  _proto._dragEndStyle = function _dragEndStyle() {
    this._node.style.removeProperty(BORDER_LEFT);

    this._node = null;
  };

  _proto._dragStart = function _dragStart(ev) {
    ev.persist();
    this.clientX = ev.clientX;

    this._dragStartStyle(ev);

    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.dropEffect = "move";
  };

  _proto._dragEnd = function _dragEnd(ev) {
    ev.preventDefault();
    ev.persist();

    this._dragEndStyle();

    this.props.onDragEnd(Math.abs(this.clientX - ev.clientX));
  };

  _proto._preventDefault = function _preventDefault(ev) {
    ev.preventDefault();
  };

  _proto._dragTouchStartStyle = function _dragTouchStartStyle(node) {
    node.style.setProperty(BORDER_LEFT, DRAG_START_BORDER_LEFT);
  };

  _proto._startDragTouch = function _startDragTouch(node) {
    this._isDragTouch = true;

    this._dragTouchStartStyle(node);
  };

  _proto._dragTouchStart = function _dragTouchStart(ev) {
    var _this2 = this;

    var node = ev.currentTarget;
    this._dragTouchId = setTimeout(function () {
      return _this2._startDragTouch(node);
    }, LONG_TOUCH);
  };

  _proto._dragTouchMoveStyle = function _dragTouchMoveStyle(node, dX) {
    var _opacity = 1 - 0.5 * Math.abs(dX) / 60;

    node.style.right = dX + 'px';
    node.style.opacity = _opacity;
  };

  _proto._dragTouchMove = function _dragTouchMove(ev) {
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
  };

  _proto._dragTouchEndStyle = function _dragTouchEndStyle(node, isBack) {
    node.style.removeProperty(BORDER_LEFT);

    if (isBack) {
      node.style.right = '0px';
      node.style.opacity = 1;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        children = _this$props.children;
    return _react["default"].createElement("div", {
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
    }, children);
  };

  return DndOnlyX;
}(_react.Component);

var _default = DndOnlyX;
exports["default"] = _default;
//# sourceMappingURL=DndOnlyX.js.map