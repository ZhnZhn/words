import MenuBrowser from '../zhn-browsers/MenuBrowser';
import WatchBrowser from '../watch-browser/WatchBrowser';
import DialogContainer from './DialogContainer';

const CL_ROOT = "hrz-container";

const BrowserContainer = ({
  store,
  browserId,
  showBrowserAction,
  showDialogAction,
  onClickItem,
  updateWatchAction,
  onClickWatchItem
}) => (
  <div className={CL_ROOT}>
    <MenuBrowser
      store={store}
      browserId={browserId}
      showAction={showBrowserAction}
      onClickItem={onClickItem}
    />
    <WatchBrowser
      caption="Watch Words"
      store={store}
      isInitShow={false}
      browserType="WATCH_ID"
      showAction={showBrowserAction}
      updateAction={updateWatchAction}
      onClickItem={onClickWatchItem}
    />
    <DialogContainer
      maxDialog={3}
      store={store}
      showAction={showDialogAction}
    />
  </div>
);

export default BrowserContainer
