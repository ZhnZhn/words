//import PropTypes from "prop-types";
import {
  forwardRef,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  setRefValue
} from '../uiApi';

import useRefItemCaption from './useRefItemCaption';
import useListOptions from './useListOptions';
import RowInputSelect from './RowInputSelect';

const SelectGroupList = forwardRef((
  props,
  ref
) => {
  const {
    inputStyle,
    store,
    groupOptions,
    groupCaption,
    listCaption
  } = props
  , _refCaptionGroup = useRef(null)
  , [
    _refCaptionList,
    _hSelectList
  ] = useRefItemCaption()
  , [
    listOptions,
    setListOptions,
    updateListOptions
  ] = useListOptions(store, _refCaptionList)

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSelectGroup = useCallback((item) => {
    const {
      caption,
      lists
    } = item || {}
    if (caption){
      setRefValue(_refCaptionGroup, caption)
      setListOptions(lists || [])
    } else {
      setRefValue(_refCaptionGroup, null)
    }
  }, [])
  // setListOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  // sync store with state on props update
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const _captionGroup = getRefValue(_refCaptionGroup);
    if (props.groupOptions !== groupOptions) {
      setRefValue(_refCaptionGroup, null)
      setRefValue(_refCaptionList, null)
      setListOptions([])
    } else if (_captionGroup) {
      updateListOptions(_captionGroup)
    }
  }, [props])
  // _refCaptionList, groupOptions, store
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useImperativeHandle(ref, () => ({
    getValue: () => ({
      captionGroup: getRefValue(_refCaptionGroup),
      captionList: getRefValue(_refCaptionList)
    })
  }), [])
  // _refCaptionList
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
       <RowInputSelect
         inputStyle={inputStyle}
         caption={groupCaption}
         options={groupOptions}
         onSelect={_hSelectGroup}
       />
       <RowInputSelect
         inputStyle={inputStyle}
         caption={listCaption}
         options={listOptions}
         onSelect={_hSelectList}
       />
    </>
  );
});

/*
SelectGroupList.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func,
    getWatchListsByGroup: PropTypes.func
  }),
  groupCaption: PropTypes.string,
  groupOptions: PropTypes.array,
  listCaption: PropTypes.string
}
*/

export default SelectGroupList
