import { useEffect } from './uiApi';

import { uiThemeStore } from '../flux/uiThemeStore';
import {
  useBrowser,
  usePane,
  useDialog
} from '../flux/useCompStore';
import {
  useWatchList
} from '../flux/watch-list/useWatchListStore';

import ThemeContext from './hoc/ThemeContext';

import RouterModalDialog from './dialogs/RouterModalDialog';
import HeaderBar from './header/HeaderBar';

import BrowserContainer from './zhn-containers/BrowserContainer';
import HrzContainer from './zhn-containers/HrzContainer';
import ModalDialogContainer from './zhn-containers/ModalDialogContainer';

const CL_COMP = "component-container"
, CL_ITEMS = "items-container"
, WORDS_BROWSER_ID = 'WORDS_DIFINITION';

const AppWords = ({
  store,
  action
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    action.showAbout()
    action.initWatchList()
  }, [])
  // action
  /*eslint-enable react-hooks/exhaustive-deps */

  const {
    headerActions,
    browserActions
  } = action;

  return (
    <ThemeContext.Provider value={uiThemeStore}>
      <div>
        <HeaderBar
          store={store}
          {...headerActions}
        />
        <div className={CL_COMP}>
           <BrowserContainer
              store={store}
              browserId={WORDS_BROWSER_ID}
              useBrowser={useBrowser}
              useDialog={useDialog}
              useWatchList={useWatchList}
              {...browserActions}
           />
           <HrzContainer
              className={CL_ITEMS}
              usePane={usePane}
           />
        </div>
        <ModalDialogContainer
           store={store}
           router={RouterModalDialog}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default AppWords
