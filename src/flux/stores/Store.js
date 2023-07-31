import Reflux from 'reflux-core';

import {
  ItemActions
} from '../actions/ItemActions';
import {
  WatchActions
} from '../actions/WatchActions';

import ItemSlice from './ItemSlice';
import WithLoading from './WithLoading';

import WatchListSlice from '../watch-list/WatchListSlice';

const Store = Reflux.createStore({
  listenables: [
    ItemActions,
    WatchActions
  ],

  init(){
    this.initWatchList()
  },

  ...ItemSlice,
  ...WatchListSlice,
  ...WithLoading

});

export default Store
