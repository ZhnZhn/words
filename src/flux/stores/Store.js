import Reflux from 'reflux-core';

import {
  ItemActions
} from '../actions/ItemActions';

import ItemSlice from './ItemSlice';
import WithLoading from './WithLoading';

const Store = Reflux.createStore({
  listenables: [
    ItemActions
  ],

  ...ItemSlice,
  ...WithLoading
});

export default Store
