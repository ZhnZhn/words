"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var S = {
  BT: {
    display: 'block',
    width: '100%',
    textAlign: 'left'
  },
  PANE: {
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
  ITEM: {
    color: '#80c040'
  }
};

var _renderOptions = function _renderOptions(options, currentItem, clItem, itemStyle, onSelect, isShow) {
  var _ref = currentItem || {},
      currentCaption = _ref.caption,
      currentValue = _ref.value;

  return options.map(function (item) {
    var _style = currentValue && item.value === currentValue || currentCaption && item.caption === currentCaption ? S.ITEM : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: clItem,
      style: (0, _extends2["default"])({}, S.BT, itemStyle, _style),
      onClick: onSelect.bind(null, item),
      children: item.caption
    }, item.caption);
  });
};

var OptionsPane = function OptionsPane(_ref2) {
  var isShow = _ref2.isShow,
      rootStyle = _ref2.rootStyle,
      options = _ref2.options,
      item = _ref2.item,
      clItem = _ref2.clItem,
      itemStyle = _ref2.itemStyle,
      onSelect = _ref2.onSelect,
      onClose = _ref2.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPane["default"], {
    style: rootStyle,
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide["default"], {
      isShow: isShow,
      style: (0, _extends2["default"])({}, S.PANE, rootStyle),
      children: _renderOptions(options, item, clItem, itemStyle, onSelect, isShow)
    })
  });
};

var _default = OptionsPane;
exports["default"] = _default;
//# sourceMappingURL=OptionsPane.js.map