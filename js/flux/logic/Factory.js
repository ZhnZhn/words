'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _throttle = require('../../utils/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ItemActions = require('../actions/ItemActions');

var _ItemActions2 = _interopRequireDefault(_ItemActions);

var _RouterDialog = require('../../components/dialogs/RouterDialog');

var _RouterDialog2 = _interopRequireDefault(_RouterDialog);

var _RouterPane = require('../../components/panes/RouterPane');

var _RouterPane2 = _interopRequireDefault(_RouterPane);

var _About = require('../../components/about/About');

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showPane = _ComponentActions2.default.showPane,
    closePane = _ComponentActions2.default.closePane;


var _addToWatch = _ComponentActions2.default.showModalDialog.bind(null, 'AW');

var _loadItem = (0, _throttle2.default)(_ItemActions2.default.loadItem, 2500, {
  trailing: false
});

var Factory = {
  crDialog: function crDialog(itemConf) {
    var type = itemConf.type,
        dialogType = itemConf.dialogType,
        dialogProps = itemConf.dialogProps,
        El = _RouterDialog2.default.getElement(dialogType);

    return _react2.default.createElement(El, (0, _extends3.default)({
      key: type,
      type: type,
      itemConf: itemConf
    }, dialogProps, {
      onShow: showPane.bind(null, itemConf),
      onLoad: _loadItem
      //onLoad: loadItem
    }));
  },

  crPane: function crPane(itemConf, store) {
    var type = itemConf.type,
        paneType = itemConf.paneType,
        paneCaption = itemConf.paneCaption,
        paneId = itemConf.paneId,
        _RouterPane$getElemen = _RouterPane2.default.getElement(paneType),
        Pane = _RouterPane$getElemen.Pane,
        Input = _RouterPane$getElemen.Input,
        Item = _RouterPane$getElemen.Item;

    return _react2.default.createElement(Pane, {
      key: type,
      id: paneId,
      itemConf: itemConf,
      paneCaption: paneCaption,
      store: store,
      Input: Input,
      Item: Item,
      addAction: _ItemActions.T.LOAD_ITEM_COMPLETED,
      showAction: _ComponentActions.T.SHOW_PANE,
      toggleAction: _ComponentActions.T.TOGGLE_PANE,
      onRemoveItems: _ItemActions2.default.removeItems.bind(null, paneId),
      onRemoveUnder: _ItemActions2.default.removeItemsUnder,
      onCloseItem: _ItemActions2.default.removeItem,
      onClose: closePane.bind(null, itemConf),
      //onLoad: ItemActions.loadItem
      onLoad: _loadItem,
      onAddToWatch: _addToWatch
    });
  },

  crAbout: function crAbout(store) {
    return _react2.default.createElement(_About2.default, {
      key: 'About', id: 'About',
      showAction: 'showAbout',
      store: store
    });
  }
};

exports.default = Factory;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\logic\Factory.js.map