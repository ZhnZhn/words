import {
  useRef,
  useMemo,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useValidationMessages from './useValidationMessages';
import useWatchListMsEdit from './useWatchListMsEdit';

import A from './Atoms';

const GroupAddPane = ({
  forActionType,
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

  useWatchListMsEdit(
    forActionType,
    setValidationMessages,
    _hClear
  )

  return (
    <>
      <A.RowInputText
         refEl={_refInput}
         caption="Group:"
      />
      <A.ValidationMessages
         validationMessages={validationMessages}
       />
       <A.RowButtons
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
