import {
  CAT_CLICK_WATCH_ITEM
} from '../actions/ComponentActions';

const DF_WATCH_PANE_ID = 'P_WD_W';

const ComponentSlice = {
  onClickWatchItem(item){
    item.id = item.id || DF_WATCH_PANE_ID;
    this.trigger(CAT_CLICK_WATCH_ITEM, item)
  }
}

export default ComponentSlice
