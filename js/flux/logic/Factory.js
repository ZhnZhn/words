"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.crPane = exports.crDialog = exports.crAbout = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../../components/uiApi");
var _throttleFn = _interopRequireDefault(require("../../utils/throttleFn"));
var _ComponentActions = require("../actions/ComponentActions");
var _ItemActions = require("../actions/ItemActions");
var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));
var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));
var _About = _interopRequireDefault(require("../../components/about/About"));
var showPane = _ComponentActions.ComponentActions.showPane,
  closePane = _ComponentActions.ComponentActions.closePane,
  showModalDialog = _ComponentActions.ComponentActions.showModalDialog;
var _addToWatch = showModalDialog.bind(null, 'AW');
var _loadItem = (0, _throttleFn["default"])(_ItemActions.ItemActions.loadItem, 2500);
var crDialog = function crDialog(itemConf) {
  var type = itemConf.type,
    dialogType = itemConf.dialogType,
    dialogProps = itemConf.dialogProps,
    El = _RouterDialog["default"].getElement(dialogType);
  return (0, _uiApi.createElement)(El, (0, _extends2["default"])({
    key: type,
    type: type,
    itemConf: itemConf
  }, dialogProps, {
    onShow: showPane.bind(null, itemConf),
    onLoad: _loadItem
  }));
};
exports.crDialog = crDialog;
var crPane = function crPane(itemConf, store) {
  var type = itemConf.type,
    paneType = itemConf.paneType,
    paneCaption = itemConf.paneCaption,
    paneId = itemConf.paneId,
    _RouterPane$getElemen = _RouterPane["default"].getElement(paneType),
    Pane = _RouterPane$getElemen.Pane,
    Input = _RouterPane$getElemen.Input,
    Item = _RouterPane$getElemen.Item;
  return (0, _uiApi.createElement)(Pane, {
    key: type,
    id: paneId,
    itemConf: itemConf,
    paneCaption: paneCaption,
    store: store,
    Input: Input,
    Item: Item,
    updateAction: _ItemActions.IAT_LOAD_ITEM_COMPLETED,
    showAction: _ComponentActions.CAT_SHOW_PANE,
    toggleAction: _ComponentActions.CAT_TOGGLE_PANE,
    watchAction: _ComponentActions.CAT_CLICK_WATCH_ITEM,
    onRemoveItems: _ItemActions.ItemActions.removeItems.bind(null, paneId),
    onRemoveUnder: _ItemActions.ItemActions.removeItemsUnder,
    onCloseItem: _ItemActions.ItemActions.removeItem,
    onClose: closePane.bind(null, itemConf),
    onLoad: _loadItem,
    onAddToWatch: _addToWatch
  });
};
exports.crPane = crPane;
var crAbout = function crAbout(store) {
  return (0, _uiApi.createElement)(_About["default"], {
    key: 'About',
    id: 'About',
    showAction: _ComponentActions.CAT_SHOW_ABOUT,
    closeAction: _ComponentActions.CAT_CLOSE_ABOUT,
    store: store
  });
};
exports.crAbout = crAbout;
//# sourceMappingURL=Factory.js.map