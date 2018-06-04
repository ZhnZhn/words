import React from 'react'

import throttle from '../../utils/throttle'

import ComponentActions, { T as CAT } from '../actions/ComponentActions'
import ItemActions, { T as IAT } from '../actions/ItemActions'

import RouterDialog from '../../components/dialogs/RouterDialog'
import RouterPane from '../../components/panes/RouterPane'
import About from '../../components/about/About'

const {
  showPane, closePane,
  showModalDialog
} = ComponentActions;

const _addToWatch = showModalDialog.bind(null, 'AW')

const _loadItem = throttle(
  ItemActions.loadItem,
  2500, {
    trailing: false
  });

const Factory = {
  crDialog: (itemConf) => {
    const { type, dialogType, dialogProps } = itemConf
        , El = RouterDialog.getElement(dialogType);
    return React.createElement(El, {
      key: type,
      type: type,
      itemConf: itemConf,
      ...dialogProps,
      onShow: showPane.bind(null, itemConf),
      onLoad: _loadItem
      //onLoad: loadItem
    });
  },

  crPane : (itemConf, store) => {
    const { type,
            paneType, paneCaption, paneId,
          } = itemConf
        , { Pane, Input, Item } = RouterPane.getElement(paneType)
    return React.createElement(Pane, {
      key: type,
      id: paneId,
      itemConf: itemConf,
      paneCaption,
      store,
      Input,
      Item,
      updateAction: IAT.LOAD_ITEM_COMPLETED,
      showAction: CAT.SHOW_PANE,
      toggleAction: CAT.TOGGLE_PANE,
      watchAction: CAT.CLICK_WATCH_ITEM,
      onRemoveItems: ItemActions.removeItems.bind(null, paneId),
      onRemoveUnder: ItemActions.removeItemsUnder,
      onCloseItem: ItemActions.removeItem,
      onClose: closePane.bind(null, itemConf),
      //onLoad: ItemActions.loadItem
      onLoad: _loadItem,
      onAddToWatch: _addToWatch
    });
  },

  crAbout: (store) => {
    return React.createElement(About, {
      key: 'About', id: 'About',
      showAction: CAT.SHOW_ABOUT,
      closeAction: CAT.CLOSE_ABOUT,
      store
    })
  }
};

export default Factory
