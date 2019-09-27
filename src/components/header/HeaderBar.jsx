import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './HeaderBar.Style'

import A from '../zhn-atoms/Atoms'
import PaneTopics from './PaneTopics'
import ProgressLoading from './ProgressLoading'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import LimitLabel from './LimitLabel'

const CL = {
  HEADER: "header",
  PANEL_BROWSER: "header__panel-browser",
  ICON_APP: "header__icon-app",
  LABEL_APP: "header__label-app",
  BROWSER_BTS: "header__browser-bts",
  BTS: "header__bts",
  ARROW_DOWN: "arrow-down",
  SETTINGS: "header__bt-settins",
  BT_ABOUT: "header__bt-about"
};

const STYLE = {
  DIV_STYLE : {
    paddingLeft: 6,
    paddingRight: 6
  },
  SETTINGS: {
    verticalAlign: 'middle',
    position: 'relative',
    top: -1
  }
};

const TITLE = 'Words v0.2.0';
const LABEL_TITLE = 'Click to change app UI theme';

class HeaderBar extends Component {

  constructor(props){
    super()

    const { onDefinition, onSources, onWatch } = props;
    this._topicItems = [
      { caption: 'Words Definition', onClick: onDefinition },
      { caption: 'Words Sources', onClick: onSources },
      { caption: 'Watch', onClick: onWatch },
    ]

    this.state = {
      isTopics: false
    }
  }

  _onRegTopics = (node) => {
    this.topicsNode = node
  }
  _hClickTopics = () => {
    this.setState({ isTopics: !this.state.isTopics })
  }
  _hCloseTopics = (event) => {
    if (!this.topicsNode.contains(event.target)){
      this.setState({ isTopics: false })
    }
  }

  _hChangeTheme = () => {
    const { theme, onChangeTheme } = this.props;
    if (theme.themeName === 'GREY'){
      theme.setThemeName('WHITE')
    } else {
      theme.setThemeName('GREY')
    }
    onChangeTheme()
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
      <header className={CL.HEADER} style={S.HEADER}>
        <PaneTopics
          paneStyle={S.PANE}
          className={CL.PANEL_BROWSER}
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
           className={CL.ICON_APP}
           title={TITLE}
           onClick={this._hChangeTheme}
         />
         <AppLabel
           className={CL.LABEL_APP}
           caption={TITLE}
           title={LABEL_TITLE}
           onClick={this._hChangeTheme}
         />
         <span className={CL.BROWSER_BTS}>
           <A.ModalButton
              rootStyle={S.BT.FLAT_ROOT}
              clDiv={S.BT.CL_FLAT_DIV}
              caption="Topics"
              title="Topics"
              accessKey="t"
              onClick={this._hClickTopics}
              onReg={this._onRegTopics}
           >
            <span className={CL.ARROW_DOWN} />
          </A.ModalButton>
         </span>
         <div className={CL.BTS}>
           <A.FlatButton
               className={CL.SETTINGS}
               rootStyle={{ ...S.BT.FLAT_ROOT, ...S.BT_SETTINGS }}
               clDiv={S.BT.CL_FLAT_DIV}
               divStyle={STYLE.DIV_STYLE}
               title="User Settings Dialog"
               accessKey="s"
               onClick={onSettings}
            >
              <A.SvgSettings style={STYLE.SETTINGS} />
            </A.FlatButton>
            <A.FlatButton
                className={CL.BT_ABOUT}
                rootStyle={S.BT.FLAT_ROOT}
                clDiv={S.BT.CL_FLAT_DIV}
                divStyle={STYLE.DIV_STYLE}
                title="About Words"
                accessKey="a"
                onClick={onAbout}
            >
              <A.SvgInfo style={STYLE.SETTINGS}/>
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
