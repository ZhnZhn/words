//import PropTypes from "prop-types";
import {
  useRef,
  useMemo,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';

import memoIsShow from '../hoc/memoIsShow';

import useGroupOptions from './useGroupOptions';
import useListOptions from './useListOptions';
import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';

import { WAT_ADD_ITEM } from '../../flux/actions/WatchActions';
import {
  addWatchItem,
  useMsEdit,
  getWatchGroups,
  getWatchListsByGroup
} from '../../flux/watch-list/watchListStore';
import {
  notSelected
} from '../../constants/MsgWatch';

import FlatButton from '../zhn/FlatButton';
import ValidationMessages from '../zhn/ValidationMessages'
import ModalDialog from '../zhn-moleculs/ModalDialog';
import RowInputSelect from './RowInputSelect'
import Row from '../dialogs/Row';

const CL_BT_DIV = 'bt-flat__div'
, S_DIALOG = {
  left: 'calc(50vw - 142px)',
  width: 300
};

const AddToWatchDialog = memoIsShow((
  props
) => {
  const {
    isShow,
    data,
    onClose
  } = props
  , {
    caption
  } = data
  , [
    validationMessages,
    setValidationMessages,
    _hClose
  ] = useValidationMessages(onClose)
  , [
    groupOptions,
    _updateGroupOptions
  ] = useGroupOptions()
  , _refGroupCaption = useRef(null)
  , [
    _refListCaption,
    _hSelectList
  ] = useRefItemCaption()
  , [
    listOptions,
    setListOptions,
    updateListOptions
  ] = useListOptions(getWatchListsByGroup, _refListCaption)

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSelectGroup = useMemo(() => (group) => {
    const {
      caption,
      lists
    } = group || {}
    if (caption){
       setRefValue(_refGroupCaption, caption)
       setListOptions(lists || [])
    } else {
      setRefValue(_refGroupCaption, null)
    }
  }, [])
  // setListOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hAdd = useMemo(() => () => {
    const groupCaption = getRefValue(_refGroupCaption)
    , listCaption = getRefValue(_refListCaption)
    , msgs = [];
    if (!groupCaption) {
      msgs.push(notSelected('Group'))
    }
    if (!listCaption) {
      msgs.push(notSelected('List'))
    }

    if (msgs.length === 0){
      const {
        caption,
        config
      } = data;
      addWatchItem({
        caption,
        config,
        groupCaption,
        listCaption
      })
    } else {
      setValidationMessages(msgs)
    }
  }, [data])
  // _refListCaption, setValidationMessages
  /*eslint-enable react-hooks/exhaustive-deps */

  , _commandButtons = useMemo(() => [
      <FlatButton
        key="_add"
        caption="Add"
        title="Add Item To Watch List"
        clDiv={CL_BT_DIV}
        onClick={_hAdd}
       />
  ], [_hAdd]);

  useMsEdit(msEdit => {
    if (msEdit && msEdit.forActionType === WAT_ADD_ITEM) {
      if (msEdit.message) {
        setValidationMessages(msEdit.messages)
      } else {
        _hClose()
      }
    }
  })

  /*eslint-disable react-hooks/exhaustive-deps */
  // sync state with store on props isShow true
  useEffect(() => {
    const { isShow } = props;
    if (isShow) {
      const _groupOptions = getWatchGroups()
      , _groupCaption = getRefValue(_refGroupCaption);
      if (_groupOptions !== groupOptions){
        setRefValue(_refGroupCaption, null)
        setRefValue(_refListCaption, null)
        _updateGroupOptions()
        setListOptions([])
      } else if (_groupCaption) {
        updateListOptions(_groupCaption)
      }
    }
  }, [props])
  // _refListCaption, _updateGroupOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <ModalDialog
       style={S_DIALOG}
       caption="Add To Watch List"
       isShow={isShow}
       commandButtons={_commandButtons}
       onClose={_hClose}
    >
      <div>
        <RowInputSelect
          id="awd-g"
          caption="Group:"
          options={groupOptions}
          onSelect={_hSelectGroup}
        />
      </div>
      <div>
        <RowInputSelect
          id="awd-l"
          caption="List:"
          onSelect={_hSelectList}
          options={listOptions}
        />
      </div>
      <Row.Text
        caption="Word:"
        text={caption}
      />
      <ValidationMessages
         validationMessages={validationMessages}
       />
    </ModalDialog>
  );
})

/*
AddToWatchDialog.propTypes = {
  isShow  : PropTypes.bool,
  data    : PropTypes.object,
  onClose : PropTypes.func
}
*/


export default AddToWatchDialog
