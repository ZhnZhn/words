import MenuBrowser from '../zhn-browsers/MenuBrowser';
import WatchBrowser from '../watch-browser/WatchBrowser';
import DialogContainer from './DialogContainer';

const CL_ROOT = "hrz-container";

const BrowserContainer = ({
  store,
  compStore,
  browserId,
  selectBrowser,
  selectDialog,
  onClickItem,
  updateWatchAction,
  onClickWatchItem
}) => (
  <div className={CL_ROOT}>
    <MenuBrowser
      store={store}
      compStore={compStore}
      browserId={browserId}
      selectBrowser={selectBrowser}
      onClickItem={onClickItem}
    />
    <WatchBrowser
      caption="Watch Words"
      store={store}
      compStore={compStore}
      isInitShow={false}
      browserId="WATCH_ID"
      selectBrowser={selectBrowser}
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
