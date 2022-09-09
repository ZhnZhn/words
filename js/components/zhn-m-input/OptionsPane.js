"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _jsxRuntime = require("react/jsx-runtime");

var S_BT = {
  display: 'block',
  width: '100%',
  textAlign: 'left'
},
    S_PANE = {
  position: 'absolute',
  top: 12,
  zIndex: '20',
  width: '100%',
  paddingTop: 12,
  paddingBottom: 12,
  backgroundColor: 'rgb(77, 77, 77)',
  borderRadius: 2,
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
},
    S_ITEM = {
  color: '#80c040'
};

var OptionsStack = function OptionsStack(_ref) {
  var options = _ref.options,
      currentCaption = _ref.currentCaption,
      currentValue = _ref.currentValue,
      clItem = _ref.clItem,
      itemStyle = _ref.itemStyle,
      onSelect = _ref.onSelect;
  return (options || []).map(function (item) {
    var _ref2 = item || {},
        caption = _ref2.caption,
        value = _ref2.value,
        _style = value === currentValue && caption === currentCaption ? S_ITEM : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: clItem,
      style: (0, _extends2["default"])({}, S_BT, itemStyle, _style),
      onClick: onSelect.bind(null, item),
      children: caption
    }, caption);
  });
};

var OptionsPane = function OptionsPane(_ref3) {
  var isShow = _ref3.isShow,
      rootStyle = _ref3.rootStyle,
      options = _ref3.options,
      item = _ref3.item,
      clItem = _ref3.clItem,
      itemStyle = _ref3.itemStyle,
      onSelect = _ref3.onSelect,
      onClose = _ref3.onClose;

  var _ref4 = item || {},
      caption = _ref4.caption,
      value = _ref4.value;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPane["default"], {
    style: rootStyle,
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide["default"], {
      isShow: isShow,
      style: (0, _extends2["default"])({}, S_PANE, rootStyle),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(OptionsStack, {
        options: options,
        currentCaption: caption,
        currentValue: value,
        clItem: clItem,
        itemStyle: itemStyle,
        onSelect: onSelect
      })
    })
  });
};

var _default = OptionsPane;
exports["default"] = _default;
//# sourceMappingURL=OptionsPane.js.map