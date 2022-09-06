import { T } from '../actions/ComponentActions';

import Factory from '../logic/Factory';
import {
  MD_EXCEPTION
} from '../../constants/Type';

const DF_WATCH_PANE_ID = 'P_WD_W';

const DialogLogic = {
  showDialog(slice, itemConf){
    const { type } = itemConf;
    if (slice[type]) {
      return { key: type };
    } else {
      const Comp = Factory.crDialog(itemConf);
      slice[type] = true
      return { key: type, Comp };
    }
  }
};

const PaneLogic = {
  showPane(slice, itemConf, store){
    const { type, paneId } = itemConf;
    if (slice[type]){
      return { id: paneId };
    } else {
      const Comp = Factory.crPane(itemConf, store)
      slice[type] = true;
      return { Comp };
    }
  }
};

const CompLogic = {
  crAbout(store) {
    const Comp = Factory.crAbout(store)
    return { Comp };
  }
};

const ComponentSlice = {
  dialogInit: {},
  paneInit: {},

  showAlertDialog(option={}){
   option.modalDialogType = MD_EXCEPTION;
   this.trigger(T.SHOW_MODAL_DIALOG, option);
 },

  onShowBrowser(browserId) {
    this.trigger(T.SHOW_BROWSER, browserId)
  },

  onShowDialog(itemConf, event){
    const r = DialogLogic.showDialog(this.dialogInit, itemConf);
    this.trigger(T.SHOW_DIALOG, r)
  },

  onShowModalDialog(modalDialogType, option={}){
    option.modalDialogType = modalDialogType
    this.trigger(T.SHOW_MODAL_DIALOG, option)
  },

  onShowPane(itemConf){
    const pane = PaneLogic.showPane(this.paneInit, itemConf, this);
    //const browser = BrowserLogic.updateBadge(this.hmBrowser, itemConf);
    this.trigger(T.SHOW_PANE, pane)
    this.trigger(T.CLOSE_ABOUT)
    //this.trigger(TYPES.UPDATE_BROWSER, browser)
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

  onShowAbout(){
    if (!this._initAbout) {
      const pane = CompLogic.crAbout(this);
      this._initAbout = true
      this.trigger(T.SHOW_PANE, pane)
    } else {
      this.trigger(T.SHOW_ABOUT)
    }
  },

  onChangeTheme(themeName){
    this.trigger(T.CHANGE_THEME, themeName)
  },

  onClickWatchItem(item){
    item.id = item.id || DF_WATCH_PANE_ID;
    this.trigger(T.CLICK_WATCH_ITEM, item)
  }

}

export default ComponentSlice
