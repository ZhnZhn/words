import { createElement } from '../../components/uiApi';
import throttleFn from '../../utils/throttleFn';

import { fCrUse } from '../storeApi';
import { showMd } from '../compStore';

import {
  loadItem,
  useMsItem,
  removeItem,
  removeItems,
  removeItemsUnder
} from '../itemStore';

import RouterPane from '../../components/panes/RouterPane';
import About from '../../components/about/About';

const _loadItem = throttleFn(
  loadItem,
  2500
);

export const crPane = (
  itemConf,
  compStore,
  selectPane,
  selectWatch
) => {
  const {
    paneType,
    paneCaption,
    paneId
  } = itemConf
  , {
    Pane,
    Input,
    Item
  } = RouterPane.getElement(paneType);
  return createElement(Pane, {
    key: paneId,
    id: paneId,
    itemConf: itemConf,
    paneCaption,
    usePane: fCrUse(compStore, selectPane),
    useWatch: fCrUse(compStore, selectWatch),
    Input,
    Item,
    useMsItem,
    onRemoveItems: removeItems.bind(null, paneId),
    onRemoveUnder: removeItemsUnder,
    onCloseItem: removeItem,
    onLoad: _loadItem,
    onAddToWatch: showMd.bind(null, 'AW')
  });
}

export const crAbout = (
  paneId,
  store,
  selectPane
) => createElement(About, {
  key: paneId,
  id: paneId,
  usePane: fCrUse(store, selectPane)
})
