"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _useGroupOptions2 = _interopRequireDefault(require("./useGroupOptions"));

var _useListOptions2 = _interopRequireDefault(require("./useListOptions"));

var _useRefItemCaption2 = _interopRequireDefault(require("./useRefItemCaption"));

var _useValidationMessages = _interopRequireDefault(require("./useValidationMessages"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _MsgWatch = require("../../constants/MsgWatch");

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

var _Row = _interopRequireDefault(require("../dialogs/Row"));

var _Atoms = _interopRequireDefault(require("./Atoms"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import PropTypes from "prop-types";
var actionCompleted = _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed = _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType = _WatchActions.WatchActionTypes.ADD_ITEM;
var CL_BT_DIV = 'bt-flat__div',
    S_DIALOG = {
  left: 'calc(50vw - 142px)',
  width: 300
},
    S_BT_ROOT = {
  color: '#3270b4'
};
var AddToWatchDialog = (0, _memoIsShow["default"])(function (props) {
  var isShow = props.isShow,
      store = props.store,
      data = props.data,
      onClose = props.onClose,
      caption = data.caption,
      _useValidationMessage = (0, _useValidationMessages["default"])(onClose),
      validationMessages = _useValidationMessage[0],
      setValidationMessages = _useValidationMessage[1],
      _hClose = _useValidationMessage[2],
      _useGroupOptions = (0, _useGroupOptions2["default"])(store),
      groupOptions = _useGroupOptions[0],
      _updateGroupOptions = _useGroupOptions[1],
      _refGroupCaption = (0, _uiApi.useRef)(null),
      _useRefItemCaption = (0, _useRefItemCaption2["default"])(),
      _refListCaption = _useRefItemCaption[0],
      _hSelectList = _useRefItemCaption[1],
      _useListOptions = (0, _useListOptions2["default"])(store, _refListCaption),
      listOptions = _useListOptions[0],
      setListOptions = _useListOptions[1],
      updateListOptions = _useListOptions[2],
      _hSelectGroup = (0, _uiApi.useMemo)(function () {
    return function (group) {
      var _ref = group || {},
          caption = _ref.caption,
          lists = _ref.lists;

      if (caption) {
        (0, _uiApi.setRefValue)(_refGroupCaption, caption);
        setListOptions(lists || []);
      } else {
        (0, _uiApi.setRefValue)(_refGroupCaption, null);
      }
    };
  }, []),
      _hAdd = (0, _uiApi.useMemo)(function () {
    return function () {
      var groupCaption = (0, _uiApi.getRefValue)(_refGroupCaption),
          listCaption = (0, _uiApi.getRefValue)(_refListCaption),
          msgs = [];

      if (!groupCaption) {
        msgs.push((0, _MsgWatch.notSelected)('Group'));
      }

      if (!listCaption) {
        msgs.push((0, _MsgWatch.notSelected)('List'));
      }

      if (msgs.length === 0) {
        var _caption = data.caption,
            config = data.config;

        _WatchActions["default"].addWatchItem({
          caption: _caption,
          config: config,
          groupCaption: groupCaption,
          listCaption: listCaption
        });
      } else {
        setValidationMessages(msgs);
      }
    };
  }, [data]),
      _commandButtons = (0, _uiApi.useMemo)(function () {
    return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].Button.Flat, {
      caption: "Add",
      title: "Add Item To Watch List",
      rootStyle: S_BT_ROOT,
      clDiv: CL_BT_DIV,
      onClick: _hAdd
    }, "_add")];
  }, [_hAdd]);

  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === actionCompleted && data.forActionType === forActionType) {
      _hClose();
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      setValidationMessages(data.messages || []);
    }
  });
  /*eslint-disable react-hooks/exhaustive-deps */
  // sync state with store on props isShow true

  (0, _uiApi.useEffect)(function () {
    var isShow = props.isShow;

    if (isShow) {
      var _groupOptions = store.getWatchGroups(),
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
  }, [props]); // _refListCaption, _updateGroupOptions

  /*eslint-enable react-hooks/exhaustive-deps */

  var TS = (0, _useTheme["default"])(_Dialog["default"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
    STYLE: TS.BT,
    style: (0, _extends2["default"])({}, TS.R_DIALOG, S_DIALOG),
    captionStyle: TS.BROWSER_CAPTION,
    caption: "Add To Watch List",
    isShow: isShow,
    commandButtons: _commandButtons,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
        inputStyle: TS.INPUT,
        caption: "Group:",
        options: groupOptions,
        onSelect: _hSelectGroup
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
        inputStyle: TS.INPUT,
        caption: "List:",
        onSelect: _hSelectList,
        options: listOptions
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"].Text, {
      caption: "Word:",
      text: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].ValidationMessages, {
      validationMessages: validationMessages
    })]
  });
});
/*
AddToWatchDialog.propTypes = {
  isShow  : PropTypes.bool,
  data    : PropTypes.object,
  store   : PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func,
    getWatchListsByGroup: PropTypes.func
  }),
  onClose : PropTypes.func
}
*/

var _default = AddToWatchDialog;
exports["default"] = _default;
//# sourceMappingURL=AddToWatchDialog.js.map