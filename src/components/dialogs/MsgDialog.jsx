import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import ModalDialog from '../zhn-moleculs/ModalDialog'

const S = {
  CAPTION : {
    //width : '360px',
    //paddingLeft : '10px',
    paddingTop: '8px',
    paddingLeft: '8px',
    color : 'rgba(164, 135, 212,1)',
    fontSize: '18px',
    fontWeight : 'bold',
    //lineHeight : 2
  },
  ROW: {
    //display: 'block',
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
    marginTop: '5px',
    marginLeft: '5px',
    marginBottom: '5px'
  },
  DESCR : {
    color: 'gray',
    width : '360px',
    paddingLeft : '10px',
    fontWeight: 'bold',
    lineHeight : 1.4,
    whiteSpace : 'pre'
  }
}

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
      <ModalDialog
        STYLE={TS.BT}
        style={TS.R_DIALOG }
        //captionStyle={{ ...TS.BROWSER_CAPTION, ...S.CAPTION }}
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
      </ModalDialog>
    );
  }
}

export default withTheme(MsgDialog)
