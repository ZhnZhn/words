"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _ValidationMessages = _interopRequireDefault(require("../zhn-atoms/ValidationMessages"));
var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));
var _RowButtons = _interopRequireDefault(require("./RowButtons"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const GroupDeletePane = _ref => {
  let {
    forActionType,
    msgOnNotSelect,
    onDelete,
    onClose
  } = _ref;
  const [_refCaption, _hSelectGroup] = (0, _useRefItemCaption.default)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(),
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hDeleteGroup = (0, _uiApi.useMemo)(() => () => {
      const caption = (0, _uiApi.getRefValue)(_refCaption);
      if (caption) {
        onDelete({
          caption
        });
      } else {
        setValidationMessages([msgOnNotSelect('Group')]);
      }
    }, []);
  // msgOnNotSelect, onDelete
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      id: "gd-g",
      caption: "Group:",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), (0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    }), (0, _jsxRuntime.jsx)(_RowButtons.default, {
      caption: "Delete",
      title: "Delete Group",
      onClick: _hDeleteGroup,
      onClose: onClose
    })]
  });
};

/*
GroupDeletePane.propTypes = {
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = GroupDeletePane;
//# sourceMappingURL=GroupDeletePane.js.map