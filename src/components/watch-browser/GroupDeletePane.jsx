//import PropTypes from "prop-types";
import {
  useMemo,
  getRefValue
} from '../uiApi';

import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';
import useWatchList from './useWatchList';
import useWatchListMsEdit from './useWatchListMsEdit';

import A from './Atoms';

const GroupDeletePane = ({
  forActionType,
  inputStyle,
  btStyle,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const [
    _refCaption,
    _hSelectGroup
  ] = useRefItemCaption()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
  , groupOptions = useWatchList()

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDeleteGroup = useMemo(() => () => {
     const caption = getRefValue(_refCaption)
     if (caption){
       onDelete({ caption })
     } else {
       setValidationMessages([msgOnNotSelect('Group')])
     }
  }, [])
  // msgOnNotSelect, onDelete
  /*eslint-enable react-hooks/exhaustive-deps */

  useWatchListMsEdit(
    forActionType,
    setValidationMessages,
    _hClear
  )

  return (
    <>
      <A.RowInputSelect
        inputStyle={inputStyle}
        caption="Group:"
        options={groupOptions}
        onSelect={_hSelectGroup}
      />
      <A.ValidationMessages
        validationMessages={validationMessages}
      />
      <A.RowButtons
        btStyle={btStyle}
        caption="Delete"
        title="Delete Group"
        onClick={_hDeleteGroup}
        onClose={onClose}
      />
   </>
  );
};

/*
GroupDeletePane.propTypes = {
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupDeletePane
