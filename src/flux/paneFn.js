import {
  crPane,
  crAbout
} from './logic/Factory';

import Store from './stores/Store';

export const ABOUT_PANE_ID = 'about';

const _hmPaneId = Object.create(null);
export const crPaneOption = (
  itemConf,
  compStore,
  selectPane,
  selectWatch
) => {
    const {
      paneId
    } = itemConf;
    if (_hmPaneId[paneId]){
      return { id: paneId };
    } else {
      const Comp = paneId === ABOUT_PANE_ID
       ? crAbout(
           ABOUT_PANE_ID,
           compStore,
           selectPane
         )
       : crPane(
           itemConf,
           Store,
           compStore,
           selectPane,
           selectWatch
       );
      _hmPaneId[paneId] = true;
      return { Comp };
    }
}
