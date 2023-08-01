"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("./uiApi");
var _uiThemeStore = require("../flux/uiThemeStore");
var _compStore = require("../flux/compStore");
var _watchListStore = require("../flux/watch-list/watchListStore");
var _ThemeContext = _interopRequireDefault(require("./hoc/ThemeContext"));
var _RouterModalDialog = _interopRequireDefault(require("./dialogs/RouterModalDialog"));
var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));
var _BrowserContainer = _interopRequireDefault(require("./zhn-containers/BrowserContainer"));
var _HrzContainer = _interopRequireDefault(require("./zhn-containers/HrzContainer"));
var _ModalDialogContainer = _interopRequireDefault(require("./zhn-containers/ModalDialogContainer"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_COMP = "component-container",
  CL_ITEMS = "items-container",
  WORDS_BROWSER_ID = 'WORDS_DIFINITION';
const AppWords = _ref => {
  let {
    action
  } = _ref;
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    action.showAbout();
    action.initWatchList();
  }, []);
  // action
  /*eslint-enable react-hooks/exhaustive-deps */

  const {
    headerActions,
    browserActions
  } = action;
  return (0, _jsxRuntime.jsx)(_ThemeContext.default.Provider, {
    value: _uiThemeStore.uiThemeStore,
    children: (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)(_HeaderBar.default, {
        ...headerActions
      }), (0, _jsxRuntime.jsxs)("div", {
        className: CL_COMP,
        children: [(0, _jsxRuntime.jsx)(_BrowserContainer.default, {
          browserId: WORDS_BROWSER_ID,
          useBrowser: _compStore.useBrowser,
          useDialog: _compStore.useDialog,
          useWatchList: _watchListStore.useWatchList,
          ...browserActions
        }), (0, _jsxRuntime.jsx)(_HrzContainer.default, {
          className: CL_ITEMS,
          usePane: _compStore.usePane
        })]
      }), (0, _jsxRuntime.jsx)(_ModalDialogContainer.default, {
        router: _RouterModalDialog.default
      })]
    })
  });
};
var _default = AppWords;
exports.default = _default;
//# sourceMappingURL=AppWords.js.map