import MenuBrowser from '../zhn-browsers/MenuBrowser';
import WatchBrowser from '../watch-browser/WatchBrowser';
import DialogContainer from './DialogContainer';

const CL_ROOT = "hrz-container";

const BrowserContainer = ({
  store,
  compStore,
  browserId,
  selectDialog,
  useBrowser,
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
      store={compStore}
      selectDialog={selectDialog}
    />
  </div>
);

export default BrowserContainer
