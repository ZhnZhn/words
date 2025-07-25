"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _compStore = require("../../flux/compStore");
var _uiApi = require("../uiApi");
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _ModalContainer = _interopRequireDefault(require("./ModalContainer"));
var _jsxRuntime = require("preact/jsx-runtime");
const _crDialogItem = (_ref, index, _ref2) => {
  let {
    Comp,
    type
  } = _ref;
  let {
    currentDialog,
    data,
    onClose
  } = _ref2;
  return (0, _jsxRuntime.jsx)(Comp, {
    isShow: currentDialog === type,
    data: data[type],
    onClose: onClose
  }, type);
};
const _getModalDialogType = option => (option || {}).modalDialogType;
const ModalDialogContainer = _ref3 => {
  let {
    router
  } = _ref3;
  const [state, setState] = (0, _uiApi.useState)({
      isShow: !1,
      currentDialog: null,
      data: {},
      dialogs: []
    }),
    {
      isShow,
      data,
      dialogs,
      currentDialog
    } = state,
    _hClose = (0, _uiApi.useCallback)(() => setState(prevState => ({
      ...prevState,
      isShow: !1,
      currentDialog: null
    })), []);
  (0, _compStore.useMdOption)(option => {
    if (option) {
      const type = _getModalDialogType(option);
      if ((0, _isTypeFn.isStr)(type)) {
        setState(prevState => {
          if (!prevState.data[type]) {
            prevState.dialogs.push({
              type,
              Comp: router[type]
            });
          }
          prevState.data[type] = option;
          return {
            ...prevState,
            isShow: !0,
            currentDialog: type
          };
        });
      }
    }
  });
  return (0, _jsxRuntime.jsx)(_ModalContainer.default, {
    isShow: isShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: dialogs,
      crItem: _crDialogItem,
      currentDialog: currentDialog,
      data: data,
      onClose: _hClose
    })
  });
};
var _default = exports.default = ModalDialogContainer;
//# sourceMappingURL=ModalDialogContainer.js.map