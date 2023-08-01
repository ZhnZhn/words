//import PropTypes from "prop-types";
import {
  useRef,
  useCallback,
  getRefInputValue
} from '../uiApi';

import useRerender from '../hooks/useRerender';

import useGroupOptions from './useGroupOptions';
import useValidationMessages from './useValidationMessages';

import A from './Atoms';

const ListDeletePane = ({
  getWatchGroups,
  getWatchListsByGroup,
  useMsEdit,
  useWatchList,
  forActionType,
  inputStyle,
  btStyle,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const _refGroupList = useRef()
  , [
    groupOptions,
    updateGroupOptions
  ] = useGroupOptions(getWatchGroups)
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDelete = useCallback(() => {
      const [
        captionGroup,
        captionList
      ] = getRefInputValue(_refGroupList);
      if (captionGroup && captionList){
        onDelete({
          captionGroup,
          captionList
        })
      } else {
        const msg = [];
        if (!captionGroup) { msg.push(msgOnNotSelect('Group')) }
        if (!captionList)  { msg.push(msgOnNotSelect('List'))  }
        setValidationMessages(msg)
      }
  }, [])
  // setValidationMessages
  // msgOnNotSelect, onDelete
  /*eslint-enable react-hooks/exhaustive-deps */
  , rerender = useRerender()[1]

  useMsEdit(msEdit => {
    if (msEdit && msEdit.forActionType === forActionType) {
      _hClear()
    }
  })
  useWatchList(watchList => {
    if (watchList) {
      updateGroupOptions()
      rerender()
    }
  })

  return (
    <>
      <A.SelectGroupList
        ref={_refGroupList}
        getWatchListsByGroup={getWatchListsByGroup}
        inputStyle={inputStyle}
        groupCaption="In Group:"
        groupOptions={groupOptions}
        listCaption="List:"
      />
      <A.ValidationMessages
         validationMessages={validationMessages}
      />
      <A.RowButtons
        btStyle={btStyle}
        caption="Delete"
        title="Delete List"
        onClick={_hDelete}
        onClear={_hClear}
        onClose={onClose}
      />
    </>
  );
}

/*
ListDeletePane.propTypes = {
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

export default ListDeletePane
