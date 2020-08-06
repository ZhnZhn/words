"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _MenuBrowser = _interopRequireDefault(require("../zhn-browsers/MenuBrowser"));

var _WatchBrowser = _interopRequireDefault(require("../watch-browser/WatchBrowser"));

var _DialogContainer = _interopRequireDefault(require("./DialogContainer"));

var CL_ROOT = "hrz-container";

var BrowserContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(BrowserContainer, _Component);

  function BrowserContainer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BrowserContainer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        store = _this$props.store,
        browserId = _this$props.browserId,
        showBrowserAction = _this$props.showBrowserAction,
        showDialogAction = _this$props.showDialogAction,
        onClickItem = _this$props.onClickItem,
        updateWatchAction = _this$props.updateWatchAction,
        onClickWatchItem = _this$props.onClickWatchItem;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: CL_ROOT
    }, /*#__PURE__*/_react["default"].createElement(_MenuBrowser["default"], {
      store: store,
      browserId: browserId,
      showAction: showBrowserAction,
      onClickItem: onClickItem
    }), /*#__PURE__*/_react["default"].createElement(_WatchBrowser["default"], {
      caption: "Watch Words",
      store: store,
      isInitShow: false,
      browserType: "WATCH_ID",
      showAction: showBrowserAction,
      updateAction: updateWatchAction,
      onClickItem: onClickWatchItem
    }), /*#__PURE__*/_react["default"].createElement(_DialogContainer["default"], {
      maxDialog: 3,
      store: store,
      showAction: showDialogAction
    }));
  };

  return BrowserContainer;
}(_react.Component);

var _default = BrowserContainer;
exports["default"] = _default;
//# sourceMappingURL=BrowserContainer.js.map