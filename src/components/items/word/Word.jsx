import { Component } from 'react';

import withTheme from '../../hoc/withTheme';
import styleConfig from './Word.Style';

import GestureSwipeX from '../../zhn-gesture/GestureSwipeX';

import ItemHeader from '../ItemHeader';
import WordDef from './WordDef';

const D_REMOVE_UNDER = 60;

const CL_ITEM_HEADER = "article-header";

const S = {
  ROOT: {
    position: 'relative',
    lineHeight: 1.5,
    marginBottom: 5,
    marginRight: 25,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: 2
  },
  LEFT_LINE: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 3,
    height: 8,
    backgroundColor: '#3f51b5'
  },
  HEADER: {
    backgroundColor: '#404040'
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display: 'inline-block',
    color: 'black',
    paddingRight: 8,
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b',
  },
  SVG_CLOSE: {
    position: 'absolute',
    top: 8,
    right: 0
  }
};

class Word extends Component {

  static defaultProps = {
    config: {}
  }

  state = {
    isShow: false
  }

  _setTimeStamp = (timeStamp) => {
    this._toggleTimeStamp = timeStamp
  }

  _hToggle = ({ timeStamp }) => {
    if (this._toggleTimeStamp
        && timeStamp - this._toggleTimeStamp < 200) {
       return;
    }
    this._toggleTimeStamp = timeStamp
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  _hClose = () => {
    const {
      onCloseItem,
      config
    } = this.props;
    onCloseItem(config)
  }


  _onGestureSwipeX = (dX) => {
    if (dX > D_REMOVE_UNDER) {
      this._hClose()
      return false;
    } else {
      return true;
    }
  }


  render() {
    const {config, theme, onAddToWatch } = this.props
        , { title, caption } = config
        , TS = theme.createStyle(styleConfig)
        , { isShow } = this.state
        , _headerStyle = isShow
             ? { ...S.HEADER, ...S.HEADER_OPEN }
             : S.HEADER
        , _captionStyle = isShow
             ? { ...S.CAPTION, ...S.CAPTION_OPEN }
             : S.CAPTION;
    return (
        <GestureSwipeX
          style={S.ROOT}
          setTimeStamp= {this._setTimeStamp}
          onGesture={this._onGestureSwipeX}
        >
          <ItemHeader
             className={CL_ITEM_HEADER}
             style={{ ..._headerStyle, ...TS.HEADER }}
             captionStyle={_captionStyle}
             svgCloseStyle={S.SVG_CLOSE}
             title={title}
             caption={caption}
             isShow={isShow}
             onClick={this._hToggle}
             onClose={this._hClose}
             onAddToWatch={onAddToWatch}
          />
          <WordDef
            style={TS.DESCR}
            isShow={isShow}
            config={config}
          />
        </GestureSwipeX>
      );
    }
}

export default withTheme(Word)
