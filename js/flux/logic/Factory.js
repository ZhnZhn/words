"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _throttle = _interopRequireDefault(require("../../utils/throttle"));

var _ComponentActions = require("../actions/ComponentActions");

var _ItemActions = require("../actions/ItemActions");

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));

var _About = _interopRequireDefault(require("../../components/about/About"));

var showPane = _ComponentActions.ComponentActions.showPane,
    closePane = _ComponentActions.ComponentActions.closePane,
    showModalDialog = _ComponentActions.ComponentActions.showModalDialog;

var _addToWatch = showModalDialog.bind(null, 'AW');

var _loadItem = (0, _throttle["default"])(_ItemActions.ItemActions.loadItem, 2500, {
  trailing: false
});

var Factory = {
  crDialog: function crDialog(itemConf) {
    var type = itemConf.type,
        dialogType = itemConf.dialogType,
        dialogProps = itemConf.dialogProps,
        El = _RouterDialog["default"].getElement(dialogType);

    return /*#__PURE__*/(0, _react.createElement)(El, (0, _extends2["default"])({
      key: type,
      type: type,
      itemConf: itemConf
    }, dialogProps, {
      onShow: showPane.bind(null, itemConf),
      onLoad: _loadItem
    }));
  },
  crPane: function crPane(itemConf, store) {
    var type = itemConf.type,
        paneType = itemConf.paneType,
        paneCaption = itemConf.paneCaption,
        paneId = itemConf.paneId,
        _RouterPane$getElemen = _RouterPane["default"].getElement(paneType),
        Pane = _RouterPane$getElemen.Pane,
        Input = _RouterPane$getElemen.Input,
        Item = _RouterPane$getElemen.Item;

    return /*#__PURE__*/(0, _react.createElement)(Pane, {
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
  },
  crAbout: function crAbout(store) {
    return /*#__PURE__*/(0, _react.createElement)(_About["default"], {
      key: 'About',
      id: 'About',
      showAction: _ComponentActions.CAT_SHOW_ABOUT,
      closeAction: _ComponentActions.CAT_CLOSE_ABOUT,
      store: store
    });
  }
};
var _default = Factory;
exports["default"] = _default;
//# sourceMappingURL=Factory.js.map