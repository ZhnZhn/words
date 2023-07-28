import { useEffect } from './uiApi';

import { uiThemeStore } from '../flux/uiThemeStore';
import {
  useCompStore,
  selectBrowser,
  selectDialog
} from '../flux/useCompStore';

import ThemeContext from './hoc/ThemeContext';

import {
  CAT_SHOW_PANE,
  CAT_UPDATE_WATCH_BROWSER
} from '../flux/actions/ComponentActions';

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
              compStore={useCompStore}
              browserId={WORDS_BROWSER_ID}
              selectBrowser={selectBrowser}
              selectDialog={selectDialog}            
              updateWatchAction={CAT_UPDATE_WATCH_BROWSER}
              {...browserActions}
           />
           <HrzContainer
              className={CL_ITEMS}
              store={store}
              addAction={CAT_SHOW_PANE}
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
