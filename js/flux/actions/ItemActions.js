"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.T = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Store = _interopRequireDefault(require("../stores/Store"));

var _RouterApiConf = _interopRequireDefault(require("../logic/RouterApiConf"));

var _loadItem = _interopRequireDefault(require("../logic/loadItem"));

var _Reflux$createActions;

var T = {
  LOAD_ITEM: 'loadItem',
  LOAD_ITEM_COMPLETED: 'loadItemCompleted',
  LOAD_ITEM_FAILED: 'loadItemFailed',
  REMOVE_ITEM: 'removeItem',
  REMOVE_ITEMS: 'removeItems',
  REMOVE_ITEMS_UNDER: 'removeItemsUnder'
};
exports.T = T;

var Actions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[T.LOAD_ITEM] = {
  children: ['completed', 'failed']
}, _Reflux$createActions[T.REMOVE_ITEM] = {}, _Reflux$createActions[T.REMOVE_ITEMS] = {}, _Reflux$createActions[T.REMOVE_ITEMS_UNDER] = {}, _Reflux$createActions));

var _crDbLoadMsg = function _crDbLoadMsg(word) {
  return "Item '" + word + "' has been already loaded.";
};

Actions[T.LOAD_ITEM].listen(function (option) {
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
    Object.assign(option, {
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
var _default = Actions;
exports["default"] = _default;
//# sourceMappingURL=ItemActions.js.map