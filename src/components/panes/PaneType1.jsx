//import PropTypes from 'prop-types'
import {
  Component,
  createRef
} from 'react';

import SvgHrzResize from '../zhn-resize/SvgHrzResize';
import withTheme from '../hoc/withTheme';
import styleConfig from './Pane.Style';
import crModelMore from './crModelMore';

import A from '../Comp';

const CHILD_MARGIN = 36
, RESIZE_INIT_WIDTH = 535
, RESIZE_MIN_WIDTH = 375
, RESIZE_MAX_WIDTH = 1200
, RESIZE_DELTA = 10
, CL_SHOW_POPUP = "show-popup"
, CL_MENU_MORE = "popup-menu items__menu-more";

const S_ROOT_DIV = {
  backgroundColor: '#4d4d4d',
  padding : '0px 0px 3px 0px',
  position: 'relative',
  borderRadius: 4,
  width: RESIZE_INIT_WIDTH,
  height: 'calc(100vh - 71px)',
  minHeight: 500,
  marginLeft: 16,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  overflowY: 'hidden',
  overflowX : 'hidden'
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
  height: 'calc(100% - 120px)',
  paddingRight: 10
}
, S_INLINE_BLOCK = {
  display: 'inline-block'
}
, S_NONE = {
  display: 'none'
}

, R_TITLE = "Click to remove all items";

const _isFn = fn => typeof fn === 'function'
, FN_NOOP = () => {}
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

class PaneType1 extends Component {
  /*
    static propTypes = {
      paneCaption: PropTypes.string,
      store: PropTypes.shape({
        listen; PropTypes.func
      }),

      id: PropTypes.string,
      addAction: PropTypes.string,
      showAction: PropTypes.string,
      toggleAction: PropTypes.string
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

  static defaultProps = {
    onLoad: FN_NOOP,
    onClose: FN_NOOP
  }

  constructor(props){
    super(props);

    this._refRootEl = createRef()
    this._refWord = createRef()

    this.childMargin = CHILD_MARGIN;

    this._MODEL = crModelMore({
      onMinWidth: this._resizeTo.bind(this, RESIZE_MIN_WIDTH),
      onInitWidth: this._resizeTo.bind(this, RESIZE_INIT_WIDTH),
      onPlusWidth: this._plusToWidth,
      onMinusWidth: this._minusToWidth,
      onRemoveItems: props.onRemoveItems
    })

    this.state = {
      isShow: true,
      isMore: false,
      word: 'example',
      configs: []
    };
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, option={}) => {
      const {
        id,
        updateAction,
        showAction,
        toggleAction,
        watchAction
      } = this.props;

      if (option.id === id){
        switch(actionType){
          case updateAction:
            this.setState({
              isShow: true,
              configs: option.configs
            })
            break;
          case showAction:
            this.setState(prevState => {
              return prevState.isShow
                ? null
                : { isShow: true };
            })
            break;
          case toggleAction:
            this.setState(prevState => ({
              isShow: !prevState.isShow
            }))
            break;
          case watchAction:
            this.setState({
              word: option.caption
            })
            break;
          default:
            return void 0;
        }
      }
   }

   _showMore = () => {
      this.setState({ isMore: true })
   }
   _hToggleMore = () => {
     this.setState(prevState => ({
       isMore: !prevState.isMore
     }))
   }

   _getRootNodeStyle = () => {
     const { style } = this._refRootEl.current || {};
     return style || {};
   }

   _resizeTo = (width) => {
     this._getRootNodeStyle().width = _toStyleWidth(width);
   }

   _plusToWidth = () => {
     const style = this._getRootNodeStyle()
     , w = _getWidth(style) + RESIZE_DELTA;
     if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w)
     }
   }
   _minusToWidth = () => {
     const style = this._getRootNodeStyle()
     , w = _getWidth(style) - RESIZE_DELTA;
     if (w > RESIZE_MIN_WIDTH) {
       style.width = _toStyleWidth(w)
     }
   }

   _hHide = () => {
      this.props.onClose()
      this.setState({ isShow: false })
   }


   _hLoadItem = () => {
       const { itemConf, onLoad } = this.props
       , _wordInst = this._refWord.current
       , word = _wordInst && _isFn(_wordInst.getValue)
            ? _wordInst.getValue()
            : void 0;

       onLoad({ itemConf, word })
   }

   render(){
      const {
        paneCaption,
        theme,
        Input,
        onRemoveItems,
        Item,
        onCloseItem,
        onRemoveUnder,
        onAddToWatch
      } = this.props
      , {
        isShow,
        isMore,
        word,
        configs
      } = this.state
      , TS = theme.createStyle(styleConfig)
      , [
        _showStyle,
        _showCl
      ] = isShow
        ? [S_INLINE_BLOCK, CL_SHOW_POPUP]
        : [S_NONE];

     return(
        <div
           ref={this._refRootEl}
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
            model={this._MODEL}
            onClose={this._hToggleMore}
          />
          <A.BrowserCaption
             rootStyle={{...S_BR_CAPTION, ...TS.PANE_CAPTION}}
             caption={paneCaption}
             onMore={this._showMore}
             onClose={this._hHide}
          >
            <A.CircleButton
              caption="R"
              title={R_TITLE}
              style={S_BT_CIRCLE}
              onClick={onRemoveItems}
            />
            <SvgHrzResize
              elementRef={this._refRootEl}
              //svgStyle={TS.SVG_RESIZE}
              initWidth={RESIZE_INIT_WIDTH}
              minWidth={RESIZE_MIN_WIDTH}
              maxWidth={RESIZE_MAX_WIDTH}
            />
          </A.BrowserCaption>
          <Input
            //ref={this._refIWord}
            ref={this._refWord}
            TS={TS}
            initValue={word}
            onEnter={this._hLoadItem}
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
     )
   }
}

export default withTheme(PaneType1)
