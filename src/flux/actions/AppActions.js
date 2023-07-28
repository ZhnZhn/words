import Settings from '../stores/Settings';
import {
  ComponentActions
} from './ComponentActions';

import {
  showBrowser,
  showMd
} from '../useCompStore';

const WORDS_BROWSER_ID = 'WORDS_DIFINITION';
const WATCH_BROWSER_ID = 'WATCH_ID';

const {
  showPane,
  showAbout,
  changeTheme,
  clickWatchItem
} = ComponentActions;

const _fShowBrowser = id => showBrowser.bind(null, id);

const AppActions = {
  showAbout,

  headerActions: {
    onDefinition: showPane.bind(null, {
      paneCaption: "Word Definition",
      type: "WD_W",
      paneId: "P_WD_W"
    }),
    onSources: _fShowBrowser(WORDS_BROWSER_ID),
    onWatch:  _fShowBrowser(WATCH_BROWSER_ID),
    onSettings: showMd.bind(
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
