import React, { Component } from 'react'

import A from '../Comp'

const CL_NOT_SELECTED = "not-selected";

const T = {
  A: "Click to open add to watch list dialog"
};

const _fnNoop = () => {};

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

  static defaultProps = {
    onClick: _fnNoop,
    onClose: _fnNoop,
    onAddToWatch: _fnNoop
  }

  componentDidMount(){
    if (this.rootNode) {
      this.rootNode.focus()
    }
  }

  _hAddToWatch = (event) => {
    event.stopPropagation()
    const { caption, onAddToWatch } = this.props
    onAddToWatch({ caption })
  }

  _hClose = (event) => {
    event.stopPropagation()
    this.props.onClose()
  }

  _hKeyDown = (event) => {
    const keyCode = event.keyCode
        , { onClick, onClose } = this.props;
    if (keyCode === 13) {
      onClick()
    } else if (keyCode === 46) {
      onClose()
    }
  }

 _refRoot = (node) => this.rootNode = node


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
        ref={this._refRoot}
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
    this.rootNode.focus()
  }
}

export default ItemHeader
