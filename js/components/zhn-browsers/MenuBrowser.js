"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DynamicMenuBrowser = _interopRequireDefault(require("../zhn-moleculs/DynamicMenuBrowser"));
var _jsxRuntime = require("preact/jsx-runtime");
const MenuBrowser = props => (0, _jsxRuntime.jsx)(_DynamicMenuBrowser.default, {
  ...props,
  caption: "Words Sources",
  url: "data/words-source-menu.json"
});

/*
MenuBrowser.propTypes = {
  store: PropTypes.object,
  showAction: PropTypes.string,
  browserId: PropTypes.string,
  onClickItem: PropTypes.func
}
*/
var _default = MenuBrowser;
exports.default = _default;
//# sourceMappingURL=MenuBrowser.js.map