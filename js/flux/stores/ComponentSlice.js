"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ComponentActions = require("../actions/ComponentActions");

var _Factory = _interopRequireDefault(require("../logic/Factory"));

var _Type = require("../../constants/Type");

var DF_WATCH_PANE_ID = 'P_WD_W';
var DialogLogic = {
  showDialog: function showDialog(slice, itemConf) {
    var type = itemConf.type;

    if (slice[type]) {
      return {
        key: type
      };
    } else {
      var Comp = _Factory["default"].crDialog(itemConf);

      slice[type] = true;
      return {
        key: type,
        Comp: Comp
      };
    }
  }
};
var PaneLogic = {
  showPane: function showPane(slice, itemConf, store) {
    var type = itemConf.type,
        paneId = itemConf.paneId;

    if (slice[type]) {
      return {
        id: paneId
      };
    } else {
      var Comp = _Factory["default"].crPane(itemConf, store);

      slice[type] = true;
      return {
        Comp: Comp
      };
    }
  }
};
var CompLogic = {
  crAbout: function crAbout(store) {
    var Comp = _Factory["default"].crAbout(store);

    return {
      Comp: Comp
    };
  }
};
var ComponentSlice = {
  dialogInit: {},
  paneInit: {},
  showAlertDialog: function showAlertDialog(option) {
    if (option === void 0) {
      option = {};
    }

    option.modalDialogType = _Type.MD_EXCEPTION;
    this.trigger(_ComponentActions.T.SHOW_MODAL_DIALOG, option);
  },
  onShowBrowser: function onShowBrowser(browserId) {
    this.trigger(_ComponentActions.T.SHOW_BROWSER, browserId);
  },
  onShowDialog: function onShowDialog(itemConf, event) {
    var r = DialogLogic.showDialog(this.dialogInit, itemConf);
    this.trigger(_ComponentActions.T.SHOW_DIALOG, r);
  },
  onShowModalDialog: function onShowModalDialog(modalDialogType, option) {
    if (option === void 0) {
      option = {};
    }

    option.modalDialogType = modalDialogType;
    this.trigger(_ComponentActions.T.SHOW_MODAL_DIALOG, option);
  },
  onShowPane: function onShowPane(itemConf) {
    var pane = PaneLogic.showPane(this.paneInit, itemConf, this); //const browser = BrowserLogic.updateBadge(this.hmBrowser, itemConf);

    this.trigger(_ComponentActions.T.SHOW_PANE, pane);
    this.trigger(_ComponentActions.T.CLOSE_ABOUT); //this.trigger(TYPES.UPDATE_BROWSER, browser)
  },

  /*
  onTogglePane(itemConf){
    //const browser = BrowserLogic.toggleBadge(this.hmBrowser, itemConf);
    const pane = PaneLogic.togglePane(itemConf);
    this.trigger(T.TOGGLE_PANE, pane)
    //this.trigger(TYPES.UPDATE_BROWSER, browser)
  },
  */

  /*
  onClosePane(itemConf){
    //const r = BrowserLogic.updateBadge(this.hmBrowser, itemConf, {isOpen:false});
    //this.trigger(TYPES.UPDATE_BROWSER, r)
  },
  */
  onShowAbout: function onShowAbout() {
    if (!this._initAbout) {
      var pane = CompLogic.crAbout(this);
      this._initAbout = true;
      this.trigger(_ComponentActions.T.SHOW_PANE, pane);
    } else {
      this.trigger(_ComponentActions.T.SHOW_ABOUT);
    }
  },
  onChangeTheme: function onChangeTheme(themeName) {
    this.trigger(_ComponentActions.T.CHANGE_THEME, themeName);
  },
  onClickWatchItem: function onClickWatchItem(item) {
    item.id = item.id || DF_WATCH_PANE_ID;
    this.trigger(_ComponentActions.T.CLICK_WATCH_ITEM, item);
  }
};
var _default = ComponentSlice;
exports["default"] = _default;
//# sourceMappingURL=ComponentSlice.js.map