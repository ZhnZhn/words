//import PropTypes from 'prop-types'
import {
  crStyle2,
  useState
} from '../uiApi';

import useToggle from '../hooks/useToggle';
import useBool from '../hooks/useBool';

import useTheme from '../hoc/useTheme';
import styleConfig from '../styles/MenuBrowserStyle';

import {
  getWatchList,
  saveWatchList,
  showDialogEditGroups,
  showDialogEditLists
} from './Handlers';

import A from '../Comp';
import EditBar from './EditBar';
import WatchGroups from './WatchGroups'

const S_BROWSER = {
  paddingRight: 0
}
, S_BT_CIRCLE = {
  position: 'relative',
  top: -2,
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

  const TS = useTheme(styleConfig)
  , _spStyle = crStyle2(S_SP, isModeEdit && S_SP_SHORT)
  , _captionEV = isModeEdit ? 'V' : 'E'
  , { groups } = watchList || {};

  return (
    <A.Browser
       isShow={isShow}
       style={{...S_BROWSER, ...TS.BROWSER}}
    >
       <A.BrowserCaption
         rootStyle={TS.BROWSER_CAPTION}
         caption={caption}
         onClose={_hHide}
       >
        <A.CircleButton
          caption="S"
          title={T_S}
          style={S_BT_CIRCLE}
          onClick={saveWatchList}
        />
        <A.CircleButton
           caption={_captionEV}
           title={T_E_V}
           style={S_BT_CIRCLE}
           onClick={_toggleEditMode}
        />
      </A.BrowserCaption>
      <EditBar
         isShow={isModeEdit}
         onClickGroup={showDialogEditGroups}
         onClickList={showDialogEditLists}
      />
      <A.ScrollPane
        className={TS.CL_SCROLL_PANE}
        style={_spStyle}
      >
        <WatchGroups
          isModeEdit={isModeEdit}
          TS={TS}
          groups={groups}
          onClickItem={onClickItem}
       />
      </A.ScrollPane>
   </A.Browser>
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
