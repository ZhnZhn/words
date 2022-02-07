import { Component } from 'react';
//import PropTypes from "prop-types";

const S_INPUT_TEXT = {
    display: 'inline',
    color: 'green',
    width: 40,
    height: 26,
    paddingLeft: 5,
    margin: '0 5px',
    border: 'medium none',
    outline: 'medium none',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e1e1cb',
    background: 'transparent none repeat scroll 0 0',
};

const C_BLANK = ''
, C_TEXT = 'text'
, C_ON = 'on'
, C_OFF = 'off'


const _isFn = fn => typeof fn === 'function';

class InputText extends Component {
  /*
  static propTypes = {
    placeholder: PropTypes.string,
    initValue: PropTypes.string,
    style: PropTypes.object,
    onEnter: PropTypes.func
  }
  */
  static defaultProps = {
    initValue: C_BLANK
  }


  constructor(props){
    super(props)
    const { initValue } = props;
    this.state = {
      value: initValue
    }
  }

  componentDidMount(){
    const { onReg } = this.props;
    if (_isFn(onReg)){
      onReg(this)
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      const { initValue } = this.props;
      this.setState({
        value: initValue != null ? initValue : C_BLANK
      })
    }
  }

  _handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }
 _handleKeyDown = (event) => {
    switch(event.keyCode){
      case 27: case 46:
         event.preventDefault()
         this.setState({ value: C_BLANK })
         break;
      case 13:
         if (_isFn(this.props.onEnter)) {
           this.props.onEnter(event.target.value)
         }
         break;
      default: return;
    }
 }

  render(){
    const {
      style,
      spellCheck,
      placeholder
    } = this.props
    , { value } = this.state
    , _autoCorrect = spellCheck
         ? C_ON
         : C_OFF
    , _spellCheck = spellCheck
         ? "true"
         : "false";
    return (
      <input
        style={{...S_INPUT_TEXT, ...style}}
        type={C_TEXT}
        name={C_TEXT}
        autoCapitalize={C_OFF}
        autoComplete={C_OFF}
        autoCorrect={_autoCorrect}
        spellCheck={_spellCheck}
        translate="false"
        value={value}
        placeholder={placeholder}
        onChange={this._handleInputChange}
        onKeyDown={this._handleKeyDown}
      />
    );
  }

  getValue() {
    return this.state.value;
  }
  setValue(value) {
    this.setState({ value })
  }
}

export default InputText
