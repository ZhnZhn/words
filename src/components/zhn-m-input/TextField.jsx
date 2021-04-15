import { Component } from 'react';
//import PropsTypes from 'prop-types'

const CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-textfield-input__div',
  INPUT: 'm-textfield-input',
  INPUT_LINE: 'm-input__line',
  INPUT_MSG_ERR: 'm-input__msg-err'
};

const S = {
  LABEL_TO_INPUT: {
     transform: 'scale(1) translate(0px, -6px)'
  },
  LABEL_ON_ERROR: {
    color: '#f44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
  },
  KEY: {
    textDecoration: 'underline'
  }

};

const _isFn = fn => typeof fn === 'function';
const _isStr = str => typeof str === 'string';

const _crCaption = (caption, accessKey) => {
  if (!accessKey) {
    return { cPrefix: caption };
  }
  const keyIndex = caption.toLowerCase()
    .indexOf(accessKey.toLowerCase());
  if (keyIndex === -1){
    return { cPrefix: caption };
  }
  return {
    cPrefix: caption.substring(0, keyIndex),
    cKey: caption.substring(keyIndex, keyIndex+1),
    cTail: caption.substring(keyIndex+1)
  };
};

const _crValue = initValue => initValue || '';

const _crInitialState = props => {
  const { initValue, onTest } = props
  , _value = _crValue(initValue);
  return {
    initValue,
    value: _value,
    isPassTest: _isFn(onTest)
       ? onTest(_value) : true
  }
};

class TextField extends Component {
  /*
  static propTypes = {
    rootStyle: PropTypes.object,
    caption: PropTypes.string,
    labelStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    errorMsg: PropTypes.string,
    initValue: PropTypes.string,
    accessKey: PropTypes.string,
    spellCheck: PropTypes.bool,
    onTest: PropTypes.func,
    onEnter: PropTypes.func,
  }
  */

  static defaultProps = {
    caption: '',
    accessKey: '',
    spellCheck: false,
  }

  constructor(props){
    super(props)
    this.isFocus = false;
    this.state = _crInitialState(props)
  }

  static getDerivedStateFromProps(props, state){
    const { initValue } = props;
    return state.initValue !== initValue
     ? _crInitialState(props)
     : null;
  }

  _handleFocusInput = () => {
    this.isFocus = true
    this.forceUpdate()
  }
  _handleBlurInput = () => {
    this.isFocus = false
    this.forceUpdate()
  }

  _handleInputChange = (event) => {
    const { value } = event.target
    , { onTest } = this.props
    , _nextState = _isFn(onTest)
        ? { value, isPassTest: onTest(value) }
        : { value };
    this.setState(_nextState)
  }
 _handleKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 46){
      this.setState({ value: '' })
    } else if (keyCode === 13 && _isFn(this.props.onEnter)) {
      this.props.onEnter(event.target.value)
    }
 }

 _ref = n => this.inputNode = n

  render(){
    const {
      rootStyle, caption,
      labelStyle, inputStyle,
      accessKey,
      errorMsg='',
      /*eslint-disable no-unused-vars*/
      initValue,
      onEnter,
      /*eslint-enable no-unused-vars*/
      ...restProps
    } = this.props
    , { value, isPassTest } = this.state
    , _labelStyle = (value || this.isFocus)
        ? void 0
        : S.LABEL_TO_INPUT
    , _labelErrStyle = isPassTest
        ? void 0
        : S.LABEL_ON_ERROR
    , _lineStyle = isPassTest
        ? void 0
        : S.LINE_ERROR
    , { cPrefix, cKey, cTail } = _crCaption(caption, accessKey);

    return (
      <div
        className={CL.SELECT}
        style={rootStyle}
      >
        <label
          className={CL.LABEL}
          style={{...labelStyle, ..._labelStyle, ..._labelErrStyle}}
         >
          {cPrefix}
          <span style={S.KEY}>{cKey}</span>
          {cTail}
        </label>
        <div className={CL.DIV}>
          <input
            ref={this._ref}
            type="text"
            className={CL.INPUT}
            style={inputStyle}
            value={value}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            translate="false"
            accessKey={accessKey}
            {...restProps}
            onFocus={this._handleFocusInput}
            onBlur={this._handleBlurInput}
            onChange={this._handleInputChange}
            onKeyDown={this._handleKeyDown}
          />
          <div className={CL.INPUT_LINE} style={_lineStyle} />
          { _lineStyle && <div className={CL.INPUT_MSG_ERR}>{errorMsg}</div>}
        </div>
      </div>
    );
  }

  getValue(){
    return String(this.state.value).trim();
  }
  setValue(str){
    if (_isStr(str)){
      this.setState({ value: str })
    }
  }
  focus(){
    if (this.inputNode) {
      this.inputNode.focus()
      if (_isFn(this.inputNode.setSelectionRange)) {
        const len = this.state.value.length
        this.inputNode.setSelectionRange(len, len)
      }
    }
  }
}

export default TextField
