//import PropTypes from 'prop-types'
import { bindTo } from '../../utils/bindTo';

import {
  useRef,
  useState,
  useMemo,
  useCallback,
  getRefInputValue,
  getRefElementStyle
} from '../uiApi';

import {
  crShowHideInlineIf
} from '../styleFn';

import useToggle from '../hooks/useToggle';
import useBool from '../hooks/useBool';

import CircleButton from '../zhn/button/CircleButton';
import BrowserCaption from '../zhn/BrowserCaption';
import ScrollPane from '../zhn/ScrollPane';
import { ModalSliderMemoIsShow } from '../zhn-modal-slider/ModalSlider';
import SvgHrzResize from '../zhn-resize/SvgHrzResize';

import crModelMore from './crModelMore';
import { INITIAL_WORD } from './wordConfig';

const RESIZE_INIT_WIDTH = 535
, RESIZE_MIN_WIDTH = 375
, RESIZE_MAX_WIDTH = 1200
, RESIZE_DELTA = 10
, CL_PANE_T1 = 'pane-t1'
, CL_MENU_MORE = "popup-menu items__menu-more";

const S_ROOT_DIV = {
  width: RESIZE_INIT_WIDTH
}
, S_BR_CAPTION = {
  display: 'flex'
}
, S_BT_CIRCLE = {
  position: 'relative',
  top: 3,
  marginLeft: 16,
  marginRight: 6
}
, S_SVG_RESIZE = {
  paddingTop: 3
}
, S_SCROLL_PANE = {
  overflowY: 'auto',
  overflowX: 'hidden',
  //height: '92%',
  height: 'calc(100% - 120px)'
}
, R_TITLE = "Click to remove all items";

const FN_NOOP = () => {}
, _getWidth = style => parseInt(style.width, 10)
   || RESIZE_INIT_WIDTH
, _toStyleWidth = width => width + 'px';

const ConfigsStack = ({
  configs,
  Item,
  onCloseItem,
  onRemoveUnder,
  onAddToWatch
}) => (configs || [])
  .map(config => (<Item
     key={config.id}
     config={config}
     onCloseItem={onCloseItem}
     onRemoveUnder={onRemoveUnder}
     onAddToWatch={onAddToWatch}
  />));

const _crModelMoreHandlers = (
  ref,
  onRemoveItems
) => {
  const _resizeTo = (
    width
  ) => {
    (getRefElementStyle(ref) || {}).width = _toStyleWidth(width);
  }
  , _plusToWidth = () => {
    const style = getRefElementStyle(ref) || {}
    , w = _getWidth(style) + RESIZE_DELTA;
    if (w < RESIZE_MAX_WIDTH) {
       style.width = _toStyleWidth(w)
    }
  }
  , _minusToWidth = () => {
    const style = getRefElementStyle(ref) || {}
    , w = _getWidth(style) - RESIZE_DELTA;
    if (w > RESIZE_MIN_WIDTH) {
      style.width = _toStyleWidth(w)
    }
  };

  return {
    onMinWidth: bindTo(_resizeTo, RESIZE_MIN_WIDTH),
    onInitWidth: bindTo(_resizeTo, RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};

const PaneType1 = ({
  id,
  usePane,
  useMsItem,
  useWatch,
  paneCaption,
  Input,
  Item,
  itemConf,
  onLoad=FN_NOOP,
  onClose=FN_NOOP,
  onRemoveItems,
  onCloseItem,
  onRemoveUnder,
  onAddToWatch
}) => {
  const _refRootEl = useRef()
  , _refWord = useRef()
  , [
    configs,
    setConfigs
  ] = useState([])
  , [
    word,
    setWord
  ] = useState(INITIAL_WORD)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _MODEL_MORE = useMemo(
      () => crModelMore(_crModelMoreHandlers(_refRootEl, onRemoveItems)),
      []
   )
   // onRemoveItems
   /*eslint-enable react-hooks/exhaustive-deps */
   , [
     isMenuMore,
     showMenuMore,
     closeMenuMore
   ] = useBool()
   , [
    isShow,
    toggleIsShow
  ] = useToggle(!0)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hHide = useCallback(() => {
     onClose()
     toggleIsShow(!1)
  }, [onClose])
  // toggleIsShow
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hLoadItem = useCallback(() => {
      onLoad({
        itemConf,
        word: getRefInputValue(_refWord)
      })
  }, [itemConf, onLoad]);

  usePane(pOption => {
    if (pOption && pOption.id === id) {
      toggleIsShow(!0)
    }
  })
  useMsItem(option => {
    if (option && option.id === id) {
      toggleIsShow(!0)
      setConfigs([...option.configs])
    }
  })
  useWatch(option => {
    const { item } = option || {};
    if (item && item.id === id) {
      setWord(item.caption)
    }
  })

  const [
    _showStyle,
    _showCl
  ] = crShowHideInlineIf(isShow, CL_PANE_T1);

  return (
    <div
       ref={_refRootEl}
       className={_showCl}
       style={{
         ...S_ROOT_DIV,
         ..._showStyle
       }}
    >
      <ModalSliderMemoIsShow
        isShow={isMenuMore}
        className={CL_MENU_MORE}
        model={_MODEL_MORE}
        onClose={closeMenuMore}
      />
      <BrowserCaption
         rootStyle={S_BR_CAPTION}
         caption={paneCaption}
         onMore={showMenuMore}
         onClose={_hHide}
      >
        <CircleButton
          caption="R"
          title={R_TITLE}
          style={S_BT_CIRCLE}
          onClick={onRemoveItems}
        />
        <SvgHrzResize
          elementRef={_refRootEl}
          style={S_SVG_RESIZE}
          initWidth={RESIZE_INIT_WIDTH}
          minWidth={RESIZE_MIN_WIDTH}
          maxWidth={RESIZE_MAX_WIDTH}
        />
      </BrowserCaption>
      <Input
        refEl={_refWord}
        initValue={word}
        onEnter={_hLoadItem}
      />
      <ScrollPane
        style={S_SCROLL_PANE}
      >
        <ConfigsStack
           configs={configs}
           Item={Item}
           onCloseItem={onCloseItem}
           onRemoveUnder={onRemoveUnder}
           onAddToWatch={onAddToWatch}
        />
      </ScrollPane>
    </div>
  );
};

/*
PaneType1.propTypes = {
  paneCaption: PropTypes.string,
  store: PropTypes.shape({
    listen; PropTypes.func
  }),

  id: PropTypes.string,
  updateAction: PropTypes.string,
  Input: PropTypes.element,

  itemConf: PropTypes.object,
  onLoad: PropTypes.func
  onClose: PropTypes.func

  onRemoveItems: PropTypes.func,
  onRemoveUnder: PropTypes.func,
  onCloseItem: PropTypes.func,
  onAddToWatch: PropTypes.func
}
*/

export default PaneType1
