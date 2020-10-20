import { Component } from 'react'
//import PropTypes from 'prop-types'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import A from '../Comp'

const S = {
  DIALOG: {
    left: 'calc(50vw - 152px)'
  },
  CAPTION: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  MSG: {
    color: 'black',
    width : 300,
    paddingTop: 16,
    paddingLeft : 10,
    fontWeight: 'bold',
    lineHeight : 1.4,
    whiteSpace: 'pre-line'
  }
};

const _toMsg = (data) => {
  if (data instanceof TypeError){
    return data.message;
  }
  const { status, url, msg } = data;
  if (status){
    return `${url}\ncode:${status}\nNetwork exception`;
  } else if (msg){
    return msg;
  }
  return 'Exception Message';
}

class AlertDialog extends Component{

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      status: PropTypes.string,
      url: PropTypes.string,
      msg: PropTypes.string
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
    const { isShow, data, theme, onClose } = this.props
        , TS = theme.createStyle(styleConfig)
        , _msg  = _toMsg(data);
    return (
      <A.ModalDialog
         STYLE={TS.BT}
         style={{...TS.R_DIALOG, ...S.DIALOG }}
         captionStyle={{ ...TS.BROWSER_CAPTION, ...S.CAPTION }}
         //styleButton={TS.BT}
         caption="Exception Message"
         isShow={isShow}
         isClosePrimary={true}
         onClose={onClose}
      >
         <div>
            <p style={S.MSG}>
              {_msg}
            </p>
         </div>
      </A.ModalDialog>
    );
  }
}

export default withTheme(AlertDialog)
