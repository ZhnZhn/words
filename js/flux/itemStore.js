"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsItem = exports.useLoading = exports.useLimitRemaining = exports.removeItemsUnder = exports.removeItems = exports.removeItem = exports.loadItem = void 0;
var _RouterApiConf = _interopRequireDefault(require("./logic/RouterApiConf"));
var _loadItem = _interopRequireDefault(require("./logic/loadItem"));
var _ItemActions = require("./actions/ItemActions");
var _itemFn = require("./itemFn");
var _storeApi = require("./storeApi");
var _compStore = require("./compStore");
const _assign = Object.assign,
  _crDbLoadMsg = word => `Item '${word}' has been already loaded.`;
const [_crLoading, _selectLoading] = (0, _storeApi.fCrStoreSlice)("loading"),
  [_crLimitRemaining, _selectLimitRemaining] = (0, _storeApi.fCrStoreSlice)("limitRemaining"),
  [_crMsItem, _selectMsItem] = (0, _storeApi.fCrStoreSlice)("msItem"),
  [_crItems, _selectItems] = (0, _storeApi.fCrStoreSlice)("items");
const _crStore = () => ({
    ..._crLoading(),
    ..._crLimitRemaining(),
    ..._crMsItem(),
    ..._crItems({})
  }),
  itemStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  [_set, _get] = (0, _storeApi.getStoreApi)(itemStore),
  _setMsItem = (0, _storeApi.fCrSetSlice)(_set, _crMsItem),
  _getItems = (0, _storeApi.fCrGetSlice)(_get, _selectItems);
const useLoading = exports.useLoading = (0, _storeApi.fCrUse)(itemStore, _selectLoading);
const useLimitRemaining = exports.useLimitRemaining = (0, _storeApi.fCrUse)(itemStore, _selectLimitRemaining);
const useMsItem = exports.useMsItem = (0, _storeApi.fCrUse)(itemStore, _selectMsItem);
const _loadItemFailed = option => {
    (0, _compStore.showMd)('ALERT_DIALOG', option);
    _set(_crLoading(_ItemActions.IAT_LOAD_ITEM_FAILED));
  },
  _loadItemCompleted = (result, option) => {
    const {
      config,
      itemConf
    } = result;
    _set({
      ...(config ? _crMsItem((0, _itemFn.addItemImpl)(_selectItems(_get()), config, itemConf)) : void 0),
      ..._crLoading(_ItemActions.IAT_LOAD_ITEM_COMPLETED),
      ..._crLimitRemaining(option.limitRemaining)
    });
  };
const loadItem = function (option) {
  if (option === void 0) {
    option = {};
  }
  const {
      itemConf = {},
      word = ''
    } = option,
    {
      paneId
    } = itemConf;
  if ((0, _itemFn.isItemImpl)(_getItems(), paneId, word)) {
    _loadItemFailed({
      msg: _crDbLoadMsg(word)
    });
    return;
  }
  const {
      loadId = 'WD'
    } = option,
    {
      apiKey,
      adapter,
      api,
      msgErr
    } = _RouterApiConf.default.getApiConf(loadId);
  if (apiKey) {
    _assign(option, {
      apiKey,
      adapter,
      api
    });
    (0, _compStore.showPane)(option.itemConf);
    _set(_crLoading(_ItemActions.IAT_LOAD_ITEM_LOADING));
    (0, _loadItem.default)(option, _loadItemCompleted, _loadItemFailed);
  } else {
    _loadItemFailed({
      msg: msgErr
    });
  }
};
exports.loadItem = loadItem;
const removeItem = config => {
  const _options = (0, _itemFn.removeItemImpl)(_selectItems(_get()), config);
  if (_options) {
    _setMsItem(_options);
  }
};
exports.removeItem = removeItem;
const removeItems = paneId => {
  (0, _itemFn.removeItemsImpl)(_getItems(), paneId);
  _setMsItem({
    configs: [],
    id: paneId
  });
};
exports.removeItems = removeItems;
const removeItemsUnder = config => {
  const _option = (0, _itemFn.removeItemsUnderImpl)(_getItems(), config);
  if (_option) {
    _setMsItem(_option);
  }
};
exports.removeItemsUnder = removeItemsUnder;
//# sourceMappingURL=itemStore.js.map