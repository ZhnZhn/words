import { Component } from 'react'

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

const TITLE = 'Words v0.3.0';

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
         />
         <AppLabel
           className={CL.LABEL_APP}
           caption={TITLE}
         />
         <span className={CL.BROWSER_BTS}>
           <A.ModalButton
              style={S.BT.FLAT_ROOT}
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
