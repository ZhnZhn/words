import {
  useRef,
  useCallback,
  getRefValue,
  getRefInputValue
} from '../uiApi';

import useTheme from '../hoc/useTheme';
import styleConfig from './Dialog.Style';

import DraggableDialog from '../zhn-moleculs/DraggableDialog';
import TextField from '../zhn-m-input/TextField';

const DialogType1 = ({
  isShow,
  caption,
  type,
  source,
  itemConf,
  onLoad,
  onShow,
  onClose
}) => {
  const _refDialog = useRef()
  , _refInputWord = useRef()
  , _hLoad = useCallback(() => {
    onLoad({
      type,
      source,
      itemConf,
      symbol: getRefInputValue(_refInputWord)
    })
  }, [type, source, itemConf, onLoad])
  , _hClose = useCallback(() => {
    const _dialogInst = getRefValue(_refDialog);
    if (_dialogInst) {
      _dialogInst.focusPrevEl()
    }
    onClose()
  }, [onClose])
  , _hKeyDown = useCallback(evt => {
    if (evt.keyCode === 13){
      _hLoad()
    } else if (evt.keyCode === 27){
      _hClose()
    }
  }, [_hLoad, _hClose])
  , TS = useTheme(styleConfig);

  return (
    <DraggableDialog
       ref={_refDialog}
       style={TS.R_DIALOG}
       browserCaptionStyle={TS.BROWSER_CAPTION}
       styleButton={TS.BT}
       caption={caption}
       isShow={isShow}
       onKeyDown={_hKeyDown}
       onLoad={_hLoad}
       onShow={onShow}
       onClose={_hClose}
     >
       <TextField
         ref={_refInputWord}
         rootStyle={TS.INPUT_ROOT}
         caption="Word (Default: Example)"
         initialValue="Example"
       />
    </DraggableDialog>
  );
}

export default DialogType1
