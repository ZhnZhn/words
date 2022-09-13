//import PropTypes from "prop-types";
import {
  useRef,
  useCallback,
  getRefInputValue
} from '../uiApi';

import useRerender from '../hooks/useRerender';
import useListen from '../hooks/useListen';

import useGroupOptions from './useGroupOptions';
import useValidationMessages from './useValidationMessages';

import A from './Atoms';

const ListDeletePane = ({
  store,
  inputStyle,
  btStyle,

  actionCompleted,
  forActionType,

  msgOnNotSelect,
  onDelete,

  onClose
}) => {
  const _refGroupList = useRef()
  , [
    groupOptions,
    updateGroupOptions
  ] = useGroupOptions(store)
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDelete = useCallback(() => {
      const {
        captionGroup,
        captionList
      } = getRefInputValue(_refGroupList);
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

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted){
      if (data.forActionType === forActionType) {
        _hClear()
      }
      updateGroupOptions()
      rerender()
    }
  })

  return (
    <>
      <A.SelectGroupList
        ref={_refGroupList}
        store={store}
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
