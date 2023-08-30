"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _useWatchListMsEdit = _interopRequireDefault(require("./useWatchListMsEdit"));
var _Atoms = _interopRequireDefault(require("./Atoms"));
var _jsxRuntime = require("preact/jsx-runtime");
const GroupAddPane = _ref => {
  let {
    forActionType,
    msgOnIsEmptyName,
    onCreate,
    onClose
  } = _ref;
  const _refInput = (0, _uiApi.useRef)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.setRefInputValue)(_refInput, ''))

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCreate = (0, _uiApi.useMemo)(() => () => {
      const caption = (0, _uiApi.getRefInputValue)(_refInput);
      if (caption) {
        onCreate({
          caption
        });
      } else {
        (0, _uiApi.setRefInputValue)(_refInput, '');
        setValidationMessages([msgOnIsEmptyName('Group')]);
      }
    }, []);
  // msgOnIsEmptyName, onCreate
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useWatchListMsEdit.default)(forActionType, setValidationMessages, _hClear);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.RowInputText, {
      ref: _refInput,
      caption: "Group:"
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ValidationMessages, {
      validationMessages: validationMessages
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowButtons, {
      caption: "Create",
      title: "Create New Group",
      onClick: _hCreate,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};

/*
GroupAddPane.propTypes = {
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = GroupAddPane;
exports.default = _default;
//# sourceMappingURL=GroupAddPane.js.map