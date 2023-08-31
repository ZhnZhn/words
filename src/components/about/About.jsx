import useBool from '../hooks/useBool';

import useTheme from '../hoc/useTheme';
import styleConfig from './About.Style';

import A from '../zhn-atoms/Atoms';
import Link from '../links/Links';
import IconLogoBar from './IconLogoBar';

import { crShowHideIf } from '../styles/ContainerStyle';

const CL_ABOUT = 'about';

const About = ({
  id,
  usePane
}) => {
  const [
    isShow,
    showAbout,
    closeAbout
  ] = useBool(true);

  usePane(pOption => {
    if (pOption.id === id) {
      showAbout()
    } else {
      closeAbout()
    }
  })

  const TS = useTheme(styleConfig)
  , [
    _style,
    _className,
  ] = crShowHideIf(isShow, CL_ABOUT);

  return (
    <div
      className={_className}
      style={_style}
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
           <IconLogoBar />
           <p style={TS.BLACK}>
             *Logos Fair Use.
            </p>
         </div>
      </A.ScrollPane>
    </div>
  );
}

export default About
