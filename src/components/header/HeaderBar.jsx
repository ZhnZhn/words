import {
  useRef,
  useCallback,
  useMemo,
  getRefValue,
  setRefValue
} from '../uiApi';

import styleConfig from './HeaderBar.Style';
import useTheme from '../hoc/useTheme';
import useToggle from '../hooks/useToggle'

import A from '../zhn-atoms/Atoms';
import PaneTopics from './PaneTopics';
import ProgressLoading from './ProgressLoading';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import LimitLabel from './LimitLabel';
import {
  APP_TITLE
} from '../titles';

const CL_HEADER = "header"
, CL_PANEL_BROWSER = `${CL_HEADER}__panel-browser`
, CL_ICON_APP = `${CL_HEADER}__icon-app`
, CL_LABEL_APP = `${CL_HEADER}__label-app`
, CL_BROWSER_BTS = `${CL_HEADER}__browser-bts`
, CL_BTS = `${CL_HEADER}__bts`
, CL_ARROW_DOWN = "arrow-down"
, CL_SETTINGS = `${CL_HEADER}__bt-settins`
, CL_BT_ABOUT = `${CL_HEADER}__bt-about`

, S_DIV = {
  paddingLeft: 6,
  paddingRight: 6
}
, S_SETTINGS = {
  verticalAlign: 'middle',
  position: 'relative',
  top: -1
};

const HeaderBar = ({
  store,
  onSettings,
  onAbout,
  onDefinition,
  onSources,
  onWatch
}) => {
  const [
    isTopics,
    toggleTopics
  ] = useToggle()
  , _topicItems = useMemo(() => [
    { caption: 'Words Definition', onClick: onDefinition },
    { caption: 'Words Sources', onClick: onSources },
    { caption: 'Watch Lists', onClick: onWatch }
  ], [onDefinition, onSources, onWatch])
  , _refTopicsEl = useRef()
  , _onRegTopics = useCallback(node => {
    setRefValue(_refTopicsEl, node)
  }, [])
  , _hCloseTopics = useCallback(evt => {
    const _el = getRefValue(_refTopicsEl);
    if (_el && !_el.contains(evt.target)) {
      toggleTopics(false)
    }
  }, [toggleTopics])
  , S = useTheme(styleConfig);

  return (
    <header className={CL_HEADER} style={S.HEADER}>
      <PaneTopics
        paneStyle={S.PANE}
        className={CL_PANEL_BROWSER}
        clItem={S.CL_QUERY_ITEM}
        isShow={isTopics}
        items={_topicItems}
        onClose={_hCloseTopics}
      />
       <ProgressLoading
         store={store}
       />
       <IconAppLogo
         className={CL_ICON_APP}
         title={APP_TITLE}
       />
       <AppLabel
         className={CL_LABEL_APP}
         caption={APP_TITLE}
       />
       <span className={CL_BROWSER_BTS}>
         <A.ModalButton
            style={S.BT.FLAT_ROOT}
            clDiv={S.BT.CL_FLAT_DIV}
            caption="Topics"
            title="Topics"
            accessKey="t"
            onClick={toggleTopics}
            onReg={_onRegTopics}
         >
          <span className={CL_ARROW_DOWN} />
        </A.ModalButton>
       </span>
       <div className={CL_BTS}>
         <A.FlatButton
             className={CL_SETTINGS}
             rootStyle={{ ...S.BT.FLAT_ROOT, ...S.BT_SETTINGS }}
             clDiv={S.BT.CL_FLAT_DIV}
             divStyle={S_DIV}
             title="User Settings Dialog"
             accessKey="s"
             onClick={onSettings}
          >
            <A.SvgSettings style={S_SETTINGS} />
          </A.FlatButton>
          <A.FlatButton
              className={CL_BT_ABOUT}
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              divStyle={S_DIV}
              title="About Words"
              accessKey="a"
              onClick={onAbout}
          >
            <A.SvgInfo style={S_SETTINGS}/>
          </A.FlatButton>
       </div>
       <LimitLabel
         store={store}
         style={S.LIMIT}
       />
    </header>
  );
}

export default HeaderBar
