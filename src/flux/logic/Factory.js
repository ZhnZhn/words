import { createElement } from '../../components/uiApi';

import throttleFn from '../../utils/throttleFn';

import {
  CAT_SHOW_PANE,
  CAT_TOGGLE_PANE,
  CAT_SHOW_ABOUT,
  CAT_CLOSE_ABOUT,
  CAT_CLICK_WATCH_ITEM,
  ComponentActions
} from '../actions/ComponentActions';
import {
  IAT_LOAD_ITEM_COMPLETED,
  ItemActions
} from '../actions/ItemActions';

import RouterDialog from '../../components/dialogs/RouterDialog';
import RouterPane from '../../components/panes/RouterPane';
import About from '../../components/about/About';

const {
  showPane,
  closePane,
  showModalDialog
} = ComponentActions;

const _addToWatch = showModalDialog.bind(null, 'AW')

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
  store
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
    Input,
    Item,
    updateAction: IAT_LOAD_ITEM_COMPLETED,
    showAction: CAT_SHOW_PANE,
    toggleAction: CAT_TOGGLE_PANE,
    watchAction: CAT_CLICK_WATCH_ITEM,
    onRemoveItems: ItemActions.removeItems.bind(null, paneId),
    onRemoveUnder: ItemActions.removeItemsUnder,
    onCloseItem: ItemActions.removeItem,
    onClose: closePane.bind(null, itemConf),
    onLoad: _loadItem,
    onAddToWatch: _addToWatch
  });
}

export const crAbout = (
  store
) => createElement(About, {
  key: 'About',
  id: 'About',
  showAction: CAT_SHOW_ABOUT,
  closeAction: CAT_CLOSE_ABOUT,
  store
})
