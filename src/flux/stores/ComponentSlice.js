import {
  CAT_SHOW_PANE,
  CAT_SHOW_ABOUT,
  CAT_CLOSE_ABOUT,
  CAT_CLICK_WATCH_ITEM
} from '../actions/ComponentActions';

import {
  crPane,
  crAbout
} from '../logic/Factory';

const DF_WATCH_PANE_ID = 'P_WD_W';

const PaneLogic = {
  showPane(slice, itemConf, store){
    const { type, paneId } = itemConf;
    if (slice[type]){
      return { id: paneId };
    } else {
      const Comp = crPane(itemConf, store)
      slice[type] = true;
      return { Comp };
    }
  }
};

const CompLogic = {
  crAbout(store) {
    const Comp = crAbout(store)
    return { Comp };
  }
};

const ComponentSlice = {
  paneInit: {},

  onShowPane(itemConf){
    const pane = PaneLogic.showPane(this.paneInit, itemConf, this);
    this.trigger(CAT_SHOW_PANE, pane)
    this.trigger(CAT_CLOSE_ABOUT)
  },

  onShowAbout(){
    if (!this._initAbout) {
      const pane = CompLogic.crAbout(this);
      this._initAbout = true
      this.trigger(CAT_SHOW_PANE, pane)
    } else {
      this.trigger(CAT_SHOW_ABOUT)
    }
  },

  onClickWatchItem(item){
    item.id = item.id || DF_WATCH_PANE_ID;
    this.trigger(CAT_CLICK_WATCH_ITEM, item)
  }

}

export default ComponentSlice
