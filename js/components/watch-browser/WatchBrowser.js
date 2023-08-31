"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _Handlers = require("./Handlers");
var _Comp = _interopRequireDefault(require("../Comp"));
var _EditBar = _interopRequireDefault(require("./EditBar"));
var _WatchGroups = _interopRequireDefault(require("./WatchGroups"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const S_BROWSER = {
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
const T_S = "Click to save to LocalStorage",
  T_E_V = "Click to toggle edit mode E/V";
const FN_NOOP = () => {};
const WatchBrowser = _ref => {
  let {
    isInitShow,
    caption,
    browserId,
    useBrowser,
    useWatchList,
    onClickItem = FN_NOOP
  } = _ref;
  const [isModeEdit, _toggleEditMode] = (0, _useToggle.default)(),
    [isShow, _hShow, _hHide] = (0, _useBool.default)(isInitShow),
    [watchList, setWatchList] = (0, _uiApi.useState)(_Handlers.getWatchList);
  useBrowser(browser => {
    if (browser && browserId === browser.id) {
      _hShow();
    }
  });
  useWatchList(watchList => {
    if (watchList) {
      setWatchList(watchList);
    }
  });
  const _spStyle = (0, _uiApi.crStyle2)(S_SP, isModeEdit && S_SP_SHORT),
    _captionEV = isModeEdit ? 'V' : 'E',
    {
      groups
    } = watchList || {};
  return (0, _jsxRuntime.jsxs)(_Comp.default.Browser, {
    isShow: isShow,
    style: S_BROWSER,
    children: [(0, _jsxRuntime.jsxs)(_Comp.default.BrowserCaption, {
      caption: caption,
      onClose: _hHide,
      children: [(0, _jsxRuntime.jsx)(_Comp.default.CircleButton, {
        caption: "S",
        title: T_S,
        style: S_BT_CIRCLE,
        onClick: _Handlers.saveWatchList
      }), (0, _jsxRuntime.jsx)(_Comp.default.CircleButton, {
        caption: _captionEV,
        title: T_E_V,
        style: S_BT_CIRCLE,
        onClick: _toggleEditMode
      })]
    }), (0, _jsxRuntime.jsx)(_EditBar.default, {
      isShow: isModeEdit,
      onClickGroup: _Handlers.showDialogEditGroups,
      onClickList: _Handlers.showDialogEditLists
    }), (0, _jsxRuntime.jsx)(_Comp.default.ScrollPane, {
      style: _spStyle,
      children: (0, _jsxRuntime.jsx)(_WatchGroups.default, {
        isModeEdit: isModeEdit,
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
  //updateAction: PropTypes.string,
  onClickItem: PropTypes.func
}
*/
var _default = WatchBrowser;
exports.default = _default;
//# sourceMappingURL=WatchBrowser.js.map