import {
  useRef,
  useCallback,
  getRefValue,
  setRefValue
} from '../../uiApi';

import {
  crStyle2,
  crShowHide
} from '../../styleFn';

import useToggle from '../../hooks/useToggle';

import GestureSwipeX from '../../zhn-gesture/GestureSwipeX';
import ItemHeader from '../ItemHeader';
import DefinitionList from './DefinitionList';

const D_REMOVE_UNDER = 60
, CL_ITEM_HEADER = "item-header"
, S_ROOT = {
  position: 'relative',
  lineHeight: 1.5,
  marginBottom: 5,
  marginRight: 16,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderBottomRightRadius: 2
}
, S_CAPTION = {
  display: 'inline-block',
  color: 'black',
  paddingLeft: 8,
  paddingRight: 8,
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer'
}
, S_CAPTION_OPEN = {
  color: '#607d8b',
}
, S_SVG_CLOSE = {
  position: 'absolute',
  top: 8,
  right: 0
}
, S_WORD_DEF = {
  paddingTop: 6,
  paddingRight: 4,
  paddingBottom: 6,
  lineHeight: void 0
}
, DF_CONFIG = {};

const Word = ({
  config=DF_CONFIG,
  onCloseItem,
  onAddToWatch
}) => {
  const _refToggleTimeStamp = useRef()
  , [
    isShow,
    toggleIsShow
  ] = useToggle()
  , _setTimeStamp = useCallback(timeStamp => {
    setRefValue(_refToggleTimeStamp, timeStamp)
  }, [])

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hToggle = useCallback(({ timeStamp }) => {
    const _toggleTimeStamp = getRefValue(_refToggleTimeStamp)
    if (_toggleTimeStamp && timeStamp - _toggleTimeStamp < 200) {
       return;
    }
    setRefValue(_refToggleTimeStamp, timeStamp)
    toggleIsShow()
  }, [])
  // toggleIsShow
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
    onCloseItem(config)
  }, [])
  // onCloseItem, config
  , _onGestureSwipeX = useCallback(dX => dX > D_REMOVE_UNDER
      ? (_hClose(), !1)
      : !0
  , [])
  // _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , _captionStyle = crStyle2(
      S_CAPTION,
      isShow && S_CAPTION_OPEN
  );

  return (
    <GestureSwipeX
      style={S_ROOT}
      setTimeStamp= {_setTimeStamp}
      onGesture={_onGestureSwipeX}
    >
      <ItemHeader
         className={CL_ITEM_HEADER}
         captionStyle={_captionStyle}
         svgCloseStyle={S_SVG_CLOSE}
         title={config.title}
         caption={config.caption}
         isShow={isShow}
         onClick={_hToggle}
         onClose={_hClose}
         onAddToWatch={onAddToWatch}
      />
      <DefinitionList
        style={crShowHide(isShow, S_WORD_DEF)}
        defItems={config.results}
      />
    </GestureSwipeX>
  );
}

export default Word
