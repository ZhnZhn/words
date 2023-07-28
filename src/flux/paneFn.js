import {
  crPane,
  crAbout
} from './logic/Factory';

import Store from './stores/Store';

export const crPaneOption = (
  slice,
  itemConf,
  compStore,
  selectPane,
  selectWatch
) => {
    const {
      type,
      paneId
    } = itemConf;
    if (slice[type]){
      return { id: paneId };
    } else {
      const Comp = crPane(
        itemConf,
        Store,
        compStore,
        selectPane,
        selectWatch
      );
      slice[type] = true;
      return { Comp };
    }
}

export const crAboutOption = (
  store,
  selectAbout
) => {
  const Comp = crAbout(store, selectAbout);
  return { Comp };
}
