"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _OptionFn = require("./OptionFn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SELECT = 'm-select',
  CL_CAPTION = `${CL_SELECT}__caption`,
  CL_DIV = `${CL_SELECT}__div`,
  CL_DIV_VALUE = `${CL_DIV}__value`,
  CL_DIV_BT = `${CL_DIV}__bt`,
  CL_INPUT_LINE = `${CL_SELECT}__line`,
  CL_SELECT_OPTIONS = `${CL_SELECT}__options with-scroll`,
  CL_ITEM = `${CL_SELECT}__item`,
  DF_CAPTION = 'Item',
  DF_INIT_ITEM = {
    caption: void 0,
    value: void 0
  };
const InputSelect = _ref => {
  let {
    id,
    initItem,
    caption,
    options,
    style,
    onSelect
  } = _ref;
  const _listboxId = (0, _uiApi.useId)(),
    _refBtCombobox = (0, _uiApi.useRef)(),
    [item, setItem] = (0, _uiApi.useState)(initItem || DF_INIT_ITEM),
    [isShowOptions, showOptions, hideOptions] = (0, _useBool.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCloseOptions = (0, _uiApi.useMemo)(() => () => {
      hideOptions();
      (0, _uiApi.focusRefElement)(_refBtCombobox);
    }, [])
    // hideOptions, _refBtCombobox
    ,
    [_hSelect, _hKeyDown] = (0, _uiApi.useMemo)(() => [(item, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      onSelect(item, id);
      _hCloseOptions();
      setItem(item);
    },
    // id, onSelect, _closeOptions
    evt => {
      if (evt.key === _uiApi.KEY_ARROW_DOWN) {
        (0, _uiApi.stopDefaultFor)(evt);
        showOptions();
      }
    }
    // showOptions
    ], []);
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)("button", {
    ref: _refBtCombobox,
    type: "button",
    role: "combobox",
    "aria-expanded": isShowOptions,
    "aria-controls": _listboxId,
    "aria-label": `Select ${caption || DF_CAPTION}`,
    className: CL_SELECT,
    style: style,
    onClick: showOptions,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("div", {
      className: CL_CAPTION,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane.default, {
      id: _listboxId,
      isShow: isShowOptions,
      className: CL_SELECT_OPTIONS,
      item: item,
      options: options,
      clItem: CL_ITEM,
      onSelect: _hSelect,
      onClose: _hCloseOptions
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [(0, _jsxRuntime.jsx)("div", {
        className: CL_DIV_VALUE,
        children: (0, _OptionFn.getItemCaption)(item)
      }), (0, _jsxRuntime.jsx)("div", {
        className: CL_DIV_BT,
        children: (0, _jsxRuntime.jsx)(_ArrowCell.default, {})
      }), (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE
      })]
    })]
  });
};
var _default = exports.default = InputSelect;
//# sourceMappingURL=InputSelect.js.map