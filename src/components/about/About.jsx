import useBool from '../hooks/useBool';

import useListen from '../hoc/useListen';
import useTheme from '../hoc/useTheme';
import styleConfig from './About.Style';

import A from '../zhn-atoms/Atoms';
import Link from '../links/Links';
import IconLogoBar from './IconLogoBar';

import { S_ABOUT } from '../styles/ContainerStyle';

const CL_SHOW = "show-popup";

const About = ({
  store,
  showAction,
  closeAction
}) => {
  const [
    isShow,
    showAbout,
    closeAbout
  ] = useBool(true);

  useListen(store, (actionType, data) => {
    switch(actionType){
      case showAction:
         showAbout()
         break;
      case closeAction:
         closeAbout()
         break;
      default: return;
    }
  })

  const TS = useTheme(styleConfig)
  , [
    _style,
    _className,
  ] = isShow
    ? [TS.BLOCK, CL_SHOW]
    : [TS.NONE];

  return (
    <div
      className={_className}
      style={{...S_ABOUT, ..._style, ...TS.ROOT}}
     >
       <A.BrowserCaption
          rootStyle={TS.BROWSER_CAPTION}
          caption="About"
          onClose={closeAbout}
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
