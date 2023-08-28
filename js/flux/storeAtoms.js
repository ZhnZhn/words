"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useUiTheme = exports.setUiTheme = void 0;
var _storeApi = require("./storeApi");
var _theme = _interopRequireDefault(require("../components/styles/theme"));
const _atomUiTheme = (0, _storeApi.atom)(_theme.default);
const useUiTheme = _atomUiTheme.useAtomValue;
exports.useUiTheme = useUiTheme;
const setUiTheme = themeName => {
  _atomUiTheme.setValue(prev => prev.getThemeName() === themeName ? prev : (prev.setThemeName(themeName), {
    ...prev
  }));
};
exports.setUiTheme = setUiTheme;
//# sourceMappingURL=storeAtoms.js.map