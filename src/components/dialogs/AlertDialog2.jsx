import React, { Component } from 'react';
//import PropTypes from "prop-types";

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import ModalDialog from '../zhn-moleculs/ModalDialog';

const CL = {
  ELL: 'ellipsis'
};

const S = {
  CAPTION: {
    //color: '#f44336',
    color: '#f44336',
    fontWeight: 'bold'
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
  TITLE : {
    display : 'inline-block',
    width : '360px',
    paddingLeft : '10px',
    color : '#F44336',
    fontSize: '18px',
    fontWeight : 'bold',
    lineHeight : 2
  },
  ITEM_ID : {
    width: '120px',
    color: '#a487d4',
    fontWeight : 'bold',
    verticalAlign: 'bottom'
  },
  DESCR: {
    color: 'gray',
    width: '360px',
    paddingLeft: '10px',
    paddingRight: '8px',
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line',
    wordWrap: 'break-word'
  }
}

class AlertDialog2 extends Component{

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      caption: PropTypes.string,
      itemId: PropTypes.string,
      descr: PropTypes.string
    }),
    onClose: PropTypes.func
  }
  */

  static defaultProps = {
    data: {}
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  render(){
    const { theme, isShow, data, onClose } = this.props
        , TS = theme.createStyle(styleConfig)
        , { caption='Item', itemId='', descr } = data
        , _caption = caption + ': ';
    return (
      <ModalDialog
        STYLE={TS.BT}
        style={TS.R_DIALOG }
        caption="Exception"
        captionStyle={{ ...TS.BROWSER_CAPTION, ...S.CAPTION }}
        isShow={isShow}
        isClosePrimary={true}
        onClose={onClose}
      >
         <div style={S.ROW}>
            <span style={S.TITLE}>
              {_caption}
              <span
                className={CL.ELL}
                style={S.ITEM_ID}
                title={itemId}
              >
                {itemId}
              </span>
            </span>
         </div>
         <div style={S.ROW}>
            <p style={S.DESCR}>
              {descr}
            </p>
         </div>
      </ModalDialog>
    );
  }
}

export default withTheme(AlertDialog2)
