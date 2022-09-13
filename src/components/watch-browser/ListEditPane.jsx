//import PropTypes from "prop-types";
import {
  useRef,
  useCallback,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useRerender from '../hooks/useRerender';
import useListen from '../hooks/useListen';
import useGroupOptions from './useGroupOptions';
import useValidationMessages from './useValidationMessages';

import A from './Atoms';

const ListEditPane = ({
  store,

  inputStyle,
  btStyle,

  actionCompleted,
  actionFailed,
  forActionType,

  msgOnIsEmptyName,
  msgOnNotSelect,
  onRename,

  onClose
}) => {
  const _refGroupList = useRef()
  , _refInputText = useRef()
  , [
    groupOptions,
    updateGroupOptions
  ] = useGroupOptions(store)
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => setRefInputValue(_refInputText, '')
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hRename = useCallback(() => {
    const {
      captionGroup,
      captionList
    } = getRefInputValue(_refGroupList)
    , captionListTo = getRefInputValue(_refInputText)
    if (captionGroup && captionList && captionListTo){
      onRename({
        captionGroup,
        captionListFrom: captionList,
        captionListTo
      })
    } else {
      const msg = [];
      if (!captionGroup) { msg.push(msgOnNotSelect('Group')) }
      if (!captionList)  { msg.push(msgOnNotSelect('List From')) }
      if (!captionListTo){ msg.push(msgOnIsEmptyName('List To')) }
      setValidationMessages(msg)
    }
  }, [])
  // setValidationMessages
  // msgOnIsEmptyName, msgOnNotSelect, onRename
  /*eslint-enable react-hooks/exhaustive-deps */
  , rerender = useRerender()[1]

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted){
        if (data.forActionType === forActionType){
          _hClear()
        }
        updateGroupOptions()
        rerender()
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      setValidationMessages(data.messages)
    }
  })

  return (
    <>
       <A.SelectGroupList
         ref={_refGroupList}
         inputStyle={inputStyle}
         store={store}
         groupCaption="In Group:"
         groupOptions={groupOptions}
         listCaption="List From:"
       />
       <A.RowInputText
          ref={_refInputText}
          inputStyle={inputStyle}
          caption="List To:"
       />
       <A.ValidationMessages
          validationMessages={validationMessages}
       />
       <A.RowButtons
          btStyle={btStyle}
          caption="Rename"
          title="Rename List Name"
          onClick={_hRename}
          onClear={_hClear}
          onClose={onClose}
       />
    </>
  );
};

/*
ListEditPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onRename: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default ListEditPane
