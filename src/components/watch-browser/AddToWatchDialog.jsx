//import PropTypes from "prop-types";
import {
  useRef,
  useMemo,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';

import useListen from '../hooks/useListen';

import memoIsShow from '../hoc/memoIsShow';
import useTheme from '../hoc/useTheme';
import styleConfig from '../dialogs/Dialog.Style';

import useGroupOptions from './useGroupOptions';
import useListOptions from './useListOptions';
import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';

import {
  WAT_ADD_ITEM,
  WAT_EDIT_WATCH_COMPLETED,
  WAT_EDIT_WATCH_FAILED,
  WatchActions
} from '../../flux/actions/WatchActions';
import {
  notSelected
} from '../../constants/MsgWatch';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import RowInputSelect from './RowInputSelect'
import Row from '../dialogs/Row';
import A from './Atoms';

const actionCompleted = WAT_EDIT_WATCH_COMPLETED
, actionFailed =  WAT_EDIT_WATCH_FAILED
, forActionType = WAT_ADD_ITEM;

const CL_BT_DIV = 'bt-flat__div'
, S_DIALOG = {
  left: 'calc(50vw - 142px)',
  width: 300
}
, S_BT_ROOT = {
  color: '#3270b4'
};

const AddToWatchDialog = memoIsShow((
  props
) => {
  const {
    isShow,
    store,
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
  ] = useGroupOptions(store)
  , _refGroupCaption = useRef(null)
  , [
    _refListCaption,
    _hSelectList
  ] = useRefItemCaption()
  , [
    listOptions,
    setListOptions,
    updateListOptions
  ] = useListOptions(store, _refListCaption)

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
      WatchActions.addWatchItem({
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
      <A.Button.Flat
        key="_add"
        caption="Add"
        title="Add Item To Watch List"
        rootStyle={S_BT_ROOT}
        clDiv={CL_BT_DIV}
        onClick={_hAdd}
       />
  ], [_hAdd]);

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted && data.forActionType === forActionType){
      _hClose()
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      setValidationMessages(data.messages || [])
    }
  })

  /*eslint-disable react-hooks/exhaustive-deps */
  // sync state with store on props isShow true
  useEffect(() => {
    const { isShow } = props;
    if (isShow) {
      const _groupOptions = store.getWatchGroups()
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

  const TS = useTheme(styleConfig);

  return (
    <ModalDialog
       STYLE={TS.BT}
       style={{...TS.R_DIALOG, ...S_DIALOG}}
       captionStyle={TS.BROWSER_CAPTION}
       caption="Add To Watch List"
       isShow={isShow}
       commandButtons={_commandButtons}
       onClose={_hClose}
    >
      <div>
        <RowInputSelect
          inputStyle={TS.INPUT}
          caption="Group:"
          options={groupOptions}
          onSelect={_hSelectGroup}
        />
      </div>
      <div>
        <RowInputSelect
          inputStyle={TS.INPUT}
          caption="List:"
          onSelect={_hSelectList}
          options={listOptions}
        />
      </div>
      <Row.Text
        caption="Word:"
        text={caption}
      />
      <A.ValidationMessages
         validationMessages={validationMessages}
       />
    </ModalDialog>
  );
})

/*
AddToWatchDialog.propTypes = {
  isShow  : PropTypes.bool,
  data    : PropTypes.object,
  store   : PropTypes.shape({
    listen: PropTypes.func,
    getWatchGroups: PropTypes.func,
    getWatchListsByGroup: PropTypes.func
  }),
  onClose : PropTypes.func
}
*/


export default AddToWatchDialog
