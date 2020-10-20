"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _throttle = _interopRequireDefault(require("../../utils/throttle"));

var _ComponentActions = _interopRequireWildcard(require("../actions/ComponentActions"));

var _ItemActions = _interopRequireWildcard(require("../actions/ItemActions"));

var _RouterDialog = _interopRequireDefault(require("../../components/dialogs/RouterDialog"));

var _RouterPane = _interopRequireDefault(require("../../components/panes/RouterPane"));

var _About = _interopRequireDefault(require("../../components/about/About"));

var showPane = _ComponentActions["default"].showPane,
    closePane = _ComponentActions["default"].closePane,
    showModalDialog = _ComponentActions["default"].showModalDialog;

var _addToWatch = showModalDialog.bind(null, 'AW');

var _loadItem = (0, _throttle["default"])(_ItemActions["default"].loadItem, 2500, {
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
      onLoad: _loadItem //onLoad: loadItem

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
      updateAction: _ItemActions.T.LOAD_ITEM_COMPLETED,
      showAction: _ComponentActions.T.SHOW_PANE,
      toggleAction: _ComponentActions.T.TOGGLE_PANE,
      watchAction: _ComponentActions.T.CLICK_WATCH_ITEM,
      onRemoveItems: _ItemActions["default"].removeItems.bind(null, paneId),
      onRemoveUnder: _ItemActions["default"].removeItemsUnder,
      onCloseItem: _ItemActions["default"].removeItem,
      onClose: closePane.bind(null, itemConf),
      //onLoad: ItemActions.loadItem
      onLoad: _loadItem,
      onAddToWatch: _addToWatch
    });
  },
  crAbout: function crAbout(store) {
    return /*#__PURE__*/(0, _react.createElement)(_About["default"], {
      key: 'About',
      id: 'About',
      showAction: _ComponentActions.T.SHOW_ABOUT,
      closeAction: _ComponentActions.T.CLOSE_ABOUT,
      store: store
    });
  }
};
var _default = Factory;
exports["default"] = _default;
//# sourceMappingURL=Factory.js.map