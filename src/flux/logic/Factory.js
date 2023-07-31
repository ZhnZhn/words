import { createElement } from '../../components/uiApi';
import throttleFn from '../../utils/throttleFn';

import fCrUse from '../fCrUse';
import {
  showMd,
  showPane
} from '../useCompStore';

import {
  IAT_LOAD_ITEM_COMPLETED,
  ItemActions
} from '../actions/ItemActions';

import RouterDialog from '../../components/dialogs/RouterDialog';
import RouterPane from '../../components/panes/RouterPane';
import About from '../../components/about/About';


const _loadItem = throttleFn(
  ItemActions.loadItem,
  2500
);

export const crDialog = (
  itemConf
) => {
  const {
    type,
    dialogType,
    dialogProps
  } = itemConf
  , El = RouterDialog.getElement(dialogType);
  return createElement(El, {
    key: type,
    type: type,
    itemConf: itemConf,
    ...dialogProps,
    onShow: showPane.bind(null, itemConf),
    onLoad: _loadItem
  });
}

export const crPane = (
  itemConf,
  store,
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
    store,
    usePane: fCrUse(compStore, selectPane),
    useWatch: fCrUse(compStore, selectWatch),
    Input,
    Item,
    updateAction: IAT_LOAD_ITEM_COMPLETED,
    onRemoveItems: ItemActions.removeItems.bind(null, paneId),
    onRemoveUnder: ItemActions.removeItemsUnder,
    onCloseItem: ItemActions.removeItem,
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
