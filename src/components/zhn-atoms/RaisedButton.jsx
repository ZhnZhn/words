import React, { Component } from 'react'
//import PropTypes from 'prop-types'

const CL_BT = 'bt-raised';
const CL_BT_SPAN = 'bt-raised__span';

const S = {
  PRIMARY_SPAN: {
    color: '#80c040'
  }
};

class RaisedButton extends Component {
  /*
  static propTypes = {
    rootStyle: PropTypes.object,
    clDiv: PropTypes.string,
    caption: PropTypes.string,
    tabIndex: PropTypes.number,
    isPrimary: PropTypes.bool
    onClick: PropTypes.func
  }
  */

  static defaultProps = {
    tabIndex: 0,
    onClick: () => {}
  }

  _refNode = node => this.rootNode = node

  render(){
    const {
            rootStyle, clDiv,
            caption, tabIndex,
            isPrimary,
            onClick
          } = this.props
        , _spanStyle = (isPrimary)
             ? S.PRIMARY_SPAN
             : undefined;
    return (
      <button
        ref = {this._refNode}
        tabIndex={tabIndex}
        className={CL_BT}
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
