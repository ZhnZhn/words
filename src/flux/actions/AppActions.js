import { bindTo } from '../storeApi';
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

const _fShowBrowser = id => bindTo(showBrowser, id);

const AppActions = {
  showAbout,
  initWatchList,

  headerActions: {
    onDefinition: bindTo(showPane, {
      paneCaption: "Word Definition",
      type: "WD_W",
      paneId: "P_WD_W"
    }),
    onSources: _fShowBrowser(WORDS_BROWSER_ID),
    onWatch: _fShowBrowser(WATCH_BROWSER_ID),
    onSettings: bindTo(showMd,
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
