'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ComponentActions = require('../actions/ComponentActions');

var _Factory = require('../logic/Factory');

var _Factory2 = _interopRequireDefault(_Factory);

var _Type = require('../../constants/Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogLogic = {
  showDialog: function showDialog(slice, itemConf) {
    var type = itemConf.type;

    if (slice[type]) {
      return { key: type };
    } else {
      var Comp = _Factory2.default.crDialog(itemConf);
      slice[type] = true;
      return { key: type, Comp: Comp };
    }
  }
};

var PaneLogic = {
  showPane: function showPane(slice, itemConf, store) {
    var type = itemConf.type,
        paneId = itemConf.paneId;

    if (slice[type]) {
      return { id: paneId };
    } else {
      var Comp = _Factory2.default.crPane(itemConf, store);
      slice[type] = true;
      return { Comp: Comp };
    }
  },
  togglePane: function togglePane(itemConf) {
    return {
      id: itemConf.paneId
    };
  }
};

var CompLogic = {
  crAbout: function crAbout(store) {
    var Comp = _Factory2.default.crAbout(store);
    return { Comp: Comp };
  }
};

var ComponentSlice = {
  dialogInit: {},
  paneInit: {},

  showAlertDialog: function showAlertDialog() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    option.modalDialogType = _Type.ModalDialog.EXCEPTION;
    this.trigger(_ComponentActions.T.SHOW_MODAL_DIALOG, option);
  },
  onShowBrowser: function onShowBrowser(browserId) {
    this.trigger(_ComponentActions.T.SHOW_BROWSER, browserId);
  },
  onShowDialog: function onShowDialog(itemConf, event) {
    var r = DialogLogic.showDialog(this.dialogInit, itemConf);
    this.trigger(_ComponentActions.T.SHOW_DIALOG, r);
  },
  onShowModalDialog: function onShowModalDialog(modalDialogType) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    option.modalDialogType = modalDialogType;
    this.trigger(_ComponentActions.T.SHOW_MODAL_DIALOG, option);
  },
  onShowPane: function onShowPane(itemConf) {
    var pane = PaneLogic.showPane(this.paneInit, itemConf, this);
    //const browser = BrowserLogic.updateBadge(this.hmBrowser, itemConf);
    this.trigger(_ComponentActions.T.SHOW_PANE, pane);
    //this.trigger(TYPES.UPDATE_BROWSER, browser)
  },
  onTogglePane: function onTogglePane(itemConf) {
    //const browser = BrowserLogic.toggleBadge(this.hmBrowser, itemConf);
    var pane = PaneLogic.togglePane(itemConf);
    this.trigger(_ComponentActions.T.TOGGLE_PANE, pane);
    //this.trigger(TYPES.UPDATE_BROWSER, browser)
  },
  onClosePane: function onClosePane(itemConf) {
    //const r = BrowserLogic.updateBadge(this.hmBrowser, itemConf, {isOpen:false});
    //this.trigger(TYPES.UPDATE_BROWSER, r)
  },
  onShowAbout: function onShowAbout() {
    if (!this._initAbout) {
      var pane = CompLogic.crAbout(this);
      this._initAbout = true;
      this.trigger(_ComponentActions.T.SHOW_PANE, pane);
    } else {
      this.trigger(_ComponentActions.T.SHOW_ABOUT);
    }
  },
  onChangeTheme: function onChangeTheme() {
    this.trigger(_ComponentActions.T.CHANGE_THEME);
  }
};

exports.default = ComponentSlice;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\stores\ComponentSlice.js.map