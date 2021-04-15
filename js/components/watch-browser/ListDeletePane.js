"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var ListDeletePane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ListDeletePane, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    forActionType: PropTypes.string,
      inputStyle: PropTypes.object,
    btStyle: PropTypes.object,
      onRename: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  function ListDeletePane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

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

    _this._handleClear = function () {
      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }
    };

    _this._handleDelete = function () {
      var _this$props2 = _this.props,
          onDelete = _this$props2.onDelete,
          msgOnNotSelect = _this$props2.msgOnNotSelect,
          _this$selectGroupList = _this.selectGroupList.getValue(),
          captionGroup = _this$selectGroupList.captionGroup,
          captionList = _this$selectGroupList.captionList;

      if (captionGroup && captionList) {
        onDelete({
          captionGroup: captionGroup,
          captionList: captionList
        });
      } else {
        var msg = [];

        if (!captionGroup) {
          msg.push(msgOnNotSelect('Group'));
        }

        if (!captionList) {
          msg.push(msgOnNotSelect('List'));
        }

        _this.setState({
          validationMessages: msg
        });
      }
    };

    _this._crPrimaryBt = function (btStyle) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button.Primary, {
        style: btStyle,
        caption: "Delete",
        title: "Delete List",
        onClick: _this._handleDelete
      });
    };

    _this._ref = function (c) {
      return _this.selectGroupList = c;
    };

    _this.state = {
      groupOptions: props.store.getWatchGroups(),
      validationMessages: []
    };
    return _this;
  }

  var _proto = ListDeletePane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        store = _this$props3.store,
        inputStyle = _this$props3.inputStyle,
        btStyle = _this$props3.btStyle,
        onClose = _this$props3.onClose,
        _this$state = this.state,
        groupOptions = _this$state.groupOptions,
        validationMessages = _this$state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].FragmentSelectGroupList, {
        ref: this._ref,
        store: store,
        inputStyle: inputStyle,
        groupCaption: "In Group:",
        groupOptions: groupOptions,
        listCaption: "List:"
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

  return ListDeletePane;
}(_react.Component);

var _default = ListDeletePane;
exports["default"] = _default;
//# sourceMappingURL=ListDeletePane.js.map