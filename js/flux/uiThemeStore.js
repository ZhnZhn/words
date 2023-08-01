"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.uiThemeStore = exports.setUiTheme = exports.selectUiTheme = void 0;
var _storeApi = require("./storeApi");
var _theme = _interopRequireDefault(require("../components/styles/theme"));
const selectUiTheme = state => state.uiTheme;
exports.selectUiTheme = selectUiTheme;
const _crUiThemeSlice = uiTheme => ({
  uiTheme
});
const uiThemeStore = (0, _storeApi.createStore)(set => ({
  uiTheme: _theme.default,
  setUiTheme: uiThemeItem => set(state => {
    const _uiTheme = selectUiTheme(state);
    if (_uiTheme.getThemeName() === uiThemeItem.value) {
      return _crUiThemeSlice(_uiTheme);
    }
    _uiTheme.setThemeName(uiThemeItem.value);
    return _crUiThemeSlice({
      ..._uiTheme
    });
  })
}));
exports.uiThemeStore = uiThemeStore;
const setUiTheme = uiThemeStore.getState().setUiTheme;
exports.setUiTheme = setUiTheme;
//# sourceMappingURL=uiThemeStore.js.map