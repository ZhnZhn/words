import React, { Component } from 'react'

import ArrowCell from './ArrowCell'
import OptionsPane from './OptionsPane'

const CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-select__div',
  DIV_VALUE: 'm-select__div__value',
  DIV_BT: 'm-select__div__bt',
  INPUT_LINE: 'm-select__line',
  ITEM: 'm-select__item'
};

class InputSelect extends Component {
  static defaultProps = {
    initItem: {
      caption: '',
      value: ''
    },
    styleConfig: {},
    onSelect: () => {}
  }

  constructor(props){
    super(props)
    this.state = {
      isShow: false,
      initialOptions: props.options,
      item: props.initItem
    }
  }

  /*
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options) {
      this.setState({
        item: {
          caption: '',
          value: ''
        }
      })
    }
  }
  */


  static getDerivedStateFromProps(props, state) {
    if (props.options !== state.initialOptions) {
      return {
        isShow: false,
        initialOptions: props.options,
        item: {
          caption: '',
          value: ''
        }
      };
    }
  }


  _handleOpen = () => {
    this.setState({ isShow: true })
  }
  _handleClose = () => {
    this.setState({ isShow: false })
  }
  _handleSelect = (item, event) => {
    event.stopPropagation()
    this.props.onSelect(item)
    this.setState({
      isShow: false,
      item: item
    })
  }


  render(){
    const { caption, options, styleConfig:TS } = this.props
        , { isShow, item } = this.state;
    return (
      <div
        className={CL.SELECT}
        style={TS.ROOT}
        onClick={this._handleOpen}
      >
        <OptionsPane
           rootStyle={TS.MODAL_PANE}
           isShow={isShow}
           item={item}
           options={options}
           clItem={TS.CL_ITEM || CL.ITEM}
           itemStyle={TS.ITEM}
           onSelect={this._handleSelect}
           onClose={this._handleClose}
         />
        <label className={CL.LABEL}>
          {caption}
        </label>
        <div className={CL.DIV}>
          <div className={CL.DIV_VALUE}>
             {item.caption}
          </div>
          <button className={CL.DIV_BT} tabIndex="0">
            <div>
              <ArrowCell />
            </div>
          </button>
          <div className={CL.INPUT_LINE} />
        </div>
      </div>
    );
  }
}

export default InputSelect
