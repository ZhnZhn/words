"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _BrowserContainer = _interopRequireDefault(require("./BrowserContainer"));

var _HrzContainer = _interopRequireDefault(require("./HrzContainer"));

var _WrapperContainer = _interopRequireDefault(require("./WrapperContainer"));

var Container = {
  Browser: _BrowserContainer["default"],
  Hrz: _HrzContainer["default"],
  Wrapper: _WrapperContainer["default"]
};
var _default = Container;
exports["default"] = _default;
//# sourceMappingURL=Container.js.map