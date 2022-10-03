"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ItemActions = exports.IAT_REMOVE_ITEMS_UNDER = exports.IAT_REMOVE_ITEMS = exports.IAT_REMOVE_ITEM = exports.IAT_LOAD_ITEM_FAILED = exports.IAT_LOAD_ITEM_COMPLETED = exports.IAT_LOAD_ITEM = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Store = _interopRequireDefault(require("../stores/Store"));

var _RouterApiConf = _interopRequireDefault(require("../logic/RouterApiConf"));

var _loadItem = _interopRequireDefault(require("../logic/loadItem"));

var _Reflux$createActions;

var IAT_LOAD_ITEM = 'loadItem';
exports.IAT_LOAD_ITEM = IAT_LOAD_ITEM;
var IAT_LOAD_ITEM_COMPLETED = 'loadItemCompleted';
exports.IAT_LOAD_ITEM_COMPLETED = IAT_LOAD_ITEM_COMPLETED;
var IAT_LOAD_ITEM_FAILED = 'loadItemFailed';
exports.IAT_LOAD_ITEM_FAILED = IAT_LOAD_ITEM_FAILED;
var IAT_REMOVE_ITEM = 'removeItem';
exports.IAT_REMOVE_ITEM = IAT_REMOVE_ITEM;
var IAT_REMOVE_ITEMS = 'removeItems';
exports.IAT_REMOVE_ITEMS = IAT_REMOVE_ITEMS;
var IAT_REMOVE_ITEMS_UNDER = 'removeItemsUnder';
exports.IAT_REMOVE_ITEMS_UNDER = IAT_REMOVE_ITEMS_UNDER;

var Actions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[IAT_LOAD_ITEM] = {
  children: ['completed', 'failed']
}, _Reflux$createActions[IAT_REMOVE_ITEM] = {}, _Reflux$createActions[IAT_REMOVE_ITEMS] = {}, _Reflux$createActions[IAT_REMOVE_ITEMS_UNDER] = {}, _Reflux$createActions));

var _assign = Object.assign,
    _crDbLoadMsg = function _crDbLoadMsg(word) {
  return "Item '" + word + "' has been already loaded.";
};

Actions[IAT_LOAD_ITEM].listen(function (option) {
  if (option === void 0) {
    option = {};
  }

  var _option = option,
      _option$itemConf = _option.itemConf,
      itemConf = _option$itemConf === void 0 ? {} : _option$itemConf,
      _option$word = _option.word,
      word = _option$word === void 0 ? '' : _option$word,
      paneId = itemConf.paneId;

  if (_Store["default"].isItem(paneId, word)) {
    this.failed({
      msg: _crDbLoadMsg(word)
    });
    return;
  }

  var _option2 = option,
      _option2$loadId = _option2.loadId,
      loadId = _option2$loadId === void 0 ? 'WD' : _option2$loadId,
      _RouterApiConf$getApi = _RouterApiConf["default"].getApiConf(loadId),
      apiKey = _RouterApiConf$getApi.apiKey,
      adapter = _RouterApiConf$getApi.adapter,
      api = _RouterApiConf$getApi.api,
      msgErr = _RouterApiConf$getApi.msgErr;

  if (apiKey) {
    _assign(option, {
      apiKey: apiKey,
      adapter: adapter,
      api: api
    });

    (0, _loadItem["default"])(option, this.completed, this.failed);
  } else {
    this.failed({
      msg: msgErr
    });
  }
});
var ItemActions = Actions;
exports.ItemActions = ItemActions;
//# sourceMappingURL=ItemActions.js.map