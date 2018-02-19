import Reflux from 'reflux'

export const T = {
  SHOW_BROWSER: 'showBrowser',

  SHOW_DIALOG: 'showDialog',

  SHOW_MODAL_DIALOG: 'showModalDialog',

  SHOW_PANE: 'showPane',
  TOGGLE_PANE: 'togglePane',
  CLOSE_PANE: 'closePane',

  CHANGE_THEME: 'changeTheme',

  SHOW_ABOUT: 'showAbout',

  UPDATE_WATCH_BROWSER: 'updateWatchBrowser'
};

const Actions = Reflux.createActions({
  [T.SHOW_BROWSER]: {},
  [T.SHOW_DIALOG]: {},
  [T.SHOW_MODAL_DIALOG]: {},
  [T.SHOW_PANE]: {},
  [T.TOGGLE_PANE]: {},
  [T.CLOSE_PANE]: {},
  [T.CHANGE_THEME]: {},
  [T.SHOW_ABOUT]: {}
});

export default Actions
