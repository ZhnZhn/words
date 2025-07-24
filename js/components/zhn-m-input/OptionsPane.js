"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _OptionFn = require("./OptionFn");
var _jsxRuntime = require("preact/jsx-runtime");
const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};
const _fFocusItem = propName => ref => {
  const _elItem = ((0, _uiApi.getRefValue)(ref) || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS);
    _elItem.focus();
    (0, _uiApi.setRefValue)(ref, _elItem);
  }
};
const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');
const _crItem = (item, index, _ref2) => {
  let {
    refItem,
    currentItem,
    clItem,
    onSelect
  } = _ref2;
  const caption = (0, _OptionFn.getItemCaption)(item),
    value = (0, _OptionFn.getItemValue)(item),
    currentItemCaption = (0, _OptionFn.getItemCaption)(currentItem),
    [_tabIndex, _ref, _ariaSelected] = currentItemCaption !== void 0 && caption === currentItemCaption ? ["0", refItem, "true"] : currentItemCaption === void 0 && index === 0 ? ["0", refItem] : ["-1"],
    _hKeyDown = evt => {
      if (evt.key === _uiApi.KEY_ENTER) {
        onSelect(item, evt);
      }
    };
  return (0, _jsxRuntime.jsx)("div", {
    role: "option",
    ref: _ref,
    "aria-selected": _ariaSelected,
    tabIndex: _tabIndex,
    className: clItem,
    onClick: evt => onSelect(item, evt),
    onKeyDown: _hKeyDown,
    children: caption
  }, value);
};
const OptionsPane = _ref3 => {
  let {
    id,
    isShow,
    className,
    options,
    item,
    clItem,
    onSelect,
    onClose
  } = _ref3;
  const _refItem = (0, _uiApi.useRef)(null),
    _refFocus = (0, _uiApi.useRef)(null)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      if (evt.key === _uiApi.KEY_ARROW_DOWN) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusNextItem(_refFocus);
      } else if (evt.key === _uiApi.KEY_ARROW_UP) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusPrevItem(_refFocus);
      } else if (evt.key === _uiApi.KEY_ESCAPE || evt.key === _uiApi.KEY_TAB) {
        (0, _uiApi.stopDefaultFor)(evt);
        onClose();
      }
    }, []);
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(() => {
    if (isShow) {
      const _elItem = (0, _uiApi.getRefValue)(_refItem);
      if (_elItem) {
        _elItem.focus();
        (0, _uiApi.setRefValue)(_refFocus, _elItem);
      }
    }
  }, [isShow]);
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    id: id,
    role: "listbox",
    "data-scrollable": "true",
    isShow: isShow,
    className: className,
    onClose: onClose,
    onKeyDown: _hKeyDown,
    children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: options,
      crItem: _crItem,
      refItem: _refItem,
      currentItem: item,
      clItem: clItem,
      onSelect: onSelect
    })
  });
};
var _default = exports.default = OptionsPane;
//# sourceMappingURL=OptionsPane.js.map