"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var GroupAddPane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(GroupAddPane, _Component);

  function GroupAddPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      validationMessages: []
    };

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType;

      if (actionType === actionCompleted && data.forActionType === forActionType) {
        _this._handleClear();
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages
        });
      }
    };

    _this._handleClear = function () {
      _this.inputText.setValue('');

      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }
    };

    _this._handleCreate = function () {
      var _this$props2 = _this.props,
          onCreate = _this$props2.onCreate,
          msgOnIsEmptyName = _this$props2.msgOnIsEmptyName,
          caption = _this.inputText.getValue();

      if (caption) {
        onCreate({
          caption: caption
        });
      } else {
        _this.inputText.setValue('');

        _this.setState({
          validationMessages: [msgOnIsEmptyName('Group')]
        });
      }
    };

    _this._crPrimaryBt = function (btStyle) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button.Primary, {
        style: btStyle,
        caption: "Create",
        title: "Create New Group",
        onClick: _this._handleCreate
      });
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    return _this;
  }

  var _proto = GroupAddPane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        inputStyle = _this$props3.inputStyle,
        btStyle = _this$props3.btStyle,
        onClose = _this$props3.onClose,
        validationMessages = this.state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputText, {
        ref: this._refInputText,
        caption: "Group:",
        inputStyle: inputStyle
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
        validationMessages: validationMessages
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowButtons, {
        btStyle: btStyle,
        Primary: this._crPrimaryBt(btStyle),
        onClear: this._handleClear,
        onClose: onClose
      })]
    });
  };

  return GroupAddPane;
}(_react.Component);

var _default = GroupAddPane;
exports["default"] = _default;
//# sourceMappingURL=GroupAddPane.js.map