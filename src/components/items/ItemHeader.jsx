import React, { Component } from 'react'

import A from '../Comp'

const CL_NOT_SELECTED = "not-selected";

const T = {
  A: "Click to open add to watch list dialog"
};

const _fnNoop = () => {};

const _setPrevFocused = element => {
  document._prevFocusedZhn = element
};

class ItemHeader extends Component {

  /*
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    captionStyle: PropTypes.object,
    svgCloseStyle: PropTypes.object,

    caption: PropTypes.string,

    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onAddToWatch: PropTypes.func
  }
  */
  constructor(props){
    super(props)
    this._refRootNode = React.createRef()
    this._refBtAdd = React.createRef()
  }

  static defaultProps = {
    onClick: _fnNoop,
    onClose: _fnNoop,
    onAddToWatch: _fnNoop
  }

  componentDidMount(){
    if (this._refRootNode.current) {
      this._refRootNode.current.focus()
    }
  }

  _hAddToWatch = (event) => {
    event.stopPropagation()
    _setPrevFocused(this._refBtAdd.current)
    const { caption, onAddToWatch } = this.props
    onAddToWatch({ caption })
  }

  _hClose = (event) => {
    event.stopPropagation()
    this.props.onClose()
  }

  _hKeyDown = (event) => {
    const { target, keyCode } = event;
    if (target === this._refRootNode.current) {
      const { onClick, onClose } = this.props;
      if (keyCode === 13) {
        onClick()
      } else if (keyCode === 46) {
        onClose()
      } else if (keyCode === 65) {
        this._hAddToWatch(event)
      }
    }
  }

  render(){
    const {
            className,
            style, captionStyle, svgCloseStyle,
            title,
            onClick
          } = this.props;
    return (
      <div
        tabIndex="0"
        role="button"
        ref={this._refRootNode}
        className={className}
        style={style}
        onClick={onClick}
        onKeyDown={this._hKeyDown}
      >
        <span
           className={CL_NOT_SELECTED}
           style={captionStyle}
        >
           {title}
        </span>
        <A.CircleButton
          ref={this._refBtAdd}
          caption="A"
          title={T.A}
          onClick={this._hAddToWatch}
        />
        <A.SvgClose
            tabIndex="-1"
            style={svgCloseStyle}
            onClose={this._hClose}
        />
      </div>
    );
  }

  focus() {
    this._refRootNode.current.focus()
  }
}

export default ItemHeader
