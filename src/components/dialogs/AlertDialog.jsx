//import PropTypes from 'prop-types'
import memoIsShow from '../hoc/memoIsShow';

import ModalDialog from '../zhn-moleculs/ModalDialog'

const S_DIALOG = {
  left: 'calc(50vw - 152px)'
}
, S_CAPTION = {
  color: '#f44336',
  fontWeight: 'bold'
}
, S_MSG = {
  color: 'black',
  width: 300,
  paddingTop: 16,
  paddingLeft: 10,
  fontWeight: 'bold',
  lineHeight: 1.4,
  whiteSpace: 'pre-line'
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
};

const DF_DATA = {};

const AlertDialog = memoIsShow(({
  isShow,
  data=DF_DATA,
  onClose
}) => (
    <ModalDialog
       style={S_DIALOG}
       captionStyle={S_CAPTION}
       caption="Exception Message"
       isShow={isShow}
       isClosePrimary={true}
       onClose={onClose}
    >
       <div>
          <p style={S_MSG}>
            {_toMsg(data)}
          </p>
       </div>
    </ModalDialog>
));

/*
AlertDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    status: PropTypes.string,
    url: PropTypes.string,
    msg: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/

export default AlertDialog
