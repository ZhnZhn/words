"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

//import PropTypes from "prop-types";
var GroupDeletePane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(GroupDeletePane, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnNotSelect: PropTypes.func,
      inputStyle: PropTypes.object,
    btStyle: PropTypes.object,
      onDelete: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  function GroupDeletePane(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          forActionType = _this$props.forActionType,
          store = _this$props.store;

      if (actionType === actionCompleted) {
        if (data.forActionType === forActionType) {
          _this._handleClear();
        }

        _this.setState({
          groupOptions: store.getWatchGroups()
        });
      }
    };

    _this._handleSelectGroup = function (item) {
      if (item && item.caption) {
        _this.caption = item.caption;
      } else {
        _this.caption = null;
      }
    };

    _this._handleClear = function () {
      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }
    };

    _this._handleDeleteGroup = function () {
      var _this$props2 = _this.props,
          onDelete = _this$props2.onDelete,
          msgOnNotSelect = _this$props2.msgOnNotSelect;

      if (_this.caption) {
        onDelete({
          caption: _this.caption
        });
      } else {
        _this.setState({
          validationMessages: [msgOnNotSelect('Group')]
        });
      }
    };

    _this._crPrimaryBt = function (btStyle) {
      return _react["default"].createElement(_Atoms["default"].Button.Primary, {
        style: btStyle,
        caption: "Delete",
        title: "Delete Group",
        onClick: _this._handleDeleteGroup
      });
    };

    _this.caption = null;
    _this.state = {
      groupOptions: props.store.getWatchGroups(),
      validationMessages: []
    };
    return _this;
  }

  var _proto = GroupDeletePane.prototype;

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
      inputStyle: inputStyle,
      caption: "Group:",
      options: groupOptions,
      onSelect: this._handleSelectGroup
    }), _react["default"].createElement(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    }), _react["default"].createElement(_Atoms["default"].RowButtons, {
      btStyle: btStyle,
      Primary: this._crPrimaryBt(btStyle),
      withoutClear: true,
      onClose: onClose
    }));
  };

  return GroupDeletePane;
}(_react.Component);

var _default = GroupDeletePane;
exports["default"] = _default;
//# sourceMappingURL=GroupDeletePane.js.map