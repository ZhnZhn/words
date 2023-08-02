import styleConfig from './Dialog.Style';
import memoIsShow from '../hoc/memoIsShow';
import useTheme from '../hoc/useTheme';

import ModalDialog from '../zhn-moleculs/ModalDialog';

const S_DIALOG = {
  left: 'calc(50vw - 154px)'
}
, S_CAPTION = {
  paddingTop: 8,
  paddingLeft: 8,
  color: '#a487d4',
  fontSize: '18px',
  fontWeight: 'bold'
}
, S_ROW = {
  display: 'flex',
  alignItems: 'center',
  margin: '5px 5px'
}
, S_DESCR = {
  color: 'grey',
  width: 300,
  paddingLeft: 10,
  lineHeight: 1.4,
  whiteSpace: 'pre',
  fontWeight: 'bold'
};

const MsgDialog = memoIsShow(({
  isShow,
  data,
  onClose
}) => {
  const TS = useTheme(styleConfig)
  , {
    caption,
    descr
  } = data;
  return (
    <ModalDialog
      style={{...TS.R_DIALOG, ...S_DIALOG}}
      captionStyle={TS.BROWSER_CAPTION}
      caption="Message"
      isShow={isShow}
      onClose={onClose}
    >
       <div style={S_ROW}>
          <p style={S_CAPTION}>
            {caption}
          </p>
       </div>
       <div style={S_ROW}>
          <p style={S_DESCR}>{descr}</p>
       </div>
    </ModalDialog>
  );
})

export default MsgDialog
