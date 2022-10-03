import Reflux from 'reflux-core'

import {
  ComponentActions
} from '../actions/ComponentActions'
import ItemActions from '../actions/ItemActions'
import SettingActions from '../actions/SettingActions'
import WatchActions from '../actions/WatchActions';

import ComponentSlice from './ComponentSlice'
import ItemSlice from './ItemSlice'
import SettingSlice from './SettingSlice'
import WithLoading from './WithLoading'

import WatchListSlice from '../watch-list/WatchListSlice';

const Store = Reflux.createStore({
  listenables: [
    ComponentActions,
    ItemActions,
    SettingActions,
    WatchActions
  ],

  init(){
    this.initWatchList()
  },

  ...ComponentSlice,
  ...ItemSlice,
  ...SettingSlice,
  ...WatchListSlice,
  ...WithLoading

});

export default Store
