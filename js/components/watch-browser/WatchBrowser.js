"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _Handlers = require("./Handlers");
var _Browser = _interopRequireDefault(require("../zhn/Browser"));
var _BrowserCaption = _interopRequireDefault(require("../zhn/BrowserCaption"));
var _ScrollPane = _interopRequireDefault(require("../zhn/ScrollPane"));
var _ModalSlider = require("../zhn-modal-slider/ModalSlider");
var _menuModelFn = require("../zhn-modal-slider/menuModelFn");
var _EditBar = _interopRequireDefault(require("./EditBar"));
var _WatchGroups = _interopRequireDefault(require("./WatchGroups"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const S_BROWSER = {
    paddingRight: 0
  },
  S_BR_CAPTION = {
    display: 'flex'
  },
  S_SP = {
    height: '92%',
    paddingRight: 10,
    overflowY: 'auto'
  },
  S_SP_SHORT = {
    height: 'calc(100% - 70px)'
  };
const FN_NOOP = () => {};
const _saveWatchList = () => setTimeout(_Handlers.saveWatchList, 250);
const _crModelMore = toggleEditMode => ({
  ...(0, _menuModelFn.crMenuModelProps)(180),
  p0: [(0, _menuModelFn.crMenuItem)('Edit mode', toggleEditMode, !0, !1), (0, _menuModelFn.crMenuItem)('Save watch words', _saveWatchList)]
});
const WatchBrowser = _ref => {
  let {
    isInitShow,
    caption,
    browserId,
    useBrowser,
    useWatchList,
    onClickItem = FN_NOOP
  } = _ref;
  const [isMenuMore, showMenuMore, closeMenuMore] = (0, _useBool.default)(),
    [isModeEdit, _toggleEditMode] = (0, _useToggle.default)(),
    [isShow, _hShow, _hHide] = (0, _useBool.default)(isInitShow),
    [watchList, setWatchList] = (0, _uiApi.useState)(_Handlers.getWatchList)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _MODEL_MORE = (0, _uiApi.useMemo)(() => _crModelMore(_toggleEditMode), []);
  //_toggleEditMode
  /*eslint-enable react-hooks/exhaustive-deps */

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
  const {
    groups
  } = watchList || {};
  return (0, _jsxRuntime.jsxs)(_Browser.default, {
    isShow: isShow,
    style: S_BROWSER,
    children: [(0, _jsxRuntime.jsx)(_ModalSlider.ModalSliderMemoIsShow, {
      isShow: isMenuMore,
      className: _styleFn.CL_MENU_MORE,
      model: _MODEL_MORE,
      onClose: closeMenuMore
    }), (0, _jsxRuntime.jsx)(_BrowserCaption.default, {
      rootStyle: S_BR_CAPTION,
      caption: caption,
      onMore: showMenuMore,
      onClose: _hHide
    }), (0, _jsxRuntime.jsx)(_EditBar.default, {
      isShow: isModeEdit,
      onClickGroup: _Handlers.showDialogEditGroups,
      onClickList: _Handlers.showDialogEditLists
    }), (0, _jsxRuntime.jsx)(_ScrollPane.default, {
      style: (0, _styleFn.crStyle2)(S_SP, isModeEdit && S_SP_SHORT),
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
var _default = exports.default = WatchBrowser;
//# sourceMappingURL=WatchBrowser.js.map