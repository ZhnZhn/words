"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.uiThemeStore = exports.setUiTheme = exports.selectUiTheme = void 0;
var _storeApi = require("./storeApi");
var _theme = _interopRequireDefault(require("../components/styles/theme"));
const UI_THEME = 'uiTheme';
const _crUiThemeSlice = uiTheme => ({
  [UI_THEME]: uiTheme
});
const uiThemeStore = (0, _storeApi.createStore)(set => ({
  [UI_THEME]: _theme.default
}));
exports.uiThemeStore = uiThemeStore;
const selectUiTheme = state => state[UI_THEME];
exports.selectUiTheme = selectUiTheme;
const _set = (0, _storeApi.getStoreApi)(uiThemeStore)[0];
const setUiTheme = uiThemeItem => _set(state => {
  const _uiTheme = selectUiTheme(state);
  if (_uiTheme.getThemeName() === uiThemeItem.value) {
    return _crUiThemeSlice(_uiTheme);
  }
  _uiTheme.setThemeName(uiThemeItem.value);
  return _crUiThemeSlice({
    ..._uiTheme
  });
});
exports.setUiTheme = setUiTheme;
//# sourceMappingURL=uiThemeStore.js.map