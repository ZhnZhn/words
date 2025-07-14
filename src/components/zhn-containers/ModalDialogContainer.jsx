import {
  useState,
  useCallback
} from '../uiApi';

import {
  useMdOption
} from '../../flux/compStore';

import ItemStack from '../zhn/ItemStack';
import ModalContainer from './ModalContainer';

const _crDialogItem = (
  { Comp, type },
  index, {
  currentDialog,
  data,
  onClose
}) => (
  <Comp
    key={type}
    isShow={currentDialog === type}
    data={data[type]}
    onClose={onClose}
  />
);

const _isStr = str => typeof str === 'string';
const _getModalDialogType = option =>
 (option || {}).modalDialogType;

const ModalDialogContainer = ({
  router
}) => {
  const [
    state,
    setState
  ] = useState({
     isShow: false,
     currentDialog: null,
     data: {},
     dialogs: []
  })
  , {
    isShow,
    data,
    dialogs,
    currentDialog
  } = state
  , _hClose = useCallback(() => setState(prevState => ({
     ...prevState,
     isShow: false,
     currentDialog: null
  })), []);

  useMdOption(option => {
    if (option){
      const type = _getModalDialogType(option);
      if (_isStr(type)) {
        setState(prevState => {
          if (!prevState.data[type]) {
            prevState.dialogs.push({
               type,
               Comp: router[type]
            });
          }
          prevState.data[type] = option;
          return {
            ...prevState,
            isShow: true,
            currentDialog: type
          };
        })
      }
    }
  })

  return (
    <ModalContainer
      isShow={isShow}
      onClose={_hClose}
    >
      <ItemStack
        items={dialogs}
        crItem={_crDialogItem}
        currentDialog={currentDialog}
        data={data}
        onClose={_hClose}
      />
   </ModalContainer>
  );
};

export default ModalDialogContainer
