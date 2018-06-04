import Reflux from 'reflux'

export const T = {
  SHOW_BROWSER: 'showBrowser',

  SHOW_DIALOG: 'showDialog',

  SHOW_MODAL_DIALOG: 'showModalDialog',

  SHOW_PANE: 'showPane',
  //TOGGLE_PANE: 'togglePane',
  CLOSE_PANE: 'closePane',

  CHANGE_THEME: 'changeTheme',

  SHOW_ABOUT: 'showAbout',
  CLOSE_ABOUT: 'closeAbout',

  UPDATE_WATCH_BROWSER: 'updateWatchBrowser',
  CLICK_WATCH_ITEM: 'clickWatchItem'
};

const Actions = Reflux.createActions({
  [T.SHOW_BROWSER]: {},
  [T.SHOW_DIALOG]: {},
  [T.SHOW_MODAL_DIALOG]: {},
  [T.SHOW_PANE]: {},
  //[T.TOGGLE_PANE]: {},
  [T.CLOSE_PANE]: {},
  [T.CHANGE_THEME]: {},
  [T.SHOW_ABOUT]: {},
  [T.CLICK_WATCH_ITEM]: {}
});

export default Actions
