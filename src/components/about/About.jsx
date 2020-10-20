import { useState, useCallback } from 'react'

import useListen from '../hoc/useListen'
import useTheme from '../hoc/useTheme'
import styleConfig from './About.Style'

import A from '../zhn-atoms/Atoms'
import Link from '../links/Links'
import IconLogoBar from './IconLogoBar'

import STYLE from '../styles/ContainerStyle'

const CL_SHOW = "show-popup";

const About = ({ store, showAction, closeAction }) => {
  const [isShow, setIsShow] = useState(true)
  , _hClose = useCallback(() => {
    setIsShow(false)
  }, [])

  useListen(store, (actionType, data) => {
    switch(actionType){
      case showAction:
         setIsShow(true)
         break;
      case closeAction:
         setIsShow(false)
         break;
      default: return;
    }
  })

  const TS = useTheme(styleConfig)
  , _cn = isShow ? CL_SHOW : null
  , _style = isShow ? TS.BLOCK : TS.NONE;

  return (
    <div
      className={_cn}
      style={{...STYLE.ABOUT_ROOT, ..._style, ...TS.ROOT}}
     >
       <A.BrowserCaption
          rootStyle={TS.BROWSER_CAPTION}
          caption="About"
          onClose={_hClose}
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
                 Words data provider <Link.WordsApi/> via <Link.RapidApi/>
               </p>
               <p style={TS.PADDING_TOP}>
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

export default About
