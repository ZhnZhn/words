'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _Store = require('../stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _RouterApiConf = require('../logic/RouterApiConf');

var _RouterApiConf2 = _interopRequireDefault(_RouterApiConf);

var _loadItem = require('../logic/loadItem');

var _loadItem2 = _interopRequireDefault(_loadItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var T = exports.T = {
  LOAD_ITEM: 'loadItem',
  LOAD_ITEM_COMPLETED: 'loadItemCompleted',
  LOAD_ITEM_FAILED: 'loadItemFailed',

  REMOVE_ITEM: 'removeItem',
  REMOVE_ITEMS: 'removeItems',
  REMOVE_ITEMS_UNDER: 'removeItemsUnder'
};

var Actions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, T.LOAD_ITEM, {
  children: ['completed', 'failed']
}), (0, _defineProperty3.default)(_Reflux$createActions, T.REMOVE_ITEM, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.REMOVE_ITEMS, {}), (0, _defineProperty3.default)(_Reflux$createActions, T.REMOVE_ITEMS_UNDER, {}), _Reflux$createActions));

var _crDbLoadMsg = function _crDbLoadMsg(word) {
  return 'Item \'' + word + '\' has been already loaded.';
};

var MSG_KEY_NOT_ALLOWED = "It looks like you try to use not valid saved api key by Password Manager not allowed before. Please, reenter api key, check let check box before.";

Actions[T.LOAD_ITEM].listen(function () {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _option$itemConf = option.itemConf,
      itemConf = _option$itemConf === undefined ? {} : _option$itemConf,
      _option$word = option.word,
      word = _option$word === undefined ? '' : _option$word,
      paneId = itemConf.paneId;

  if (_Store2.default.isItem(paneId, word)) {
    this.failed({ msg: _crDbLoadMsg(word) });
    return undefined;
  }

  var _option$loadId = option.loadId,
      loadId = _option$loadId === undefined ? 'WD' : _option$loadId,
      _RouterApiConf$getApi = _RouterApiConf2.default.getApiConf(loadId),
      apiKey = _RouterApiConf$getApi.apiKey,
      isApiKeyAllow = _RouterApiConf$getApi.isApiKeyAllow,
      adapter = _RouterApiConf$getApi.adapter,
      api = _RouterApiConf$getApi.api,
      msgErr = _RouterApiConf$getApi.msgErr;

  if (apiKey) {
    if (isApiKeyAllow(apiKey)) {
      Object.assign(option, { apiKey: apiKey, adapter: adapter, api: api });
      (0, _loadItem2.default)(option, this.completed, this.failed);
    } else {
      this.failed({ msg: MSG_KEY_NOT_ALLOWED });
    }
  } else {
    this.failed({ msg: msgErr });
  }
});

exports.default = Actions;
//# sourceMappingURL=ItemActions.js.map