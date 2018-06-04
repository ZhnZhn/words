
import Settings from '../stores/Settings'
import Action from './ComponentActions'

const WORDS_BROWSER_ID = 'WORDS_DIFINITION';
const WATCH_BROWSER_ID = 'WATCH_ID';

const {
  showBrowser,
  showPane,
  showModalDialog,
  showAbout,
  changeTheme,
  clickWatchItem
} = Action;

const _fShowBrowser = id => showBrowser.bind(null, id);

const AppActions = {
  showAbout: showAbout,

  headerActions: {
    onDefinition: showPane.bind(null, {
      paneCaption: "Word Definition",
      type: "WD_W",
      paneId: "P_WD_W"
    }),
    onSources: _fShowBrowser(WORDS_BROWSER_ID),
    onWatch:  _fShowBrowser(WATCH_BROWSER_ID),
    onSettings: showModalDialog.bind(
      null, "SETTINGS", Settings.settingFn()
    ),
    onAbout: showAbout,
    onChangeTheme: changeTheme
  },

  browserActions: {
    onClickItem: showPane,
    onClickWatchItem: clickWatchItem
  }
};

export default AppActions
