"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _MenuBrowserStyle = _interopRequireDefault(require("../styles/MenuBrowserStyle"));

var _Handlers = require("./Handlers");

var _Comp = _interopRequireDefault(require("../Comp"));

var _EditBar = _interopRequireDefault(require("./EditBar"));

var _WatchGroups = _interopRequireDefault(require("./WatchGroups"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var S_BROWSER = {
  paddingRight: 0
},
    S_BT_CIRCLE = {
  position: 'relative',
  top: -2,
  marginLeft: 20
},
    S_SP = {
  height: '92%',
  paddingRight: 10,
  overflowY: 'auto'
},
    S_SP_SHORT = {
  height: 'calc(100% - 70px)'
};
var T_S = "Click to save to LocalStorage",
    T_E_V = "Click to toggle edit mode E/V";

var FN_NOOP = function FN_NOOP() {};

var WatchBrowser = function WatchBrowser(_ref) {
  var caption = _ref.caption,
      isInitShow = _ref.isInitShow,
      store = _ref.store,
      browserType = _ref.browserType,
      showAction = _ref.showAction,
      updateAction = _ref.updateAction,
      _ref$onClickItem = _ref.onClickItem,
      onClickItem = _ref$onClickItem === void 0 ? FN_NOOP : _ref$onClickItem;

  var _useToggle = (0, _useToggle2["default"])(),
      isModeEdit = _useToggle[0],
      _toggleEditMode = _useToggle[1],
      _useBool = (0, _useBool2["default"])(isInitShow),
      isShow = _useBool[0],
      _hShow = _useBool[1],
      _hHide = _useBool[2],
      _useState = (0, _uiApi.useState)(function () {
    return store.getWatchList();
  }),
      watchList = _useState[0],
      setWatchList = _useState[1];

  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === showAction && data === browserType) {
      _hShow();
    } else if (actionType === updateAction) {
      setWatchList((0, _extends2["default"])({}, data));
    }
  });

  var TS = (0, _useTheme["default"])(_MenuBrowserStyle["default"]),
      _spStyle = isModeEdit ? (0, _extends2["default"])({}, S_SP, S_SP_SHORT) : S_SP,
      _captionEV = isModeEdit ? 'V' : 'E',
      _ref2 = watchList || {},
      groups = _ref2.groups;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].Browser, {
    isShow: isShow,
    style: (0, _extends2["default"])({}, S_BROWSER, TS.BROWSER),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].BrowserCaption, {
      rootStyle: TS.BROWSER_CAPTION,
      caption: caption,
      onClose: _hHide,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].CircleButton, {
        caption: "S",
        title: T_S,
        style: S_BT_CIRCLE,
        onClick: _Handlers.saveWatchList
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].CircleButton, {
        caption: _captionEV,
        title: T_E_V,
        style: S_BT_CIRCLE,
        onClick: _toggleEditMode
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditBar["default"], {
      isShow: isModeEdit,
      onClickGroup: _Handlers.showDialogEditGroups,
      onClickList: _Handlers.showDialogEditLists
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: _spStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchGroups["default"], {
        isModeEdit: isModeEdit,
        TS: TS,
        groups: groups,
        onClickItem: onClickItem
      })
    })]
  });
};
/*
WatchBrowser.propTypes = {
  caption: PropTypes.string,
  isInitShow: PropTypes.bool,
  store: PropTypes.object,
  browserType: PropTypes.string,
  showAction: PropTypes.string,
  updateAction: PropTypes.string,
  onClickItem: PropTypes.func
}
*/


var _default = WatchBrowser;
exports["default"] = _default;
//# sourceMappingURL=WatchBrowser.js.map