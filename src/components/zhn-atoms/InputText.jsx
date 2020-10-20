import { Component } from 'react';
//import PropTypes from "prop-types";

const S = {
  INPUT_TEXT : {
    display : 'inline',
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: 26,
    paddingLeft: 5,
    color: 'green',
    width: 40,
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor : '#e1e1cb',
    marginLeft : 5,
    marginRight : 5,
  }
};

const C = {
  BLANK: '',
  TEXT: 'text',
  //NEW_TEXT: 'new-text',
  ON: 'on',
  OFF: 'off'
}

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
    initValue: C.BLANK
  }


  constructor(props){
    super(props)
    const { initValue, onEnter } = props;
    this.isOnEnter = _isFn(onEnter)
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

  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({
        value: nextProps.initValue != null
           ? nextProps.initValue
           : C.BLANK
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
         this.setState({ value: C.BLANK })
         break;
      case 13:
         if (this.isOnEnter) {
           this.props.onEnter(event.target.value)
         }
         break;
      default: return;
    }
 }

  render(){
    const { style, spellCheck, placeholder } = this.props
        , { value } = this.state
        , _autoCorrect = spellCheck
             ? C.ON
             : C.OFF
        , _spellCheck = spellCheck
             ? "true"
             : "false";
    return (
      <input
        style={{ ...S.INPUT_TEXT, ...style }}
        type={C.TEXT}
        name={C.TEXT}
        autoCapitalize={C.OFF}
        autoComplete={C.OFF}
        autoCorrect={_autoCorrect}
        spellCheck={_spellCheck}
        translate="false"
        value={value}
        placeholder={placeholder}
        onChange={this._handleInputChange}
        onKeyDown={this._handleKeyDown}
      />
    )
  }

  getValue() {
    return this.state.value;
  }
  setValue(value) {
    this.setState({ value })
  }
}

export default InputText
