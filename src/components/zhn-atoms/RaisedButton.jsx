//import PropTypes from 'prop-types'
import { Component } from 'react';
import crCn from '../zhn-utils/crCn';

const CL_BT = 'bt-raised'
, CL_BT_SPAN = 'bt-raised__span'
, S_PRIMARY_SPAN = { color: '#80c040' };

class RaisedButton extends Component {
  /*
  static propTypes = {
    className: PropTypes.string,
    rootStyle: PropTypes.object,
    clDiv: PropTypes.string,
    caption: PropTypes.string,
    tabIndex: PropTypes.number,
    isPrimary: PropTypes.bool
    onClick: PropTypes.func
  }
  */

  static defaultProps = {
    tabIndex: 0
  }

  _refNode = node => this.rootNode = node

  render(){
    const {
        className,
        rootStyle,
        clDiv,
        caption, tabIndex,
        isPrimary,
        onClick
    } = this.props
    , _btCl = crCn(CL_BT, className)
    , _spanStyle = isPrimary
         ? S_PRIMARY_SPAN
         : void 0;
    return (
      <button
        ref = {this._refNode}
        tabIndex={tabIndex}
        className={_btCl}
        style={rootStyle}
        onClick={onClick}
      >
        <div className={clDiv}>
          <span
             className={CL_BT_SPAN}
             style={_spanStyle}
          >
            {caption}
          </span>
        </div>
      </button>
    );
  }

  focus(){
    this.rootNode.focus()
  }
}

export default RaisedButton
