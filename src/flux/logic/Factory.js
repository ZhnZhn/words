import { createElement } from '../../components/uiApi';

import throttleFn from '../../utils/throttleFn';

import {
  showMd,
  showPane
} from '../useCompStore';

import {
  CAT_CLICK_WATCH_ITEM
} from '../actions/ComponentActions';
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
  selectPane
) => {
  const {
    type,
    paneType,
    paneCaption,
    paneId,
  } = itemConf
  , {
    Pane,
    Input,
    Item
  } = RouterPane.getElement(paneType);
  return createElement(Pane, {
    key: type,
    id: paneId,
    itemConf: itemConf,
    paneCaption,
    store,
    compStore,
    selectPane,
    Input,
    Item,
    updateAction: IAT_LOAD_ITEM_COMPLETED,
    watchAction: CAT_CLICK_WATCH_ITEM,
    onRemoveItems: ItemActions.removeItems.bind(null, paneId),
    onRemoveUnder: ItemActions.removeItemsUnder,
    onCloseItem: ItemActions.removeItem,
    onLoad: _loadItem,
    onAddToWatch: showMd.bind(null, 'AW')
  });
}

export const crAbout = (
  store,
  selectAbout
) => createElement(About, {
  key: 'About',
  id: 'About',
  store,
  selectAbout
})
