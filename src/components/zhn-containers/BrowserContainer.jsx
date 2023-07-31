import MenuBrowser from '../zhn-browsers/MenuBrowser';
import WatchBrowser from '../watch-browser/WatchBrowser';
import DialogContainer from './DialogContainer';

const CL_ROOT = "hrz-container";

const BrowserContainer = ({
  store,
  browserId,
  useBrowser,
  useDialog,
  onClickItem,
  updateWatchAction,
  onClickWatchItem
}) => (
  <div className={CL_ROOT}>
    <MenuBrowser
      store={store}
      browserId={browserId}
      useBrowser={useBrowser}
      onClickItem={onClickItem}
    />
    <WatchBrowser
      caption="Watch Words"
      store={store}
      useBrowser={useBrowser}
      isInitShow={false}
      browserId="WATCH_ID"
      updateAction={updateWatchAction}
      onClickItem={onClickWatchItem}
    />
    <DialogContainer
      maxDialog={3}
      useDialog={useDialog}
    />
  </div>
);

export default BrowserContainer
