"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _useWatchListMsEdit = _interopRequireDefault(require("./useWatchListMsEdit"));
var _Atoms = _interopRequireDefault(require("./Atoms"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const ListEditPane = _ref => {
  let {
    getWatchListsByGroup,
    forActionType,
    inputStyle,
    btStyle,
    msgOnIsEmptyName,
    msgOnNotSelect,
    onRename,
    onClose
  } = _ref;
  const _refGroupList = (0, _uiApi.useRef)(),
    _refInputText = (0, _uiApi.useRef)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.setRefInputValue)(_refInputText, '')),
    rerender = (0, _useRerender.default)()[1],
    groupOptions = (0, _useWatchList.default)(rerender)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hRename = (0, _uiApi.useCallback)(() => {
      const [captionGroup, captionList] = (0, _uiApi.getRefInputValue)(_refGroupList),
        captionListTo = (0, _uiApi.getRefInputValue)(_refInputText);
      if (captionGroup && captionList && captionListTo) {
        onRename({
          captionGroup,
          captionListFrom: captionList,
          captionListTo
        });
      } else {
        const msg = [];
        if (!captionGroup) {
          msg.push(msgOnNotSelect('Group'));
        }
        if (!captionList) {
          msg.push(msgOnNotSelect('List From'));
        }
        if (!captionListTo) {
          msg.push(msgOnIsEmptyName('List To'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // setValidationMessages
  // msgOnIsEmptyName, msgOnNotSelect, onRename
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useWatchListMsEdit.default)(forActionType, setValidationMessages, _hClear);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.SelectGroupList, {
      ref: _refGroupList,
      inputStyle: inputStyle,
      getWatchListsByGroup: getWatchListsByGroup,
      groupCaption: "In Group:",
      groupOptions: groupOptions,
      listCaption: "List From:"
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowInputText, {
      ref: _refInputText,
      inputStyle: inputStyle,
      caption: "List To:"
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ValidationMessages, {
      validationMessages: validationMessages
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowButtons, {
      btStyle: btStyle,
      caption: "Rename",
      title: "Rename List Name",
      onClick: _hRename,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};

/*
ListEditPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onRename: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = ListEditPane;
exports.default = _default;
//# sourceMappingURL=ListEditPane.js.map