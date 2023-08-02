"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.crPane = exports.crAbout = void 0;
var _uiApi = require("../../components/uiApi");
var _throttleFn = _interopRequireDefault(require("../../utils/throttleFn"));
var _storeApi = require("../storeApi");
var _compStore = require("../compStore");
var _itemStore = require("../itemStore");
var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));
var _About = _interopRequireDefault(require("../../components/about/About"));
const _loadItem = (0, _throttleFn.default)(_itemStore.loadItem, 2500);
const crPane = (itemConf, compStore, selectPane, selectWatch) => {
  const {
      paneType,
      paneCaption,
      paneId
    } = itemConf,
    {
      Pane,
      Input,
      Item
    } = _RouterPane.default.getElement(paneType);
  return (0, _uiApi.createElement)(Pane, {
    key: paneId,
    id: paneId,
    itemConf: itemConf,
    paneCaption,
    usePane: (0, _storeApi.fCrUse)(compStore, selectPane),
    useWatch: (0, _storeApi.fCrUse)(compStore, selectWatch),
    Input,
    Item,
    useMsItem: _itemStore.useMsItem,
    onRemoveItems: _itemStore.removeItems.bind(null, paneId),
    onRemoveUnder: _itemStore.removeItemsUnder,
    onCloseItem: _itemStore.removeItem,
    onLoad: _loadItem,
    onAddToWatch: _compStore.showMd.bind(null, 'AW')
  });
};
exports.crPane = crPane;
const crAbout = (paneId, store, selectPane) => (0, _uiApi.createElement)(_About.default, {
  key: paneId,
  id: paneId,
  usePane: (0, _storeApi.fCrUse)(store, selectPane)
});
exports.crAbout = crAbout;
//# sourceMappingURL=Factory.js.map