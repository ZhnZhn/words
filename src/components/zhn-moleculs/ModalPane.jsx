import { Component, createRef } from 'react';

class ModalPane extends Component {
  static defaultProps = {
    onClose: () => {}
  }

  _refNode = createRef()

  componentDidUpdate(prevProps, prevState){
    if(this.props !== prevProps){
      if (this.props.isShow){
        document.addEventListener('click', this._hClickOutside, true)
      } else {
        document.removeEventListener('click', this._hClickOutside, true)
      }
    }
  }

  _hClickOutside = (event) => {
    const { onClose } = this.props
    , _node = this._refNode.current;
    if (_node && !_node.contains(event.target)) {
      onClose(event)
    }
  }

  render(){
    const { style, children } = this.props;
    return (
      <div
        style={style}
        ref={this._refNode}
      >
        {children}
      </div>
    );
  }
}

export default ModalPane
