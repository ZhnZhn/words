import { Component } from 'react'

const _fnNoop = () => {};

class MenuItem extends Component {
   static defaultProps = {
     onClick: _fnNoop,
     onClose: _fnNoop
   }

  _hKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 13 ) {
      this.props.onClick()
    } else if (keyCode === 27 ) {
      this.props.onClose({ target: this.divNode })
    }
  }

  _ref = (n) => this.divNode = n

  render(){
    const { className, caption, onClick } = this.props;
    return (
      <div
        role="button"
        ref={this._ref}
        className={className}
        tabIndex="0"
        onClick={onClick}
        onKeyDown={this._hKeyDown}
      >
        {caption}
      </div>
    );
  }

  focus(){
    this.divNode.focus()
  }
}

export default MenuItem
