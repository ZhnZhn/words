import { crShowHideIf } from '../styleFn';
import useBool from '../hooks/useBool';

import BrowserCaption from '../zhn/BrowserCaption';
import ScrollPane from '../zhn/ScrollPane';
import Link from '../links/Links';
import IconLogoBar from './IconLogoBar';

const CL_ABOUT = 'about'
, S_SCROLL_DIV = {
  overflowY: 'auto',
  height: '92%',
  paddingRight: 10
}
, S_DIV_WRAPPER = {
  paddingLeft: 12,
  paddingRight: 5,
  lineHeight: 1.6,
  fontWeight: 'bold'
}
, S_APP_TITLE = {
  color: '#80c040'
}
, S_BLACK = {
  color: 'black'
}
, S_PADDING_TOP = {
  paddingTop: 8
}

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

  const [
    _style,
    _className,
  ] = crShowHideIf(isShow, CL_ABOUT);

  return (
    <div
      className={_className}
      style={_style}
     >
       <BrowserCaption
          caption="About"
          onClose={closeAbout}
       />
       <ScrollPane
          style={S_SCROLL_DIV}
       >
         <div style={S_DIV_WRAPPER}>
           <p>
             <span style={S_APP_TITLE}>Words</span> is web app, RESTful client.
           </p>
           <p>
             Words data provider <Link.WordsApi/> via <Link.RapidApi/>
           </p>
           <p style={S_PADDING_TOP}>
             Provider's API Key is required for using app.
           </p>
           <p>
             API Key can be set in Settings Dialog [s].
           </p>
           <IconLogoBar />
           <p style={S_BLACK}>
             *Logos Fair Use.
            </p>
         </div>
      </ScrollPane>
    </div>
  );
}

export default About
