//import PropTypes from 'prop-types'
import {
  useRef,
  useState,
  useMemo,
  useCallback,
  getRefInputValue,
  getRefElementStyle
} from '../uiApi';

import useToggle from '../hooks/useToggle';
import useListen from '../hooks/useListen';
import useSubscribe from '../hooks/useSubscribe';

import SvgHrzResize from '../zhn-resize/SvgHrzResize';
import useTheme from '../hoc/useTheme';
import styleConfig from './Pane.Style';
import crModelMore from './crModelMore';

import { S_PANE_TYPE1 } from '../styles/ContainerStyle';
import A from '../Comp';

const RESIZE_INIT_WIDTH = 535
, RESIZE_MIN_WIDTH = 375
, RESIZE_MAX_WIDTH = 1200
, RESIZE_DELTA = 10
, CL_SHOW_POPUP = "show-popup"
, CL_MENU_MORE = "popup-menu items__menu-more";

const S_ROOT_DIV = {
  ...S_PANE_TYPE1,
  width: RESIZE_INIT_WIDTH
}
, S_BR_CAPTION = {
  marginRight: -2
}
, S_BT_CIRCLE = {
  position: 'relative',
  top: -3,
  marginLeft: 16,
  marginRight: 6
}
, S_SCROLL_PANE = {
  overflowY: 'auto',
  overflowX: 'hidden',
  //height: '92%',
  height: 'calc(100% - 120px)'
}
, S_INLINE_BLOCK = {
  display: 'inline-block'
}
, S_NONE = {
  display: 'none'
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
    onMinWidth: _resizeTo.bind(null, RESIZE_MIN_WIDTH),
    onInitWidth: _resizeTo.bind(null, RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};

const DF_WORD = 'example'

const PaneType1 = ({
  id,
  store,
  compStore,
  selectPane,
  selectWatch,

  updateAction,

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
  ] = useState(DF_WORD)

  /*eslint-disable react-hooks/exhaustive-deps */
  , _MODEL_MORE = useMemo(
      () => crModelMore(_crModelMoreHandlers(_refRootEl, onRemoveItems)),
      []
   )
   // onRemoveItems
   /*eslint-enable react-hooks/exhaustive-deps */
   , [
     isMore,
     toggleIsMore
   ] = useToggle()
   /*eslint-disable react-hooks/exhaustive-deps */
   , _showMore = useCallback(() => {
     toggleIsMore(true)
   }, [])
   // toggleIsMore
   /*eslint-enable react-hooks/exhaustive-deps */

   , [
    isShow,
    toggleIsShow
  ] = useToggle(true)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hHide = useCallback(() => {
     onClose()
     toggleIsShow(false)
  }, [onClose])
  // toggleIsShow
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hLoadItem = useCallback(() => {
      onLoad({
        itemConf,
        word: getRefInputValue(_refWord)
      })
  }, [itemConf, onLoad])
  , TS = useTheme(styleConfig);

  useSubscribe(compStore, selectPane, (pOption) => {
    if (pOption.id === id) {
      toggleIsShow(true)
    }
  })
  useSubscribe(compStore, selectWatch, (option) => {
    const { item } = option || {}
    if (item && item.id === id) {
      setWord(item.caption)
    }
  })

  useListen(store, (actionType, option={}) => {
    if (option.id === id){
      switch(actionType){
        case updateAction:
          toggleIsShow(true)
          setConfigs([...option.configs])
          break;
        /*
        case toggleAction:
          toggleIsShow()
          break;
        */
        default:
          return;
      }
    }
  })

  const [
    _showStyle,
    _showCl
  ] = isShow
    ? [S_INLINE_BLOCK, CL_SHOW_POPUP]
    : [S_NONE];

  return (
    <div
       ref={_refRootEl}
       className={_showCl}
       style={{
         ...S_ROOT_DIV,
         ...TS.BG_COLOR,
         ..._showStyle
       }}
    >
      <A.ModalSlider
        isShow={isMore}
        className={CL_MENU_MORE}
        style={TS.BG_COLOR}
        model={_MODEL_MORE}
        onClose={toggleIsMore}
      />
      <A.BrowserCaption
         rootStyle={{...S_BR_CAPTION, ...TS.PANE_CAPTION}}
         caption={paneCaption}
         onMore={_showMore}
         onClose={_hHide}
      >
        <A.CircleButton
          caption="R"
          title={R_TITLE}
          style={S_BT_CIRCLE}
          onClick={onRemoveItems}
        />
        <SvgHrzResize
          elementRef={_refRootEl}
          //svgStyle={TS.SVG_RESIZE}
          initWidth={RESIZE_INIT_WIDTH}
          minWidth={RESIZE_MIN_WIDTH}
          maxWidth={RESIZE_MAX_WIDTH}
        />
      </A.BrowserCaption>
      <Input
        ref={_refWord}
        TS={TS}
        initValue={word}
        onEnter={_hLoadItem}
      />
      <A.ScrollPane
        className={TS.CL_SCROLL_PANE}
        style={S_SCROLL_PANE}
      >
        <ConfigsStack
           configs={configs}
           Item={Item}
           onCloseItem={onCloseItem}
           onRemoveUnder={onRemoveUnder}
           onAddToWatch={onAddToWatch}
        />
      </A.ScrollPane>
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
