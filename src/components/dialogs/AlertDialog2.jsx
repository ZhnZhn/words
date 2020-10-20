import { Component } from 'react';
//import PropTypes from "prop-types";

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import A from '../Comp'


const CL = {
  ELL: 'ellipsis'
};

const S = {
  DIALOG: {
    left: 'calc(50vw - 184px)'
  },
  CAPTION: {
    color: '#f44336',
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
  TITLE : {
    display : 'inline-block',
    color : '#f44336',
    width : 360,
    paddingLeft : 10,
    lineHeight : 2,
    fontSize: '18px',
    fontWeight : 'bold'
  },
  ITEM_ID : {
    color: '#a487d4',
    width: 120,
    fontWeight : 'bold',
    verticalAlign: 'bottom'
  },
  DESCR: {
    color: 'gray',
    width: 360,
    paddingLeft: 10,
    paddingRight: 8,
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
      <A.ModalDialog
        STYLE={TS.BT}
        style={{...TS.R_DIALOG, ...S.DIALOG }}
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
      </A.ModalDialog>
    );
  }
}

export default withTheme(AlertDialog2)
