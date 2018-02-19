'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WatchActionTypes = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WatchActionTypes = exports.WatchActionTypes = {
  ADD_ITEM: 'addWatchItem',
  REMOVE_ITEM: 'removeWatchItem',
  SAVE_WATCH: 'saveWatch',

  DRAG_DROP_GROUP: 'dragDropGroup',
  DRAG_DROP_LIST: 'dragDropList',
  DRAG_DROP_ITEM: 'dragDropItem',

  ADD_GROUP: 'addGroup',
  RENAME_GROUP: 'renameGroup',
  DELETE_GROUP: 'deleteGroup',
  CREATE_LIST: 'createList',
  RENAME_LIST: 'renameList',
  DELETE_LIST: 'deleteList',

  EDIT_WATCH_COMPLETED: 'editWatchCompleted',
  EDIT_WATCH_FAILED: 'editWatchFailed'
};
var A = WatchActionTypes;

var WatchActions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, A.ADD_ITEM, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.REMOVE_ITEM, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.SAVE_WATCH, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.DRAG_DROP_GROUP, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.DRAG_DROP_LIST, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.DRAG_DROP_ITEM, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.ADD_GROUP, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.RENAME_GROUP, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.DELETE_GROUP, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.CREATE_LIST, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.RENAME_LIST, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.DELETE_LIST, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.EDIT_WATCH_COMPLETED, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.EDIT_WATCH_FAILED, {}), _Reflux$createActions));

exports.default = WatchActions;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\actions\WatchActions.js.map