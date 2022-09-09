//import PropTypes from "prop-types";
import {
  useRef,
  useState,
  useMemo,
  getRefValue,
  setRefValue,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useListen from '../hooks/useListen';
import useValidationMessages from './useValidationMessages';

import A from './Atoms';

const GroupEditPane = ({
  store,
  actionCompleted,
  actionFailed,
  forActionType,

  inputStyle,
  btStyle,

  msgOnNotSelect,
  msgOnIsEmptyName,
  onRename,
  onClose
}) => {
  const _refInputText = useRef()
  , _refCaptionFrom = useRef()
  , [
    groupOptions,
    setGroupOptions
  ] = useState(() => store.getWatchGroups())
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => setRefInputValue(_refInputText, '')
  )
  , _hSelectGroup = useMemo(() => (item) => {
    const { caption } = item || {};
    setRefValue(_refCaptionFrom, caption || null)
  }, [])

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hRename = useMemo(() => () => {
     const captionTo = getRefInputValue(_refInputText)
     , captionFrom = getRefValue(_refCaptionFrom)
     if (captionTo && captionFrom) {
       onRename({
         captionFrom,
         captionTo
       })
     } else {
       const msg = [];
       if (!captionFrom){
         msg.push(msgOnNotSelect('Group From'))
       }
       if (!captionTo){
         msg.push(msgOnIsEmptyName('Group To'))
       }
       setValidationMessages(msg)
     }
  }, [])
  // msgOnNotSelect, msgOnIsEmptyName, onRename
  /*eslint-enable react-hooks/exhaustive-deps */  

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted){
      if (data.forActionType === forActionType){
        _hClear()
      }
      setGroupOptions(store.getWatchGroups())
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      setValidationMessages(data.messages)
    }
  })

  return (
    <>
       <A.RowInputSelect
          caption="Group From:"
          inputStyle={inputStyle}
          options={groupOptions}
          onSelect={_hSelectGroup}
       />
      <A.RowInputText
        ref={_refInputText}
        caption="Group To:"
        inputStyle={inputStyle}
      />
      <A.ValidationMessages
        validationMessages={validationMessages}
      />
      <A.RowButtons
         btStyle={btStyle}
         caption="Edit"
         title="Edit Group Name"
         onClick={_hRename}
         onClear={_hClear}
         onClose={onClose}
      />
    </>
  );
}

/*
GroupEditPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,
  msgOnNotSelect: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onRename: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupEditPane
