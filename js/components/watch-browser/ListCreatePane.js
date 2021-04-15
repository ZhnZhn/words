"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var ListCreatePane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ListCreatePane, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    actionFailed: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnNotSelect: PropTypes.func,
    msgOnIsEmptyName: PropTypes.func,
      inputStyle: PropTypes.object,
    btStyle: PropTypes.object,
      onCreate: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  function ListCreatePane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType,
          store = _this$props.store;

      if (actionType === actionCompleted) {
        var isUpdateGroup = true;

        if (data.forActionType === forActionType) {
          _this._handleClear();

          isUpdateGroup = false;
        }

        _this.setState({
          groupOptions: store.getWatchGroups(),
          isUpdateGroup: isUpdateGroup
        });
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages,
          isUpdateGroup: false
        });
      }
    };

    _this._handleSelectGroup = function (item) {
      if (item && item.caption) {
        _this.captionGroup = item.caption;
      } else {
        _this.captionGroup = null;
      }
    };

    _this._handleClear = function () {
      _this.inputText.setValue('');

      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: [],
          isUpdateGroup: false
        });
      }
    };

    _this._handleCreate = function () {
      var _this$props2 = _this.props,
          onCreate = _this$props2.onCreate,
          msgOnNotSelect = _this$props2.msgOnNotSelect,
          msgOnIsEmptyName = _this$props2.msgOnIsEmptyName,
          captionList = _this.inputText.getValue();

      if (_this.captionGroup && captionList) {
        onCreate({
          captionGroup: _this.captionGroup,
          captionList: captionList
        });
      } else {
        var msg = [];

        if (!_this.captionGroup) {
          msg.push(msgOnNotSelect('In Group'));
        }

        if (!captionList) {
          msg.push(msgOnIsEmptyName('List'));
        }

        _this.setState({
          validationMessages: msg,
          isUpdateGroup: false
        });
      }
    };

    _this._crPrimaryBt = function (btStyle) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button.Primary, {
        style: btStyle,
        caption: "Create",
        title: "Create New List",
        onClick: _this._handleCreate
      });
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    _this.captionGroup = null;
    _this.state = {
      groupOptions: props.store.getWatchGroups(),
      isUpdateGroup: false,
      validationMessages: []
    };
    return _this;
  }

  var _proto = ListCreatePane.prototype;

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
        _this$state = this.state,
        groupOptions = _this$state.groupOptions,
        validationMessages = _this$state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputSelect, {
        inputStyle: inputStyle,
        caption: "In Group:",
        options: groupOptions,
        onSelect: this._handleSelectGroup
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].RowInputText, {
        ref: this._refInputText,
        inputStyle: inputStyle,
        caption: "List:"
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

  return ListCreatePane;
}(_react.Component);

var _default = ListCreatePane;
exports["default"] = _default;
//# sourceMappingURL=ListCreatePane.js.map