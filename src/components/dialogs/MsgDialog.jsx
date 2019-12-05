import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import A from '../Comp'

const S = {
  DIALOG: {
    left: 'calc(50vw - 154px)'
  },
  CAPTION : {
    paddingTop: 8,
    paddingLeft: 8,
    color: 'rgba(164, 135, 212, 1)',
    fontSize: '18px',
    fontWeight: 'bold'
},
  ROW: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  DESCR : {
    color: 'gray',
    width: 300,
    paddingLeft: 10,
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre'
  }
};

class MsgDialog extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  render(){
    const { theme, isShow, data, onClose } = this.props
        , TS = theme.createStyle(styleConfig)
        , { caption, descr } = data;
    return (
      <A.ModalDialog
        STYLE={TS.BT}
        style={{...TS.R_DIALOG, ...S.DIALOG}}
        captionStyle={TS.BROWSER_CAPTION}
        caption="Message"
        isShow={isShow}
        onClose={onClose}
      >
         <div style={S.ROW}>
            <p style={S.CAPTION}>
              {caption}
            </p>
         </div>
         <div style={S.ROW}>
            <p style={S.DESCR}>{descr}</p>
         </div>
      </A.ModalDialog>
    );
  }
}

export default withTheme(MsgDialog)
