//import PropTypes from "prop-types";
import {
  useRef,
  useState,
  useMemo,
  getRefValue,
  setRefValue
} from '../uiApi';

import useListen from '../hooks/useListen';

import A from './Atoms';

const GroupDeletePane = ({
  store,
  actionCompleted,
  forActionType,
  inputStyle,
  btStyle,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const _refCaption = useRef()
  , [
    validationMessages,
    setValidationMessages
  ] = useState([])
  , [
    groupOptions,
    setGroupOptions
  ] = useState(() => store.getWatchGroups())
  , _hClear = useMemo(() => () => {
    setValidationMessages(prevMsg => prevMsg.length === 0
      ? prevMsg
      : [])
  }, [])
  , _hSelectGroup = useMemo(() => (item) => {
     const { caption } = item || {};
     setRefValue(_refCaption, caption || null)
  }, [])

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDeleteGroup = useMemo(() => () => {
     const caption = getRefValue(_refCaption)
     if (caption){
       onDelete({ caption })
     } else {
       setValidationMessages([msgOnNotSelect('Group')])
     }
  }, [])
  // msgOnNotSelect, onDelete
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _btPrimaryEl = useMemo(() => (
    <A.Button.Primary
       style={btStyle}
       caption="Delete"
       title="Delete Group"
       onClick={_hDeleteGroup}
    />
  ), [])
  // btStyle, _hDeleteGroup
  /*eslint-enable react-hooks/exhaustive-deps */


  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType){
        _hClear()
      }
      setGroupOptions(store.getWatchGroups())
    }
  })

  return (
    <>
      <A.RowInputSelect
        inputStyle={inputStyle}
        caption="Group:"
        options={groupOptions}
        onSelect={_hSelectGroup}
      />
      <A.ValidationMessages
        validationMessages={validationMessages}
      />
      <A.RowButtons
        btStyle={btStyle}
        Primary={_btPrimaryEl}
        withoutClear={true}
        onClose={onClose}
      />
   </>
  );
};

/*
GroupDeletePane.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func
  }),
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,

  inputStyle: PropTypes.object,
  btStyle: PropTypes.object,

  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupDeletePane
