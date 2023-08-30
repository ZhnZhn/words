//import PropTypes from "prop-types";
import {
  useRef,
  useCallback,
  getRefValue,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';
import useWatchList from './useWatchList';

import A from './Atoms';

const ListCreatePane = ({
  forActionType,  
  msgOnNotSelect,
  msgOnIsEmptyName,
  onCreate,
  onClose
}) => {
  const _refInputText = useRef()
  , [
    _refGroupCaption,
    _hSelectGroup
  ] = useRefItemCaption()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCreate = useCallback(() => {
     const captionGroup = getRefValue(_refGroupCaption)
     , captionList = getRefInputValue(_refInputText);
     if (captionGroup && captionList){
       onCreate({
          captionGroup,
          captionList
       });
       setRefInputValue(_refInputText, '')
     } else {
       const msg = [];
       if (!captionGroup) { msg.push(msgOnNotSelect('In Group')); }
       if (!captionList)  { msg.push(msgOnIsEmptyName('List')); }
       setValidationMessages(msg)
     }
  }, []);
  // _refGroupCaption, setValidationMessages
  // onCreate, msgOnNotSelect, msgOnIsEmptyName
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
      <A.RowInputSelect
         caption="In Group:"
         options={groupOptions}
         onSelect={_hSelectGroup}
      />
      <A.RowInputText
         ref={_refInputText}
         caption="List:"
      />
      <A.ValidationMessages
        validationMessages={validationMessages}
      />
      <A.RowButtons
         caption="Create"
         title="Create New List"
         onClick={_hCreate}
         onClear={_hClear}
         onClose={onClose}
      />
    </>
  );
};

/*
ListCreatePane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,
  msgOnIsEmptyName: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default ListCreatePane
