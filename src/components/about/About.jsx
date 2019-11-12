import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './About.Style'

import A from '../zhn-atoms/Atoms'
import Link from '../links/Links'
import IconLogoBar from './IconLogoBar'

import STYLE from '../styles/ContainerStyle'

const CL_SHOW = "show-popup";

class About extends Component {

  state = {
    isShow: true
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
    const { showAction, closeAction } = this.props;
    switch(actionType){
      case showAction:
         this.setState(prevState => {
           return prevState.isShow
              ? null
              : { isShow: true };
         })
         break;
      case closeAction:
        this.setState(prevState => {
          return prevState.isShow
            ? { isShow: false }
            : null;
        })
        break;
      default: return void 0;
    }
  }

  _handleClose = () => {
    this.setState({ isShow : false })
  }

  render(){
    const  { theme } = this.props
         , TS = theme.createStyle(styleConfig)
         , { isShow } = this.state
         , _rootClass = isShow
              ? CL_SHOW
              : null
         , _rootStyle = isShow
              ? TS.BLOCK
              : TS.NONE;
    return (
      <div
        className={_rootClass}
        style={{...STYLE.ABOUT_ROOT, ..._rootStyle, ...TS.ROOT}}
       >
         <A.BrowserCaption
            rootStyle={TS.BROWSER_CAPTION}
            caption="About"
            onClose={this._handleClose}
         />

         <A.ScrollPane
            className={TS.CL_SCROLL_PANE}
            style={TS.SCROLL_DIV}
         >
           <div style={TS.DIV_WRAPPER}>
              <div style={TS.DIV_TEXT}>
                 <p>
                   <span style={TS.APP_TITLE}>Words</span> is web app, RESTful client.
                 </p>
                 <p>
                   Words data provider:
                 </p>
                 <div>
                    <Link.WordsApi/>
                 </div>
                 <p style={TS.MARGIN_TOP}>
                   Provider's API Key is required for using app.
                 </p>
                 <p>
                   API Key can be set in Settings Dialog [s].
                 </p>
             </div>
             <IconLogoBar
                iconStyle={TS.ICON}
                iconGitHubStyle={TS.ICON_GITHUB}
             />
             <p style={TS.BLACK}>
               *Logos Fair Use.
              </p>
           </div>
        </A.ScrollPane>
      </div>
    );
  }
}

export default withTheme(About)
