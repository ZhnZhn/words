import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './HeaderBar.Style'

import A from '../zhn-atoms/Atoms'
import PaneTopics from './PaneTopics'
import ProgressLoading from './ProgressLoading'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import LimitLabel from './LimitLabel'
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


class HeaderBar extends Component {

  constructor(props){
    super(props)

    const { onDefinition, onSources, onWatch } = props;
    this._topicItems = [
      { caption: 'Words Definition', onClick: onDefinition },
      { caption: 'Words Sources', onClick: onSources },
      { caption: 'Watch Lists', onClick: onWatch },
    ]

    this.state = {
      isTopics: false
    }
  }

  _onRegTopics = (node) => {
    this.topicsNode = node
  }
  _hClickTopics = () => {
    this.setState(prevState => ({
      isTopics: !prevState.isTopics
    }))
  }
  _hCloseTopics = (event) => {
    if (!this.topicsNode.contains(event.target)){
      this.setState({ isTopics: false })
    }
  }

  render(){
    const {
            theme, store,
            LPT,
            onSettings,
            onAbout
          } = this.props
        , { isTopics } = this.state
        , S = theme.createStyle(styleConfig);
    return (
      <header className={CL_HEADER} style={S.HEADER}>
        <PaneTopics
          paneStyle={S.PANE}
          className={CL_PANEL_BROWSER}
          clItem={S.CL_QUERY_ITEM}
          isShow={isTopics}
          items={this._topicItems}
          onClose={this._hCloseTopics}
        />
         <ProgressLoading
           store={store}
           ACTIONS={LPT}
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
              onClick={this._hClickTopics}
              onReg={this._onRegTopics}
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
           ACTIONS={LPT}
           style={S.LIMIT}
         />
      </header>
    );
  }
}

export default withTheme(HeaderBar)
