import {
  useRef,
  useMemo,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useValidationMessages from './useValidationMessages';

import A from './Atoms';

const GroupAddPane = ({
  useMsEdit,
  forActionType,
  inputStyle,
  btStyle,
  msgOnIsEmptyName,
  onCreate,
  onClose
}) => {
  const _refInput = useRef()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => setRefInputValue(_refInput, '')
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCreate = useMemo(() => () => {
    const caption = getRefInputValue(_refInput);
    if (caption){
      onCreate({ caption })
    } else {
      setRefInputValue(_refInput, '')
      setValidationMessages([msgOnIsEmptyName('Group')])
    }
  }, [])
  // msgOnIsEmptyName, onCreate
  /*eslint-enable react-hooks/exhaustive-deps */

  useMsEdit(msEdit => {
    if (msEdit && msEdit.forActionType === forActionType) {
      if (msEdit.messages) {
        setValidationMessages(msEdit.messages)
      } else {
        _hClear()
      }
    }
  })

  return (
    <>
      <A.RowInputText
         ref={_refInput}
         caption="Group:"
         inputStyle={inputStyle}
      />
      <A.ValidationMessages
         validationMessages={validationMessages}
       />
       <A.RowButtons
          btStyle={btStyle}
          caption="Create"
          title="Create New Group"
          onClick={_hCreate}
          onClear={_hClear}
          onClose={onClose}
       />
    </>
  );
}

/*
GroupAddPane.propTypes = {
  actionCompleted: PropTypes.string,
  actionFailed: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupAddPane
