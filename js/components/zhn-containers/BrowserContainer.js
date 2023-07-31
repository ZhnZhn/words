"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _MenuBrowser = _interopRequireDefault(require("../zhn-browsers/MenuBrowser"));
var _WatchBrowser = _interopRequireDefault(require("../watch-browser/WatchBrowser"));
var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_ROOT = "hrz-container";
const BrowserContainer = _ref => {
  let {
    store,
    compStore,
    browserId,
    selectDialog,
    useBrowser,
    onClickItem,
    updateWatchAction,
    onClickWatchItem
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_ROOT,
    children: [(0, _jsxRuntime.jsx)(_MenuBrowser.default, {
      store: store,
      browserId: browserId,
      useBrowser: useBrowser,
      onClickItem: onClickItem
    }), (0, _jsxRuntime.jsx)(_WatchBrowser.default, {
      caption: "Watch Words",
      store: store,
      useBrowser: useBrowser,
      isInitShow: false,
      browserId: "WATCH_ID",
      updateAction: updateWatchAction,
      onClickItem: onClickWatchItem
    }), (0, _jsxRuntime.jsx)(_DialogContainer.default, {
      maxDialog: 3,
      store: compStore,
      selectDialog: selectDialog
    })]
  });
};
var _default = BrowserContainer;
exports.default = _default;
//# sourceMappingURL=BrowserContainer.js.map