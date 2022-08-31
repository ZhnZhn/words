import {
  Component,
  createRef
} from 'react';

import ModalPane from '../zhn-moleculs/ModalPane';
import A from '../zhn-atoms/Atoms';

const ItemsStack = ({
  ref,
  items,
  clItem,
  onClose
}) => items
 .map((item, index) => {
    const _ref = index === 0
      ? ref
      : void 0;
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

class PaneTopics extends Component {
  _ref = createRef()

  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps){
      const { isShow } = this.props;
      if (isShow && !prevProps.isShow) {
        this.prevFocused = document.activeElement
        const _el = this.ref.current;
        if (_el) {
          _el.focus()
        }
      } else if (!isShow && prevProps.isShow) {
        if (this.prevFocused) {
          this.prevFocused.focus()
        }
      }
    }
  }

  render(){
    const {
      className,
      paneStyle,
      isShow,
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
          <ItemsStack
            ref={this._ref}
            items={items}
            clItem={clItem}
            onClose={onClose}
          />
        </A.ShowHide>
     </ModalPane>
    );
  }
}

export default PaneTopics
