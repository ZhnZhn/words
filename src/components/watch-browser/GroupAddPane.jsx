import {
  useRef,
  useMemo,
  getRefInputValue,
  setRefInputValue
} from '../uiApi';

import useListen from '../hooks/useListen';
import useValidationMessages from './useValidationMessages';

import A from './Atoms';

const GroupAddPane = ({
  store,
  actionCompleted,
  actionFailed,
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

  /*eslint-disable react-hooks/exhaustive-deps */
  , _btPrimaryEl = useMemo(() => (
    <A.Button.Primary
       style={btStyle}
       caption="Create"
       title="Create New Group"
       onClick={_hCreate}
   />
 ), [])
  // btStyle, _hCreate
  /*eslint-enable react-hooks/exhaustive-deps */

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted && data.forActionType === forActionType){
       _hClear()
    } else if (actionType === actionFailed && data.forActionType === forActionType){
       setValidationMessages(data.messages)
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
          Primary={_btPrimaryEl}
          onClear={_hClear}
          onClose={onClose}
       />
    </>
  );
}

/*
GroupAddPane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func
  }),
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
