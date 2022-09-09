//import PropTypes from "prop-types";
import {
  useMemo,
  getRefValue
} from '../uiApi';

import useListen from '../hooks/useListen';
import useRefItemCaption from './useRefItemCaption';
import useGroupOptions from './useGroupOptions';
import useValidationMessages from './useValidationMessages';

import A from './Atoms';

const GroupDeletePane = ({
  store,
  actionCompleted,
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
  , [
    groupOptions,
    updateGroupOptions
  ] = useGroupOptions(store)

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

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType){
        _hClear()
      }
      updateGroupOptions()
    }
  })

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
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
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
