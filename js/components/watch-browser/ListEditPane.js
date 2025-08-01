"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _ValidationMessages = _interopRequireDefault(require("../zhn/ValidationMessages"));
var _SelectGroupList = _interopRequireDefault(require("./SelectGroupList"));
var _RowInputText = _interopRequireDefault(require("./RowInputText"));
var _RowButtons = _interopRequireDefault(require("./RowButtons"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const ListEditPane = _ref => {
  let {
    getWatchListsByGroup,
    forActionType,
    msgOnIsEmptyName,
    msgOnNotSelect,
    onRename,
    onClose
  } = _ref;
  const _refGroupList = (0, _uiApi.useRef)(),
    _refInputText = (0, _uiApi.useRef)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.setRefInputValue)(_refInputText, '')),
    rerender = (0, _useRerender.default)()[1],
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear, rerender)

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

  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_SelectGroupList.default, {
      id: "le",
      refEl: _refGroupList,
      getWatchListsByGroup: getWatchListsByGroup,
      groupCaption: "In Group:",
      groupOptions: groupOptions,
      listCaption: "List From:"
    }), (0, _jsxRuntime.jsx)(_RowInputText.default, {
      refEl: _refInputText,
      caption: "List To:"
    }), (0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    }), (0, _jsxRuntime.jsx)(_RowButtons.default, {
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

  btStyle: PropTypes.object,

  onRename: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = ListEditPane;
//# sourceMappingURL=ListEditPane.js.map