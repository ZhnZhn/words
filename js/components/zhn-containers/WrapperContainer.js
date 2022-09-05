"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _RouterModal = _interopRequireDefault(require("../dialogs/RouterModal"));

var _ModalContainer = _interopRequireDefault(require("./ModalContainer"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var DialogsStack = function DialogsStack(_ref) {
  var store = _ref.store,
      shows = _ref.shows,
      data = _ref.data,
      dialogs = _ref.dialogs,
      onClose = _ref.onClose;
  return dialogs.map(function (_ref2) {
    var type = _ref2.type,
        comp = _ref2.comp;
    return /*#__PURE__*/(0, _react.createElement)(comp, {
      key: type,
      isShow: shows[type],
      data: data[type],
      onClose: onClose.bind(null, type),
      store: store
    });
  });
};

var WrapperContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WrapperContainer, _Component);

  function WrapperContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    };

    _this._onStore = function (actionType, option) {
      var SHOW_ACTION = _this.props.SHOW_ACTION;

      if (actionType === SHOW_ACTION) {
        var type = option.modalDialogType,
            _this$state = _this.state,
            inits = _this$state.inits,
            shows = _this$state.shows,
            data = _this$state.data,
            dialogs = _this$state.dialogs;
        data[type] = option;
        shows[type] = true;

        if (inits[type]) {
          _this.setState({
            isShow: true,
            currentDialog: type,
            shows: shows,
            data: data
          });
        } else {
          _RouterModal["default"].getDialog(type).then(function (comp) {
            if (comp) {
              dialogs.push({
                type: type,
                comp: comp
              });
              inits[type] = true;

              _this.setState({
                isShow: true,
                currentDialog: type,
                shows: shows,
                data: data,
                dialogs: dialogs
              });
            }
          });
        }
      }
    };

    _this._hClose = function (type) {
      _this.state.shows[type] = false;

      _this.setState({
        isShow: false,
        currentDialog: null,
        shows: _this.state.shows
      });
    };

    return _this;
  }

  var _proto = WrapperContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var store = this.props.store,
        _this$state2 = this.state,
        isShow = _this$state2.isShow,
        currentDialog = _this$state2.currentDialog,
        shows = _this$state2.shows,
        data = _this$state2.data,
        dialogs = _this$state2.dialogs;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalContainer["default"], {
      isShow: isShow,
      onClose: this._hClose.bind(null, currentDialog),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogsStack, {
        store: store,
        shows: shows,
        data: data,
        dialogs: dialogs,
        onClose: this._hClose
      })
    });
  };

  return WrapperContainer;
}(_react.Component);

var _default = WrapperContainer;
exports["default"] = _default;
//# sourceMappingURL=WrapperContainer.js.map