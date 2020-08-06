"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));

var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-select__div',
  DIV_VALUE: 'm-select__div__value',
  DIV_BT: 'm-select__div__bt',
  INPUT_LINE: 'm-select__line',
  ITEM: 'm-select__item'
};

var InputSelect = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputSelect, _Component);

  function InputSelect(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleOpen = function () {
      _this.setState({
        isShow: true
      });
    };

    _this._handleClose = function () {
      _this.setState({
        isShow: false
      });
    };

    _this._handleSelect = function (item, event) {
      event.stopPropagation();

      _this.props.onSelect(item);

      _this.setState({
        isShow: false,
        item: item
      });
    };

    _this.state = {
      isShow: false,
      initialOptions: props.options,
      item: props.initItem
    };
    return _this;
  }

  InputSelect.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.options !== state.initialOptions) {
      return {
        isShow: false,
        initialOptions: props.options,
        item: {
          caption: '',
          value: ''
        }
      };
    }
  };

  var _proto = InputSelect.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        caption = _this$props.caption,
        options = _this$props.options,
        TS = _this$props.styleConfig,
        _this$state = this.state,
        isShow = _this$state.isShow,
        item = _this$state.item;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: CL.SELECT,
      style: TS.ROOT,
      onClick: this._handleOpen
    }, /*#__PURE__*/_react["default"].createElement(_OptionsPane["default"], {
      rootStyle: TS.MODAL_PANE,
      isShow: isShow,
      item: item,
      options: options,
      clItem: TS.CL_ITEM || CL.ITEM,
      itemStyle: TS.ITEM,
      onSelect: this._handleSelect,
      onClose: this._handleClose
    }), /*#__PURE__*/_react["default"].createElement("label", {
      className: CL.LABEL
    }, caption), /*#__PURE__*/_react["default"].createElement("div", {
      className: CL.DIV
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: CL.DIV_VALUE
    }, item.caption), /*#__PURE__*/_react["default"].createElement("button", {
      className: CL.DIV_BT,
      tabIndex: "0"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ArrowCell["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
      className: CL.INPUT_LINE
    })));
  };

  return InputSelect;
}(_react.Component);

InputSelect.defaultProps = {
  initItem: {
    caption: '',
    value: ''
  },
  styleConfig: {},
  onSelect: function onSelect() {}
};
var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map