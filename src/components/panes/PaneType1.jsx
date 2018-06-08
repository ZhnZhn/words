import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import withTheme from '../hoc/withTheme'
import styleConfig from './Pane.Style'

import A from '../zhn-atoms/Atoms'

const SHOW_POPUP = "show-popup"
    , CHILD_MARGIN = 36
    , RESIZE_MIN_WIDTH = 375
    , RESIZE_MAX_WIDTH = 1200;

const S = {
  ROOT_DIV : {
    backgroundColor: '#4D4D4D',
    padding : '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: '4px',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX : 'hidden'
  },
  BR_CAPTION: {
    marginRight: '-2px'
  },
  BT_CIRCLE: {
    marginLeft: '16px',
    marginRight: '6px'
  },
  SCROLL_PANE : {
    overflowY: 'auto',
    overflowX: 'hidden',
    //height: '92%',
    height: 'calc(100% - 120px)',
    paddingRight: '10px'
  },
  INLINE_BLOCK : {
    display : 'inline-block'
  },
  NONE : {
    display: 'none'
  }
};

const _fnNoop = () => {};

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
    super();
    this.childMargin = CHILD_MARGIN;
    this.state = {
      isShow: true,
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
            return undefined;
        }
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
                : undefined;
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
     return configs.map(config => {
        return (
          <Item
             key={config.id}
             config={config}
             onCloseItem={onCloseItem}
             onRemoveUnder={onRemoveUnder}
             onAddToWatch={onAddToWatch}
          />
        );
     })
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
          , { isShow, word, configs } = this.state
          , TS = theme.createStyle(styleConfig)
          , _showStyle = isShow
               ? S.INLINE_BLOCK
               : S.NONE
         , _showCl = isShow
               ? SHOW_POPUP
               : undefined;
     return(
        <div
           ref={this._refRootDiv}
           className={_showCl}
           style={{ ...S.ROOT_DIV, ...TS.PANE_ROOT, ..._showStyle }}
        >
          <A.BrowserCaption
             rootStyle={{ ...S.BR_CAPTION, ...TS.PANE_CAPTION }}
             caption={paneCaption}
             onClose={this._hHide}
          >
            <A.CircleButton
              caption="R"
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
