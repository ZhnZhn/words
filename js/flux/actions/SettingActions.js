"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SettingActions = exports.SAT_UNCHECK_AUTO_SAVE = exports.SAT_CHECK_AUTO_SAVE = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Reflux$createActions;

var SAT_CHECK_AUTO_SAVE = "checkAutoSave";
exports.SAT_CHECK_AUTO_SAVE = SAT_CHECK_AUTO_SAVE;
var SAT_UNCHECK_AUTO_SAVE = "uncheckAutoSave";
exports.SAT_UNCHECK_AUTO_SAVE = SAT_UNCHECK_AUTO_SAVE;

var SettingActions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[SAT_CHECK_AUTO_SAVE] = {}, _Reflux$createActions[SAT_UNCHECK_AUTO_SAVE] = {}, _Reflux$createActions));

exports.SettingActions = SettingActions;
//# sourceMappingURL=SettingActions.js.map