//import PropTypes from "prop-types";
import {
  useRef,
  useMemo,
  getRefValue,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useRefItemCaption from './useRefItemCaption';
import useGroupOptions from './useGroupOptions';
import useValidationMessages from './useValidationMessages';
import useWatchListMsEdit from './useWatchListMsEdit';

import A from './Atoms';

const GroupEditPane = ({
  getWatchGroups,
  useWatchList,
  forActionType,
  inputStyle,
  btStyle,
  msgOnNotSelect,
  msgOnIsEmptyName,
  onRename,
  onClose
}) => {
  const _refInputText = useRef()
  , [
    _refCaptionFrom,
    _hSelectGroup
  ] = useRefItemCaption()
  , [
    groupOptions,
    updateGroupOptions
  ] = useGroupOptions(getWatchGroups)
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => setRefInputValue(_refInputText, '')
  )

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

  useWatchListMsEdit(
    forActionType,
    setValidationMessages,
    _hClear
  )  
  useWatchList(watchList => {
    if (watchList) {
      updateGroupOptions()
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
         caption="Rename"
         title="Rename Group Name"
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
