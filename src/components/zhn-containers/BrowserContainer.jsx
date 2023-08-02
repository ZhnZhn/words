import MenuBrowser from '../zhn-browsers/MenuBrowser';
import WatchBrowser from '../watch-browser/WatchBrowser';

const CL_ROOT = "hrz-container";

const BrowserContainer = ({
  browserId,
  useBrowser,
  useWatchList,
  onClickItem,
  onClickWatchItem
}) => (
  <div className={CL_ROOT}>
    <MenuBrowser
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
  </div>
);

export default BrowserContainer
