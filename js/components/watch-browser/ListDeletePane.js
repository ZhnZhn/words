"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _Atoms = _interopRequireDefault(require("./Atoms"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const ListDeletePane = _ref => {
  let {
    getWatchListsByGroup,
    forActionType,
    msgOnNotSelect,
    onDelete,
    onClose
  } = _ref;
  const _refGroupList = (0, _uiApi.useRef)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(),
    rerender = (0, _useRerender.default)()[1],
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear, rerender)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hDelete = (0, _uiApi.useCallback)(() => {
      const [captionGroup, captionList] = (0, _uiApi.getRefInputValue)(_refGroupList);
      if (captionGroup && captionList) {
        onDelete({
          captionGroup,
          captionList
        });
      } else {
        const msg = [];
        if (!captionGroup) {
          msg.push(msgOnNotSelect('Group'));
        }
        if (!captionList) {
          msg.push(msgOnNotSelect('List'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // setValidationMessages
  // msgOnNotSelect, onDelete
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.SelectGroupList, {
      ref: _refGroupList,
      getWatchListsByGroup: getWatchListsByGroup,
      groupCaption: "In Group:",
      groupOptions: groupOptions,
      listCaption: "List:"
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ValidationMessages, {
      validationMessages: validationMessages
    }), (0, _jsxRuntime.jsx)(_Atoms.default.RowButtons, {
      caption: "Delete",
      title: "Delete List",
      onClick: _hDelete,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};

/*
ListDeletePane.propTypes = {
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
var _default = ListDeletePane;
exports.default = _default;
//# sourceMappingURL=ListDeletePane.js.map