import { Component } from '../uiApi';
//import PropTypes from 'prop-types'

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

import Interact from '../../utils/Interact'

const CL_DIALOG = 'dialog';
const CL_DIALOG_OPEN = 'dialog show-popup';

const S_ROOT = {
  zIndex: 10,
  position: 'absolute',
  top: 30,
  left: 50,
  backgroundColor: '#4D4D4D',
  border: 'solid 2px #3f5178',
  borderRadius: 5,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
}
, S_CHILDREN = {
  cursor: 'default'
}
, S_COMMAND = {
   cursor: 'default',
   float: 'right',
   marginTop: 16,
   marginBottom: 10,
   marginRight: 4
}
, S_BLOCK = {
  display: 'block'
}
, S_NONE = {
  display: 'none'
};

const DialogButtons = ({
  commandButtons,
  styleButton:S={},
  onShow,
  onClose
}) => (
  <div style={S_COMMAND}>
    {commandButtons}
    {typeof onShow === 'function' &&
      <RaisedButton
         style={S.RAISED_ROOT}
         clDiv={S.CL_RAISED_DIV}
         caption="Show"
         onClick={onShow}
      />
    }
    <RaisedButton
       style={S.RAISED_ROOT}
       clDiv={S.CL_RAISED_DIV}
       caption="Close"
       onClick={this._handleClose}
    />
  </div>
);



class DraggableDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    commandButtons: PropTypes.arrayOf(PropTypes.element),
    onShowChart: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  componentDidMount(){
     Interact.makeDragable(this.rootDiv)
     this.prevFocusedEl = document.activeElement
     this.rootDiv.focus()
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props.isShow && !prevProps.isShow) {
      this.rootDiv.focus()
    }
  }

  _handleKeyDown = (event) => {
    const focused = document.activeElement;
     if (focused == this.rootDiv){
       this.props.onKeyDown(event)
     }
  }

  _handleClose = (event) => {
    if (this.prevFocusedEl) {
      this.prevFocusedEl.focus()
    }
    this.props.onClose()
  }
  
  _refRootDiv = (_divElement) => this.rootDiv = _divElement

  render(){
    const {
       isShow,
       rootStyle,
       caption,
       browserCaptionStyle,
       commandButtons,
       styleButton,
       children,
       onShowChart,
       onClose
     } = this.props
    , [
      _classShow,
      _styleShow
    ] = isShow
      ? [CL_DIALOG_OPEN, S_BLOCK]
      : [CL_DIALOG, S_NONE];

    return (
      /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
      /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
      <div
         ref={this._refRootDiv}
         role="dialog"
         className={_classShow}
         style={{...S_ROOT, ...rootStyle, ..._styleShow}}
         tabIndex="0"
         onKeyDown={this._handleKeyDown}
      >
      {
        /*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/
        /*eslint-enable jsx-a11y/no-noninteractive-tabindex*/
      }
        <BrowserCaption
           rootStyle={browserCaptionStyle}
           caption={caption}
           onClose={onClose}
        />
        <div style={S_CHILDREN}>
           {children}
        </div>
        <DialogButtons
          commandButtons={commandButtons}
          styleButton={styleButton}
          onShow={onShowChart}
          onClose={this._handleClose}
        />
      </div>
    );
  }

  focusPrevEl(){
    if (this.prevFocusedEl){
      this.prevFocusedEl.focus()
    }
  }

}

export default DraggableDialog
