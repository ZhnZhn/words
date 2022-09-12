//import PropTypes from "prop-types";
import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  setRefValue
} from '../uiApi';

import useRefItemCaption from './useRefItemCaption';
import RowInputSelect from './RowInputSelect';

const SelectGroupList = forwardRef(({
  inputStyle,
  store,
  groupOptions,
  groupCaption,
  listCaption
}, ref) => {
  const _refCaptionGroup = useRef(null)
  , [
    _refCaptionList,
    _hSelectList
  ] = useRefItemCaption()
  , [
    listOptions,
    setListOptions
  ] = useState([])
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

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setRefValue(_refCaptionGroup, null)
    setRefValue(_refCaptionList, null)
    setListOptions([])
  }, [groupOptions])
  // _refCaptionList
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
