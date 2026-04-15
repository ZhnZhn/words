import FlatButton from './FlatButton';

import SvgCloseAll from './svg/SvgCloseAll';
import SvgAddBookmark from './svg/SvgAddBookmark';

const S_BT = {
  width: 36
};

export const BtCloseAll = (props) => (
  <FlatButton
    ariaLabel="Close items"
    title="Close items"
    className={props.className}
    style={{...S_BT, ...props.style}}
    onClick={props.onClick}
  >
   <SvgCloseAll />
  </FlatButton>
)

export const BtAddBookmark = (props) => (
  <FlatButton
    ariaLabel={props.title}
    title={props.title}
    className={props.className}
    style={{...S_BT, ...props.style}}
    onClick={props.onClick}
  >
   <SvgAddBookmark />
  </FlatButton>
)
