//import PropTypes from 'prop-types'
import {
  useState,
  useMemo,
} from '../uiApi';
import {
  CL_MENU_MORE,
  crStyle2
} from '../styleFn';

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
import { ModalSliderMemoIsShow } from '../zhn-modal-slider/ModalSlider';
import {
  crMenuModelProps,
  crMenuItem
} from '../zhn-modal-slider/menuModelFn';

import EditBar from './EditBar';
import WatchGroups from './WatchGroups';

const S_BROWSER = {
  paddingRight: 0
}
, S_BR_CAPTION = {
  display: 'flex'
}
, S_SP = {
  height: '92%',
  paddingRight: 10,
  overflowY: 'auto'
}
, S_SP_SHORT = {
  height: 'calc(100% - 70px)'
}

const FN_NOOP = () => {};

const _saveWatchList = () => setTimeout(saveWatchList, 250)

const _crModelMore = (
  toggleEditMode
) => ({
  ...crMenuModelProps(180),
  p0: [
    crMenuItem('Edit mode', toggleEditMode, !0, !1),
    crMenuItem('Save watch words', _saveWatchList)
  ]
});

const WatchBrowser = ({
  isInitShow,
  caption,
  browserId,
  useBrowser,
  useWatchList,
  onClickItem=FN_NOOP
}) => {
  const [
    isMenuMore,
    showMenuMore,
    closeMenuMore
  ] = useBool()
  , [
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
  ] = useState(getWatchList)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _MODEL_MORE = useMemo(
    () => _crModelMore(_toggleEditMode),
    []
  );
  //_toggleEditMode
  /*eslint-enable react-hooks/exhaustive-deps */

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

  const { groups } = watchList || {};

  return (
    <Browser
      isShow={isShow}
      style={S_BROWSER}
    >
      <ModalSliderMemoIsShow
        isShow={isMenuMore}
        className={CL_MENU_MORE}
        model={_MODEL_MORE}
        onClose={closeMenuMore}
      />
      <BrowserCaption
        rootStyle={S_BR_CAPTION}
        caption={caption}
        onMore={showMenuMore}
        onClose={_hHide}
      />
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
