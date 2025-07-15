import {
  useRef,
  useCallback,
  useMemo,
  getRefValue,
  //setRefValue
} from '../uiApi';

import { CL_BT_FLAT_DIV } from '../styleFn';

import useToggle from '../hooks/useToggle';

import ModalButton from '../zhn/ModalButton';
import FlatButton from '../zhn/FlatButton';
import SvgSettings from '../zhn/svg/SvgSettings';
import SvgInfo from '../zhn/svg/SvgInfo';

import PaneTopics from './PaneTopics';
import ProgressLoading from './ProgressLoading';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import LimitLabel from './LimitLabel';
import { APP_TITLE } from '../titles';

const CL_QUERY_ITEM = "row__topic"
, CL_HEADER = "header"
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
}
, _crTopicItem = (
  caption,
  onClick
) => ({
  caption,
  onClick
});

const HeaderBar = ({
  onSettings,
  onAbout,
  onDefinition,
  onSources,
  onWatch
}) => {
  const _topicItems = useMemo(() => [
    _crTopicItem('Words Definition', onDefinition),
    _crTopicItem('Words Sources', onSources),
    _crTopicItem('Watch Lists', onWatch)
  ], [onDefinition, onSources, onWatch])
  , [
    isTopics,
    toggleTopics
  ] = useToggle()
  , _refTopicsEl = useRef()
  , _hCloseTopics = useCallback(evt => {
    const _el = getRefValue(_refTopicsEl);
    if (_el && !_el.contains(evt.target)) {
      toggleTopics(!1)
    }
  }, [toggleTopics]);

  return (
    <header className={CL_HEADER}>
      <PaneTopics
        className={CL_PANEL_BROWSER}
        clItem={CL_QUERY_ITEM}
        isShow={isTopics}
        items={_topicItems}
        onClose={_hCloseTopics}
      />
       <ProgressLoading />
       <IconAppLogo
         className={CL_ICON_APP}
         title={APP_TITLE}
       />
       <AppLabel
         className={CL_LABEL_APP}
         caption={APP_TITLE}
       />
       <span className={CL_BROWSER_BTS}>
         <ModalButton
            refEl={_refTopicsEl}
            caption="Topics"
            title="Topics"
            accessKey="t"
            onClick={toggleTopics}
         >
          <span className={CL_ARROW_DOWN} />
        </ModalButton>
       </span>
       <div className={CL_BTS}>
         <FlatButton
             className={CL_SETTINGS}
             clDiv={CL_BT_FLAT_DIV}
             divStyle={S_DIV}
             title="User Settings Dialog"
             accessKey="s"
             onClick={onSettings}
          >
            <SvgSettings style={S_SETTINGS} />
          </FlatButton>
          <FlatButton
              className={CL_BT_ABOUT}
              clDiv={CL_BT_FLAT_DIV}
              divStyle={S_DIV}
              title="About Words"
              accessKey="a"
              onClick={onAbout}
          >
            <SvgInfo style={S_SETTINGS}/>
          </FlatButton>
       </div>
       <LimitLabel />
    </header>
  );
}

export default HeaderBar
