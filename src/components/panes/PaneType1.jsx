import { Component } from 'react'
//import PropTypes from 'prop-types'

import withTheme from '../hoc/withTheme'
import styleConfig from './Pane.Style'
import crModelMore from './crModelMore'

import A from '../Comp'

const CHILD_MARGIN = 36
, RESIZE_INIT_WIDTH = 635
, RESIZE_MIN_WIDTH = 375
, RESIZE_MAX_WIDTH = 1200
, RESIZE_DELTA = 10
, CL = {
   SHOW_POPUP: "show-popup",
   MENU_MORE: "popup-menu items__menu-more"
};

const S = {
  ROOT_DIV : {
    backgroundColor: '#4d4d4d',
    padding : '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: 4,
    width: 635,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    marginLeft: 16,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX : 'hidden'
  },
  BR_CAPTION: {
    marginRight: -2
  },
  BT_CIRCLE: {
    position: 'relative',
    top: -3,
    marginLeft: 16,
    marginRight: 6
  },
  SCROLL_PANE : {
    overflowY: 'auto',
    overflowX: 'hidden',
    //height: '92%',
    height: 'calc(100% - 120px)',
    paddingRight: 10
  },
  INLINE_BLOCK : {
    display : 'inline-block'
  },
  NONE : {
    display: 'none'
  }
};

const T = {
  R: "Click to remove all items"
};

const _fnNoop = () => {};

const _getWidth = style => parseInt(style.width, 10)
  || RESIZE_INIT_WIDTH;
const _toStyleWidth = width => width + 'px';

class NewsPane extends Component {
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
    onLoad: _fnNoop,
    onClose: _fnNoop
  }

  constructor(props){
    super(props);
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
              updateAction, showAction, toggleAction,
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
     const { rootDiv } = this
     , { style={} } = rootDiv || {};
     return style;
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

   _getRootDiv = () => {
     return this.rootDiv;
   }

   _hLoadItem = () => {
       const { itemConf, onLoad } = this.props
       , _word = this.iWord
            ? this.iWord.getValue()
            : void 0;
       onLoad({
         itemConf,
         word: _word,
       })
   }

  _renderConfigs(configs=[]){
     const {
       Item,
       onCloseItem,
       onRemoveUnder,
       onAddToWatch
     } = this.props;
     return configs
       .map(config => (<Item
          key={config.id}
          config={config}
          onCloseItem={onCloseItem}
          onRemoveUnder={onRemoveUnder}
          onAddToWatch={onAddToWatch}
     />));
  }


   _refRootDiv = node => this.rootDiv = node
   _refIWord = comp => this.iWord = comp

   render(){
      const {
              paneCaption,
              theme,
              Input,
              onRemoveItems
            } = this.props
          , { isShow, isMore, word, configs } = this.state
          , TS = theme.createStyle(styleConfig)
          , _showStyle = isShow
               ? S.INLINE_BLOCK
               : S.NONE
         , _showCl = isShow
               ? CL.SHOW_POPUP
               : void 0;
     return(
        <div
           ref={this._refRootDiv}
           className={_showCl}
           style={{
             ...S.ROOT_DIV,
             ...TS.BG_COLOR,
             ..._showStyle
           }}
        >
          <A.ModalSlider
            isShow={isMore}
            className={CL.MENU_MORE}
            style={TS.BG_COLOR}
            model={this._MODEL}
            onClose={this._hToggleMore}
          />
          <A.BrowserCaption
             rootStyle={{ ...S.BR_CAPTION, ...TS.PANE_CAPTION }}
             caption={paneCaption}
             onMore={this._showMore}
             onClose={this._hHide}
          >
            <A.CircleButton
              caption="R"
              title={T.R}
              style={S.BT_CIRCLE}
              onClick={onRemoveItems}
            />
            <A.SvgHrzResize
              svgStyle={TS.SVG_RESIZE}
              minWidth={RESIZE_MIN_WIDTH}
              maxWidth={RESIZE_MAX_WIDTH}
              getDomNode={this._getRootDiv}
            />
          </A.BrowserCaption>
          <Input
            ref={this._refIWord}
            TS={TS}
            initValue={word}
            onEnter={this._hLoadItem}
          />
          <A.ScrollPane
              className={TS.CL_SCROLL_PANE}
              style={S.SCROLL_PANE}
          >
            { this._renderConfigs(configs) }
          </A.ScrollPane>
        </div>
     )
   }
}

export default withTheme(NewsPane)
