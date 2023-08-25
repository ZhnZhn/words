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
  _crDbLoadMsg = word => "Item '" + word + "' has been already loaded.";
const _crStore = () => ({
    loading: void 0,
    limitRemaining: void 0,
    items: {},
    msItem: void 0
  }),
  itemStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectItems = state => state.items,
  _selectLoading = state => state.loading,
  _selectLimitRemaining = state => state.limitRemaining,
  _selectMsItem = state => state.msItem,
  [_set, _get] = (0, _storeApi.getStoreApi)(itemStore);
const useLoading = (0, _storeApi.fCrUse)(itemStore, _selectLoading);
exports.useLoading = useLoading;
const useLimitRemaining = (0, _storeApi.fCrUse)(itemStore, _selectLimitRemaining);
exports.useLimitRemaining = useLimitRemaining;
const useMsItem = (0, _storeApi.fCrUse)(itemStore, _selectMsItem);
exports.useMsItem = useMsItem;
const _loadItemFailed = option => {
    (0, _compStore.showMd)('ALERT_DIALOG', option);
    _set({
      loading: _ItemActions.IAT_LOAD_ITEM_FAILED
    });
  },
  _loadItemCompleted = (result, option) => {
    const {
        config,
        itemConf
      } = result,
      {
        limitRemaining
      } = option,
      _nextState = {
        loading: _ItemActions.IAT_LOAD_ITEM_COMPLETED,
        limitRemaining
      };
    if (config) {
      _nextState.msItem = (0, _itemFn.addItemImpl)(_selectItems(_get()), config, itemConf);
    }
    _set(_nextState);
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
  if ((0, _itemFn.isItemImpl)(paneId, word)) {
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
    _set({
      loading: _ItemActions.IAT_LOAD_ITEM_LOADING
    });
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
    _set({
      msItem: _options
    });
  }
};
exports.removeItem = removeItem;
const removeItems = paneId => {
  (0, _itemFn.removeItemsImpl)(_selectItems(_get()), paneId);
  _set({
    msItem: {
      configs: [],
      id: paneId
    }
  });
};
exports.removeItems = removeItems;
const removeItemsUnder = config => {
  const _option = (0, _itemFn.removeItemsUnderImpl)(_selectItems(_get()), config);
  if (_option) {
    _set({
      msItem: _option
    });
  }
};
exports.removeItemsUnder = removeItemsUnder;
//# sourceMappingURL=itemStore.js.map