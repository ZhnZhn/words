//import PropTypes from "prop-types";
import {
  useMemo,
  getRefValue
} from '../uiApi';

import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';
import useWatchList from './useWatchList';

import ValidationMessages from '../zhn/ValidationMessages';
import RowInputSelect from './RowInputSelect';
import RowButtons from './RowButtons';

const GroupDeletePane = ({
  forActionType,
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
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDeleteGroup = useMemo(() => () => {
     const caption = getRefValue(_refCaption)
     if (caption){
       onDelete({ caption })
     } else {
       setValidationMessages([msgOnNotSelect('Group')])
     }
  }, []);
  // msgOnNotSelect, onDelete
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
      <RowInputSelect
        id="gd-g"
        caption="Group:"
        options={groupOptions}
        onSelect={_hSelectGroup}
      />
      <ValidationMessages
        validationMessages={validationMessages}
      />
      <RowButtons
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

  btStyle: PropTypes.object,

  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupDeletePane
