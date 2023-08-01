"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _useGroupOptions = _interopRequireDefault(require("./useGroupOptions"));
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _Atoms = _interopRequireDefault(require("./Atoms"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const GroupEditPane = _ref => {
  let {
    getWatchGroups,
    useMsEdit,
    useWatchList,
    forActionType,
    inputStyle,
    btStyle,
    msgOnNotSelect,
    msgOnIsEmptyName,
    onRename,
    onClose
  } = _ref;
  const _refInputText = (0, _uiApi.useRef)(),
    [_refCaptionFrom, _hSelectGroup] = (0, _useRefItemCaption.default)(),
    [groupOptions, updateGroupOptions] = (0, _useGroupOptions.default)(getWatchGroups),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.setRefInputValue)(_refInputText, ''))

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hRename = (0, _uiApi.useMemo)(() => () => {
      const captionTo = (0, _uiApi.getRefInputValue)(_refInputText),
        captionFrom = (0, _uiApi.getRefValue)(_refCaptionFrom);
      if (captionTo && captionFrom) {
        onRename({
          captionFrom,
          captionTo
        });
      } else {
        const msg = [];
        if (!captionFrom) {
          msg.push(msgOnNotSelect('Group From'));
        }
        if (!captionTo) {
          msg.push(msgOnIsEmptyName('Group To'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // msgOnNotSelect, msgOnIsEmptyName, onRename
  /*eslint-enable react-hooks/exhaustive-deps */

  useMsEdit(msEdit => {
    if (msEdit && msEdit.forActionType === forActionType) {
      if (msEdit.messages) {
        setValidationMessages(msEdit.messages);
      } else {
        _hClear();
      }
    }
  });
  useWatchList(watchList => {
    if (watchList) {
      updateGroupOptions();
    }
  });
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.RowInputSelect, {
      caption: "Group From:",
      inputStyle: inputStyle,
      options: groupOptions,
      onSelect: _hSelectGroup
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowInputText, {
      ref: _refInputText,
      caption: "Group To:",
      inputStyle: inputStyle
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ValidationMessages, {
      validationMessages: validationMessages
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowButtons, {
      btStyle: btStyle,
      caption: "Rename",
      title: "Rename Group Name",
      onClick: _hRename,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};

/*
GroupEditPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,
  msgOnNotSelect: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onRename: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = GroupEditPane;
exports.default = _default;
//# sourceMappingURL=GroupEditPane.js.map