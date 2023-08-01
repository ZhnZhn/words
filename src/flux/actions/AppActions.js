import Settings from '../stores/Settings';

import {
  showBrowser,
  showMd,
  showPane,
  showAbout,
  clickWatchItem
} from '../compStore';
import {
  initWatchList
} from '../watch-list/watchListStore';

const WORDS_BROWSER_ID = 'WORDS_DIFINITION';
const WATCH_BROWSER_ID = 'WATCH_ID';

const _fShowBrowser = id => showBrowser.bind(null, id);

const AppActions = {
  showAbout,
  initWatchList,

  headerActions: {
    onDefinition: showPane.bind(null, {
      paneCaption: "Word Definition",
      type: "WD_W",
      paneId: "P_WD_W"
    }),
    onSources: _fShowBrowser(WORDS_BROWSER_ID),
    onWatch: _fShowBrowser(WATCH_BROWSER_ID),
    onSettings: showMd.bind(null,
      "SETTINGS",
      Settings.settingFn()
    ),
    onAbout: showAbout
  },

  browserActions: {
    onClickItem: showPane,
    onClickWatchItem: clickWatchItem
  }
};

export default AppActions
