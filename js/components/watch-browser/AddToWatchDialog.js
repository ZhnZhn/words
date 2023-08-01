"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));
var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));
var _useGroupOptions = _interopRequireDefault(require("./useGroupOptions"));
var _useListOptions = _interopRequireDefault(require("./useListOptions"));
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));
var _WatchActions = require("../../flux/actions/WatchActions");
var _useWatchListStore = require("../../flux/watch-list/useWatchListStore");
var _MsgWatch = require("../../constants/MsgWatch");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));
var _Row = _interopRequireDefault(require("../dialogs/Row"));
var _Atoms = _interopRequireDefault(require("./Atoms"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const CL_BT_DIV = 'bt-flat__div',
  S_DIALOG = {
    left: 'calc(50vw - 142px)',
    width: 300
  },
  S_BT_ROOT = {
    color: '#3270b4'
  };
const AddToWatchDialog = (0, _memoIsShow.default)(props => {
  const {
      isShow,
      data,
      onClose
    } = props,
    {
      caption
    } = data,
    [validationMessages, setValidationMessages, _hClose] = (0, _useValidationMessages.default)(onClose),
    [groupOptions, _updateGroupOptions] = (0, _useGroupOptions.default)(_useWatchListStore.getWatchGroups),
    _refGroupCaption = (0, _uiApi.useRef)(null),
    [_refListCaption, _hSelectList] = (0, _useRefItemCaption.default)(),
    [listOptions, setListOptions, updateListOptions] = (0, _useListOptions.default)(_useWatchListStore.getWatchListsByGroup, _refListCaption)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hSelectGroup = (0, _uiApi.useMemo)(() => group => {
      const {
        caption,
        lists
      } = group || {};
      if (caption) {
        (0, _uiApi.setRefValue)(_refGroupCaption, caption);
        setListOptions(lists || []);
      } else {
        (0, _uiApi.setRefValue)(_refGroupCaption, null);
      }
    }, [])
    // setListOptions
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hAdd = (0, _uiApi.useMemo)(() => () => {
      const groupCaption = (0, _uiApi.getRefValue)(_refGroupCaption),
        listCaption = (0, _uiApi.getRefValue)(_refListCaption),
        msgs = [];
      if (!groupCaption) {
        msgs.push((0, _MsgWatch.notSelected)('Group'));
      }
      if (!listCaption) {
        msgs.push((0, _MsgWatch.notSelected)('List'));
      }
      if (msgs.length === 0) {
        const {
          caption,
          config
        } = data;
        (0, _useWatchListStore.addWatchItem)({
          caption,
          config,
          groupCaption,
          listCaption
        });
      } else {
        setValidationMessages(msgs);
      }
    }, [data])
    // _refListCaption, setValidationMessages
    /*eslint-enable react-hooks/exhaustive-deps */,
    _commandButtons = (0, _uiApi.useMemo)(() => [(0, _jsxRuntime.jsx)(_Atoms.default.Button.Flat, {
      caption: "Add",
      title: "Add Item To Watch List",
      rootStyle: S_BT_ROOT,
      clDiv: CL_BT_DIV,
      onClick: _hAdd
    }, "_add")], [_hAdd]);
  (0, _useWatchListStore.useMsEdit)(msEdit => {
    if (msEdit && msEdit.forActionType === _WatchActions.WAT_ADD_ITEM) {
      if (msEdit.message) {
        setValidationMessages(msEdit.messages);
      } else {
        _hClose();
      }
    }
  });

  /*eslint-disable react-hooks/exhaustive-deps */
  // sync state with store on props isShow true
  (0, _uiApi.useEffect)(() => {
    const {
      isShow
    } = props;
    if (isShow) {
      const _groupOptions = (0, _useWatchListStore.getWatchGroups)(),
        _groupCaption = (0, _uiApi.getRefValue)(_refGroupCaption);
      if (_groupOptions !== groupOptions) {
        (0, _uiApi.setRefValue)(_refGroupCaption, null);
        (0, _uiApi.setRefValue)(_refListCaption, null);
        _updateGroupOptions();
        setListOptions([]);
      } else if (_groupCaption) {
        updateListOptions(_groupCaption);
      }
    }
  }, [props]);
  // _refListCaption, _updateGroupOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  const TS = (0, _useTheme.default)(_Dialog.default);
  return (0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    STYLE: TS.BT,
    style: {
      ...TS.R_DIALOG,
      ...S_DIALOG
    },
    captionStyle: TS.BROWSER_CAPTION,
    caption: "Add To Watch List",
    isShow: isShow,
    commandButtons: _commandButtons,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_RowInputSelect.default, {
        inputStyle: TS.INPUT,
        caption: "Group:",
        options: groupOptions,
        onSelect: _hSelectGroup
      })
    }), (0, _jsxRuntime.jsx)("div", {
      children: (0, _jsxRuntime.jsx)(_RowInputSelect.default, {
        inputStyle: TS.INPUT,
        caption: "List:",
        onSelect: _hSelectList,
        options: listOptions
      })
    }), (0, _jsxRuntime.jsx)(_Row.default.Text, {
      caption: "Word:",
      text: caption
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ValidationMessages, {
      validationMessages: validationMessages
    })]
  });
});

/*
AddToWatchDialog.propTypes = {
  isShow  : PropTypes.bool,
  data    : PropTypes.object,
  onClose : PropTypes.func
}
*/
var _default = AddToWatchDialog;
exports.default = _default;
//# sourceMappingURL=AddToWatchDialog.js.map