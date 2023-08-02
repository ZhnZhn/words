"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _useGroupOptions = _interopRequireDefault(require("./useGroupOptions"));
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _useWatchListMsEdit = _interopRequireDefault(require("./useWatchListMsEdit"));
var _Atoms = _interopRequireDefault(require("./Atoms"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const ListCreatePane = _ref => {
  let {
    getWatchGroups,
    useWatchList,
    forActionType,
    inputStyle,
    btStyle,
    msgOnNotSelect,
    msgOnIsEmptyName,
    onCreate,
    onClose
  } = _ref;
  const _refInputText = (0, _uiApi.useRef)(),
    [_refGroupCaption, _hSelectGroup] = (0, _useRefItemCaption.default)(),
    [groupOptions, updateGroupOptions] = (0, _useGroupOptions.default)(getWatchGroups),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)()

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCreate = (0, _uiApi.useCallback)(() => {
      const captionGroup = (0, _uiApi.getRefValue)(_refGroupCaption),
        captionList = (0, _uiApi.getRefInputValue)(_refInputText);
      if (captionGroup && captionList) {
        onCreate({
          captionGroup,
          captionList
        });
        (0, _uiApi.setRefInputValue)(_refInputText, '');
      } else {
        const msg = [];
        if (!captionGroup) {
          msg.push(msgOnNotSelect('In Group'));
        }
        if (!captionList) {
          msg.push(msgOnIsEmptyName('List'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // _refGroupCaption, setValidationMessages
  // onCreate, msgOnNotSelect, msgOnIsEmptyName
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useWatchListMsEdit.default)(forActionType, setValidationMessages, _hClear);
  useWatchList(watchList => {
    if (watchList) {
      updateGroupOptions();
    }
  });
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.RowInputSelect, {
      inputStyle: inputStyle,
      caption: "In Group:",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowInputText, {
      ref: _refInputText,
      inputStyle: inputStyle,
      caption: "List:"
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ValidationMessages, {
      validationMessages: validationMessages
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowButtons, {
      btStyle: btStyle,
      caption: "Create",
      title: "Create New List",
      onClick: _hCreate,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};

/*
ListCreatePane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,
  msgOnIsEmptyName: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = ListCreatePane;
exports.default = _default;
//# sourceMappingURL=ListCreatePane.js.map