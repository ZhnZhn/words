"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.crPane = exports.crDialog = exports.crAbout = void 0;
var _uiApi = require("../../components/uiApi");
var _throttleFn = _interopRequireDefault(require("../../utils/throttleFn"));
var _fCrUse = _interopRequireDefault(require("../fCrUse"));
var _useCompStore = require("../useCompStore");
var _ItemActions = require("../actions/ItemActions");
var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));
var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));
var _About = _interopRequireDefault(require("../../components/about/About"));
const _loadItem = (0, _throttleFn.default)(_ItemActions.ItemActions.loadItem, 2500);
const crDialog = itemConf => {
  const {
      type,
      dialogType,
      dialogProps
    } = itemConf,
    El = _RouterDialog.default.getElement(dialogType);
  return (0, _uiApi.createElement)(El, {
    key: type,
    type: type,
    itemConf: itemConf,
    ...dialogProps,
    onShow: _useCompStore.showPane.bind(null, itemConf),
    onLoad: _loadItem
  });
};
exports.crDialog = crDialog;
const crPane = (itemConf, store, compStore, selectPane, selectWatch) => {
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
    store,
    usePane: (0, _fCrUse.default)(compStore, selectPane),
    useWatch: (0, _fCrUse.default)(compStore, selectWatch),
    Input,
    Item,
    updateAction: _ItemActions.IAT_LOAD_ITEM_COMPLETED,
    onRemoveItems: _ItemActions.ItemActions.removeItems.bind(null, paneId),
    onRemoveUnder: _ItemActions.ItemActions.removeItemsUnder,
    onCloseItem: _ItemActions.ItemActions.removeItem,
    onLoad: _loadItem,
    onAddToWatch: _useCompStore.showMd.bind(null, 'AW')
  });
};
exports.crPane = crPane;
const crAbout = (paneId, store, selectPane) => (0, _uiApi.createElement)(_About.default, {
  key: paneId,
  id: paneId,
  usePane: (0, _fCrUse.default)(store, selectPane)
});
exports.crAbout = crAbout;
//# sourceMappingURL=Factory.js.map