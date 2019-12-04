import React from 'react'

import FlatButton from '../zhn-atoms/FlatButton'
import RaisedButton from '../zhn-atoms/RaisedButton'

const CL_DIV = 'bt-flat__div';

const S = {
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

const Clear = ({ style, onClick }) => (
  <FlatButton
    rootStyle={{ ...S.BT_ROOT, ...style }}
    clDiv={CL_DIV}
    caption="Clear"
    title="Clear Input"
    onClick={onClick}
  />
);

const Close = ({ style, onClick }) => (
  <FlatButton
    rootStyle={{ ...S.BT_ROOT, ...style }}
    clDiv={CL_DIV}
    caption="Close"
    title="Close Dialog"
    onClick={onClick}
  />
);

const Primary = ({ style, caption, title, onClick }) => (
    <FlatButton
      rootStyle={{ ...S.BT_ROOT, ...style}}
      clDiv={CL_DIV}
      caption={caption}
      title={title}
      //isPrimary={true}
      onClick={onClick}
    />
);

export default {
  Primary,
  Clear,
  Close,
  Flat: FlatButton,
  Raised: RaisedButton
}
