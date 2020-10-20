import { Component } from 'react';
//import PropTypes from "prop-types";

import isKeyEnter from './isKeyEnter'
import C from '../styles/Color';


//const DF_COLOR_IS = "#80c040";
const DF_COLOR_IS = "#2f7ed8"

const S = {
  DIV : {
    display: 'inline-block',
    width: 16,
    height: 16,
    cursor: 'pointer'
  },
  SVG : {
    display: 'inline-block'
  }
};

const SvgChecked = ({ stroke }) => (
  <path
      //d="M 2,3 L 8,14 14,3"
      d="M 2,5 L 8,14 14,1"
      strokeWidth="2"
      strokeLinecap="round"
      stroke={stroke}
      fill={C.BLANK}
  />
);

const _isFn = fn => typeof fn === 'function';

class SvgCheckBox extends Component {
  /*
  static propTypes = {
    initialValue: PropTypes.bool,
    stroke: PropTypes.string,
    onCheck: PropTypes.func,
    onUnCheck: PropTypes.func
  }
  */

  constructor(props){
    super(props);
    const { initialValue } = props;

    this.state = {
        isChecked: !!initialValue,
    }
  }


  _hClick = () => {
    const { onCheck, onUnCheck } = this.props
    , { isChecked } = this.state;
    if (!isChecked && _isFn(onCheck)){
      onCheck(this);
    } else if (_isFn(onUnCheck)){
      onUnCheck(this);
    }
    this.setState({ isChecked: !isChecked });
  }

  _hKeyDown = (evt) => {
    if (isKeyEnter(evt)){
      evt.preventDefault()
      this._hClick()
    }
  }

  render(){
    const { style, stroke } = this.props
    , { isChecked } = this.state
    , _restProps = isChecked
        ? { stroke: DF_COLOR_IS, fill: DF_COLOR_IS}
        : { stroke: C.GREY, fill: C.BLANK };
    return (
      <div
         role="checkbox"
         tabIndex="0"
         aria-checked={isChecked}
         style={{ ...S.DIV, ...style }}
         onClick={this._hClick}
         onKeyDown={this._hKeyDown}
      >
        <svg
            viewBox="0 0 16 16" width="100%" height="100%"
            preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
            style={S.SVG}
        >
          <rect
             x="1" y="1"
             height="14" width="14"
             strokeWidth="2" rx="3"
             strokeLinecap="round"
             {..._restProps}
          />
          { isChecked
              ? <SvgChecked stroke={stroke} />
              : null
          }
        </svg>
      </div>
    );
  }

  setUnchecked = () => {
    this.setState({ isChecked: false });
  }
}

export default SvgCheckBox
