import Reflux from 'reflux'

import ComponentActions from '../actions/ComponentActions'
import ItemActions from '../actions/ItemActions'
import WatchActions from '../actions/WatchActions';

import ComponentSlice from './ComponentSlice'
import ItemSlice from './ItemSlice'
import WithLoading from './WithLoading'

import WatchListSlice from '../watch-list/WatchListSlice';

const Store = Reflux.createStore({
  listenables: [
    ComponentActions,
    ItemActions,
    WatchActions
  ],
  
  init(){
    this.initWatchList()
  },

  ...ComponentSlice,
  ...ItemSlice,
  ...WatchListSlice,
  ...WithLoading

});

export default Store
