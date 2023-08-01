import MenuBrowser from '../zhn-browsers/MenuBrowser';
import WatchBrowser from '../watch-browser/WatchBrowser';
import DialogContainer from './DialogContainer';

const CL_ROOT = "hrz-container";

const BrowserContainer = ({
  store,
  browserId,
  useBrowser,
  useDialog,
  useWatchList,
  onClickItem,
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
      isInitShow={false}
      caption="Watch Words"
      browserId="WATCH_ID"
      useBrowser={useBrowser}
      useWatchList={useWatchList}
      onClickItem={onClickWatchItem}
    />
    <DialogContainer
      maxDialog={3}
      useDialog={useDialog}
    />
  </div>
);

export default BrowserContainer
