//import PropTypes from "prop-types";
import {
  useRef,
  useMemo,
  getRefValue,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';
import useWatchList from './useWatchList';

import ValidationMessages from '../zhn-atoms/ValidationMessages';
import RowInputText from './RowInputText';
import RowInputSelect from './RowInputSelect';
import RowButtons from './RowButtons';

const GroupEditPane = ({
  forActionType,
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
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => setRefInputValue(_refInputText, '')
  )
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear
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
  }, []);
  // msgOnNotSelect, msgOnIsEmptyName, onRename
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
       <RowInputSelect
          id="ge-g"
          caption="Group From:"
          options={groupOptions}
          onSelect={_hSelectGroup}
       />
      <RowInputText
        refEl={_refInputText}
        caption="Group To:"
      />
      <ValidationMessages
        validationMessages={validationMessages}
      />
      <RowButtons
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
