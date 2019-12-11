"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _MenuBrowserStyle = _interopRequireDefault(require("../styles/MenuBrowserStyle"));

var _DynamicMenuBrowser = _interopRequireDefault(require("../zhn-moleculs/DynamicMenuBrowser"));

var MenuBrowser =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(MenuBrowser, _Component);

  function MenuBrowser() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MenuBrowser.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        theme = _this$props.theme,
        store = _this$props.store,
        showAction = _this$props.showAction,
        browserId = _this$props.browserId,
        onClickItem = _this$props.onClickItem,
        TS = theme.createStyle(_MenuBrowserStyle["default"]);
    return _react["default"].createElement(_DynamicMenuBrowser["default"], {
      styleConfig: TS,
      store: store,
      showAction: showAction,
      browserId: browserId,
      caption: "Words Sources",
      url: "data/words-source-menu.json",
      onClickItem: onClickItem
    });
  };

  return MenuBrowser;
}(_react.Component);

var _default = (0, _withTheme["default"])(MenuBrowser);

exports["default"] = _default;
//# sourceMappingURL=MenuBrowser.js.map