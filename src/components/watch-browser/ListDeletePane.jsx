//import PropTypes from "prop-types";
import {
  useRef,
  useCallback,
  getRefInputValue
} from '../uiApi';

import useRerender from '../hooks/useRerender';
import useValidationMessages from './useValidationMessages';
import useWatchList from './useWatchList';

import A from './Atoms';

const ListDeletePane = ({
  getWatchListsByGroup,
  forActionType,
  inputStyle,
  btStyle,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const _refGroupList = useRef()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
  , rerender = useRerender()[1]
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear,
     rerender
  )

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
  }, []);
  // setValidationMessages
  // msgOnNotSelect, onDelete
  /*eslint-enable react-hooks/exhaustive-deps */

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
