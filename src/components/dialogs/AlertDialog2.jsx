//import PropTypes from "prop-types";
import memoIsShow from '../hoc/memoIsShow';

import ModalDialog from '../zhn-moleculs/ModalDialog'

const CL_ELL = 'ellipsis'
, S_DIALOG = {
  left: 'calc(50vw - 184px)'
}
, S_CAPTION = {
  color: '#f44336',
  fontWeight: 'bold'
}
, S_ROW = {
  display: 'flex',
  alignItems: 'center',
  marginRight: 5,
  marginTop: 5,
  marginLeft: 5,
  marginBottom: 5
}
, S_TITLE = {
  display: 'inline-block',
  color: '#f44336',
  width: 360,
  paddingLeft: 10,
  lineHeight: 2,
  fontSize: '18px',
  fontWeight: 'bold'
}
, S_ITEM_ID = {
  color: '#a487d4',
  width: 120,
  fontWeight: 'bold',
  verticalAlign: 'bottom'
}
, S_DESCR = {
  color: 'gray',
  width: 360,
  paddingLeft: 10,
  paddingRight: 8,
  fontWeight: 'bold',
  lineHeight: 1.4,
  whiteSpace: 'pre-line',
  wordWrap: 'break-word'
};

const DF_DATA = {};

const AlertDialog2 = memoIsShow(({
  isShow,
  data=DF_DATA,
  onClose
}) => {
  const {
    caption='Item',
    itemId='',
    descr
  } = data
  , _caption = caption + ': ';

  return (
    <ModalDialog
      style={S_DIALOG}
      caption="Exception"
      captionStyle={S_CAPTION}
      isShow={isShow}
      isClosePrimary={true}
      onClose={onClose}
    >
       <div style={S_ROW}>
          <span style={S_TITLE}>
            {_caption}
            <span
              className={CL_ELL}
              style={S_ITEM_ID}
              title={itemId}
            >
              {itemId}
            </span>
          </span>
       </div>
       <div style={S_ROW}>
          <p style={S_DESCR}>
            {descr}
          </p>
       </div>
    </ModalDialog>
  );
});

/*
AlertDialog2.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    caption: PropTypes.string,
    itemId: PropTypes.string,
    descr: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/

export default AlertDialog2
