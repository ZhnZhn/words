import { Component } from 'react'
//import PropsTypes from 'prop-types'

//const DB_TOUCH_PERIOD = 500

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
    const { onTest, onEnter, initValue } = props;

    this.isFocus = false;
    this.isOnTest = _isFn(onTest)
    this.isOnEnter = _isFn(onEnter)

    this._firstTouch = 0;

    const _value = initValue || ''
    this.state = {
      value: _value,
      isPassTest: this.isOnTest
         ? onTest(_value) : true
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    /* update new initValue from parent component */
    if (this.props !== nextProps
      && this.props.initValue !== nextProps.initValue ) {
        this.setState({
          value: nextProps.initValue || ''
        })
    }
  }


  /*
  _handleClearInput = () => {
    this.setState({ value: '' })
  }


  _handleDbTouch = (ev) => {
    const _ms = Date.now();
    if (this._firstTouch) {
      if (_ms - this._firstTouch<DB_TOUCH_PERIOD) {
        this._firstTouch = 0
        this._handleClearInput()
      } else {
        this._firstTouch = _ms
      }
    } else {
      this._firstTouch = _ms
    }
  }
  */

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
        , { onTest  } = this.props;
    if (this.isOnTest) {
      this.setState({
        value, isPassTest: onTest(value)
      })
    } else {
      this.setState({ value })
    }
  }
 _handleKeyDown = (event) => {
   const { keyCode } = event;
   if (keyCode === 46){
     this.setState({ value: '' })
   } else if (keyCode === 13 && this.isOnEnter) {
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
            ...restProps
          } = this.props
        , { value, isPassTest } = this.state
        , _labelStyle = (value || this.isFocus)
            ? void 0
            : S.LABEL_TO_INPUT
        , _labelErrStyle = (isPassTest)
            ? void 0
            : S.LABEL_ON_ERROR
        , _lineStyle = (isPassTest)
            ? void 0
            : S.LINE_ERROR
       , { cPrefix, cKey, cTail } = _crCaption(caption, accessKey);

    return (
      <div
        className={CL.SELECT}
        style={rootStyle}
        //onDoubleClick={this._handleClearInput}
        //onTouchStart={this._handleDbTouch}
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
            autoComplete="new-text"
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
