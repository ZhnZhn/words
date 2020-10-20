import { Component } from 'react'

import ModalPane from '../zhn-moleculs/ModalPane'
import A from '../zhn-atoms/Atoms'

class PaneTopics extends Component {
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps){
      const { isShow } = this.props;
      if (isShow && !prevProps.isShow) {
        this.prevFocused = document.activeElement
        this.firstItem.focus()
      } else if ( !isShow && prevProps.isShow) {
        if (this.prevFocused) {
          this.prevFocused.focus()
        }
      }
    }
  }

  _ref = (n) => this.firstItem = n

  _renderItems = ({ clItem, items, onClose }) => {
    return items.map((item, index) => {
      const _ref = index === 0
              ? this._ref
              : undefined;
      return (
        <A.MenuItem
          key={item.caption}
          ref={_ref}
          className={clItem}
          {...item}
          onClose={onClose}
        />
      );
    })
  }

  render(){
    const {
           className, paneStyle, isShow,
           clItem,
           items,
           onClose
         } = this.props;

    return (
      <ModalPane
        isShow={isShow}
        onClose={onClose}
      >
        <A.ShowHide
          className={className}
          style={paneStyle}
          isShow={isShow}
        >
          {this._renderItems({ clItem, items, onClose })}
        </A.ShowHide>
     </ModalPane>
    );
  }
}

export default PaneTopics
