import Reflux from 'reflux-core';

import {
  ItemActions
} from '../actions/ItemActions';
import {
  SettingActions
} from '../actions/SettingActions';
import {
  WatchActions
} from '../actions/WatchActions';

import ItemSlice from './ItemSlice';
import SettingSlice from './SettingSlice';
import WithLoading from './WithLoading';

import WatchListSlice from '../watch-list/WatchListSlice';

const Store = Reflux.createStore({
  listenables: [
    ItemActions,
    SettingActions,
    WatchActions
  ],

  init(){
    this.initWatchList()
  },

  ...ItemSlice,
  ...SettingSlice,
  ...WatchListSlice,
  ...WithLoading

});

export default Store
