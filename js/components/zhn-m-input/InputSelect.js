"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_SELECT = 'm-select',
    CL_LABEL = CL_SELECT + "__label",
    CL_DIV = CL_SELECT + "__div",
    CL_DIV_VALUE = CL_DIV + "__value",
    CL_DIV_BT = CL_DIV + "__bt",
    CL_INPUT_LINE = CL_SELECT + "__line",
    CL_ITEM = CL_SELECT + "__item";

var FN_NOOP = function FN_NOOP() {},
    DF_STYLE_CONFIG = {},
    DF_INITIAL_ITEM = {
  caption: '',
  value: ''
};

var InputSelect = function InputSelect(_ref) {
  var caption = _ref.caption,
      _ref$initItem = _ref.initItem,
      initItem = _ref$initItem === void 0 ? DF_INITIAL_ITEM : _ref$initItem,
      options = _ref.options,
      _ref$styleConfig = _ref.styleConfig,
      TS = _ref$styleConfig === void 0 ? DF_STYLE_CONFIG : _ref$styleConfig,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? FN_NOOP : _ref$onSelect;

  var _useState = (0, _uiApi.useState)(initItem),
      item = _useState[0],
      setItem = _useState[1],
      _useBool = (0, _useBool2["default"])(),
      isShow = _useBool[0],
      _hOpen = _useBool[1],
      _hClose = _useBool[2],
      _hSelect = (0, _uiApi.useCallback)(function (item, event) {
    event.stopPropagation();
    onSelect(item);

    _hClose();

    setItem(item);
  }, [onSelect]); // _hClose

  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    _hClose();

    setItem(initItem);
  }, [options]); // _hClose, initItem

  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: CL_SELECT,
    style: TS.ROOT,
    onClick: _hOpen,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsPane["default"], {
      rootStyle: TS.MODAL_PANE,
      isShow: isShow,
      item: item,
      options: options,
      clItem: TS.CL_ITEM || CL_ITEM,
      itemStyle: TS.ITEM,
      onSelect: _hSelect,
      onClose: _hClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_DIV_VALUE,
        children: item.caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: CL_DIV_BT,
        tabIndex: "0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell["default"], {})
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE
      })]
    })]
  });
};

var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map