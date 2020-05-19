"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Reflux$createActions;

var T = {
  CHECK_AUTO_SAVE: "checkAutoSave",
  UNCHECK_AUTO_SAVE: "uncheckAutoSave"
};

var Actions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[T.CHECK_AUTO_SAVE] = {}, _Reflux$createActions[T.UNCHECK_AUTO_SAVE] = {}, _Reflux$createActions));

var _default = Actions;
exports["default"] = _default;
//# sourceMappingURL=SettingActions.js.map