"use strict";

exports.__esModule = true;
exports.setUiTheme = exports.UI_THEME_OPTIONS = exports.DF_UI_THEME_ITEM = void 0;
const _crRgba = (v, a) => `rgba(${v}, ${v}, ${v}, ${a})`;
const DF_BGC = "#808080";
const DF_C_BGC = "#4d4d4d";
const DF_BF_C = "#3270b4";
const DF_IH_BGC = "#404040";
const DF_SO_BGC = "#404040";
const DF_SI_C = "#f8f8ff";
const DF_SI_HF = _crRgba(255, 0.1);
const DF_L_C = "#4d4d4d";
const BG_HEADER_GREY = DF_BF_C;
const PALLETE_GREY = {
  'bgc': DF_BGC,
  'c-bgc': DF_C_BGC,
  'bf-c': BG_HEADER_GREY,
  'ih-bgc': DF_IH_BGC,
  'so-bgc': DF_SO_BGC,
  'si-c': DF_SI_C,
  'si-hf': DF_SI_HF,
  'l-c': DF_L_C
};
const _PALLETE_LIGHT = {
  'bgc': '#a9a9a9',
  //'darkgrey'
  'bf-c': '#0096c8',
  'si-c': '#303030',
  'si-hf': _crRgba(255, 0.4)
};
const PALLETE_WHITE = {
  ..._PALLETE_LIGHT,
  'c-bgc': '#ebf1f5',
  'ih-bgc': '#e6ecf0',
  'so-bgc': '#dfe4e7',
  'l-c': 'grey'
};
const PALLETE_SAND = {
  ..._PALLETE_LIGHT,
  'c-bgc': '#e8e0cb',
  'ih-bgc': '#d0c198',
  'so-bgc': '#c6bda5',
  'l-c': '#e8e0cb'
};
const UI_THEME_GREY_ID = 'GREY',
  UI_THEME_WHITE_ID = 'WHITE',
  UI_THEME_SAND_ID = 'SAND';
const UI_THEME_OPTIONS = exports.UI_THEME_OPTIONS = [{
  caption: 'Grey',
  value: UI_THEME_GREY_ID
}, {
  caption: 'Sand',
  value: UI_THEME_SAND_ID
}, {
  caption: 'White',
  value: UI_THEME_WHITE_ID
}];
const DF_UI_THEME_ITEM = exports.DF_UI_THEME_ITEM = UI_THEME_OPTIONS[0];
const HP_UI_THEME = {
  [UI_THEME_GREY_ID]: PALLETE_GREY,
  [UI_THEME_SAND_ID]: PALLETE_SAND,
  [UI_THEME_WHITE_ID]: PALLETE_WHITE
};
const CUSTOM_CSS_PROPERTY_CONFIGS = [["bgc", DF_BGC], ["c-bgc", DF_C_BGC], ["bf-c", DF_BF_C], ["ih-bgc", DF_IH_BGC], ["so-bgc", DF_SO_BGC], ["si-c", DF_SI_C], ["si-hf", DF_SI_HF], ["l-c", DF_L_C]];
const _setStyleProperties = uiThemePallete => {
  const _style = document.body.style;
  CUSTOM_CSS_PROPERTY_CONFIGS.forEach(_ref => {
    let [propName, dfValue] = _ref;
    _style.setProperty('--' + propName, uiThemePallete[propName] || dfValue);
  });
};
let currentUiThemeId = DF_UI_THEME_ITEM.value;
const setUiTheme = uiThemeId => {
  const _nextUiThemePallete = HP_UI_THEME[uiThemeId];
  if (_nextUiThemePallete && currentUiThemeId !== uiThemeId) {
    _setStyleProperties(_nextUiThemePallete);
    currentUiThemeId = uiThemeId;
  }
};
exports.setUiTheme = setUiTheme;
//# sourceMappingURL=uiTheme.js.map