"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

//import PropTypes from "prop-types";
var GroupEditPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(GroupEditPane, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    actionFailed: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnIsEmptyName: PropTypes.func,
    msgOnNotSelect: PropTypes.func,
      inputStyle: PropTypes.object,
    btStyle: PropTypes.object,
      onRename: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  function GroupEditPane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType,
          store = _this$props.store;

      if (actionType === actionCompleted) {
        if (data.forActionType === forActionType) {
          _this._handleClear();
        }

        _this.setState({
          groupOptions: store.getWatchGroups()
        });
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages
        });
      }
    };

    _this._handleSelectGroup = function (item) {
      if (item && item.caption) {
        _this.captionFrom = item.caption;
      } else {
        _this.captionFrom = null;
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

    _this._handleRename = function () {
      var _this$props2 = _this.props,
          onRename = _this$props2.onRename,
          msgOnNotSelect = _this$props2.msgOnNotSelect,
          msgOnIsEmptyName = _this$props2.msgOnIsEmptyName,
          captionTo = _this.inputText.getValue();

      if (captionTo && _this.captionFrom) {
        onRename({
          captionFrom: _this.captionFrom,
          captionTo: captionTo
        });
      } else {
        var msg = [];

        if (!_this.captionFrom) {
          msg.push(msgOnNotSelect('Group From'));
        }

        if (!captionTo) {
          msg.push(msgOnIsEmptyName('Group To'));
        }

        _this.setState({
          validationMessages: msg
        });
      }
    };

    _this._crPrimaryBt = function (btStyle) {
      return _react["default"].createElement(_Atoms["default"].Button.Primary, {
        style: btStyle,
        caption: "Edit",
        title: "Edit Group Name",
        onClick: _this._handleRename
      });
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    _this.captionFrom = null;
    _this.state = {
      groupOptions: props.store.getWatchGroups(),
      validationMessages: []
    };
    return _this;
  }

  var _proto = GroupEditPane.prototype;

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
    return _react["default"].createElement("div", null, _react["default"].createElement(_Atoms["default"].RowInputSelect, {
      caption: "Group From:",
      inputStyle: inputStyle,
      options: groupOptions,
      onSelect: this._handleSelectGroup
    }), _react["default"].createElement(_Atoms["default"].RowInputText, {
      ref: this._refInputText,
      caption: "Group To:",
      inputStyle: inputStyle
    }), _react["default"].createElement(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), _react["default"].createElement(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      Primary: this._crPrimaryBt(btStyle),
      onClear: this._handleClear,
      onClose: onClose
    }));
  };

  return GroupEditPane;
}(_react.Component);

var _default = GroupEditPane;
exports["default"] = _default;
//# sourceMappingURL=GroupEditPane.js.map