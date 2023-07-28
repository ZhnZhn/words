import Reflux from 'reflux-core';

export const CAT_SHOW_BROWSER = 'showBrowser'
export const CAT_SHOW_DIALOG = 'showDialog'

export const CAT_SHOW_PANE = 'showPane'
export const CAT_TOGGLE_PANE = 'togglePane'
export const CAT_CLOSE_PANE = 'closePane'

export const CAT_SHOW_ABOUT = 'showAbout'
export const CAT_CLOSE_ABOUT = 'closeAbout'

export const CAT_UPDATE_WATCH_BROWSER = 'updateWatchBrowser'
export const CAT_CLICK_WATCH_ITEM = 'clickWatchItem'

export const ComponentActions = Reflux.createActions({
  [CAT_SHOW_BROWSER]: {},
  [CAT_SHOW_DIALOG]: {},
  [CAT_SHOW_PANE]: {},
  [CAT_CLOSE_PANE]: {},
  [CAT_SHOW_ABOUT]: {},
  [CAT_CLICK_WATCH_ITEM]: {}
})
