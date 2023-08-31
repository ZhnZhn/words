import { useEffect } from './uiApi';

import {
  useBrowser,
  usePane
} from '../flux/compStore';
import {
  useWatchList
} from '../flux/watch-list/watchListStore';

import RouterModalDialog from './dialogs/RouterModalDialog';
import HeaderBar from './header/HeaderBar';

import BrowserContainer from './zhn-containers/BrowserContainer';
import HrzContainer from './zhn-containers/HrzContainer';
import ModalDialogContainer from './zhn-containers/ModalDialogContainer';

const CL_COMP = "component-container"
, CL_ITEMS = "items-container"
, WORDS_BROWSER_ID = 'WORDS_DIFINITION';

const AppWords = ({
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
    <div>
      <HeaderBar
        {...headerActions}
      />
      <div className={CL_COMP}>
         <BrowserContainer
            browserId={WORDS_BROWSER_ID}
            useBrowser={useBrowser}
            useWatchList={useWatchList}
            {...browserActions}
         />
         <HrzContainer
            className={CL_ITEMS}
            usePane={usePane}
         />
      </div>
      <ModalDialogContainer
         router={RouterModalDialog}
      />
    </div>
  );
};

export default AppWords
