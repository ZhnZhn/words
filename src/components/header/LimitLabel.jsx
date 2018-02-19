import React, { Component } from 'react'

const S = {
  LABEL : {
    position: 'relative',
    float: 'right',
    top: '9px',
    display: 'inline-block',
    color:'#2f7ed8',
    paddingRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
}

class LimitLabel extends Component {
  state = {
    value: ''
  }

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.listenLoading(this._onStore)
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  _onStore = (actionType, value) => {
    const { ACTIONS } = this.props;
    if (actionType === ACTIONS.LOADING_COMPLETE) {
      if ( !(value == null) ) {
        this.setState({ value: value })
      }
    }
  }

  render() {
    const { style } = this.props
        , { value } = this.state;
    return (
       <span style={{ ...S.LABEL, ...style }}>
         {value}
       </span>
    );
  }
}

export default LimitLabel
