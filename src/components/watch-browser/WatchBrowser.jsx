//import PropTypes from 'prop-types'
import { useState } from '../uiApi';
import { crStyle2 } from '../styleFn';

import useToggle from '../hooks/useToggle';
import useBool from '../hooks/useBool';

import {
  getWatchList,
  saveWatchList,
  showDialogEditGroups,
  showDialogEditLists
} from './Handlers';

import Browser from '../zhn/Browser';
import BrowserCaption from '../zhn/BrowserCaption';
import ScrollPane from '../zhn/ScrollPane';
import CircleButton from '../zhn/button/CircleButton';

import EditBar from './EditBar';
import WatchGroups from './WatchGroups';

const S_BROWSER = {
  paddingRight: 0
}
, S_BT_CIRCLE = {
  marginLeft: 20
}
, S_SP = {
  height: '92%',
  paddingRight: 10,
  overflowY: 'auto'
}
, S_SP_SHORT = {
  height: 'calc(100% - 70px)'
}

const T_S = "Click to save to LocalStorage"
, T_E_V = "Click to toggle edit mode E/V";

const FN_NOOP = () => {};

const WatchBrowser = ({
  isInitShow,
  caption,
  browserId,
  useBrowser,
  useWatchList,
  onClickItem=FN_NOOP
}) => {
  const [
    isModeEdit,
    _toggleEditMode
  ] = useToggle()
  , [
    isShow,
    _hShow,
    _hHide
  ] = useBool(isInitShow)
  , [
    watchList,
    setWatchList
  ] = useState(getWatchList);

  useBrowser(browser => {
    if (browser && browserId === browser.id) {
      _hShow()
    }
  })
  useWatchList(watchList => {
    if (watchList) {
      setWatchList(watchList)
    }
  })

  const _captionEV = isModeEdit ? 'V' : 'E'
  , { groups } = watchList || {};

  return (
    <Browser
      isShow={isShow}
      style={S_BROWSER}
    >
      <BrowserCaption
        caption={caption}
        onClose={_hHide}
      >
        <CircleButton
          caption="S"
          title={T_S}
          style={S_BT_CIRCLE}
          onClick={saveWatchList}
        />
        <CircleButton
          caption={_captionEV}
          title={T_E_V}
          style={S_BT_CIRCLE}
          onClick={_toggleEditMode}
        />
      </BrowserCaption>
      <EditBar
        isShow={isModeEdit}
        onClickGroup={showDialogEditGroups}
        onClickList={showDialogEditLists}
      />
      <ScrollPane
        style={crStyle2(S_SP, isModeEdit && S_SP_SHORT)}
      >
        <WatchGroups
          isModeEdit={isModeEdit}
          groups={groups}
          onClickItem={onClickItem}
       />
      </ScrollPane>
   </Browser>
  );
}

/*
WatchBrowser.propTypes = {
  caption: PropTypes.string,
  isInitShow: PropTypes.bool,
  store: PropTypes.object,
  browserType: PropTypes.string,
  showAction: PropTypes.string,
  //updateAction: PropTypes.string,
  onClickItem: PropTypes.func
}
*/

export default WatchBrowser
