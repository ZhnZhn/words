import React , { Component } from 'react'
import PropTypes from 'prop-types'

const withTheme = (Comp) => class extends Component {
  static contextTypes = {
    theme: PropTypes.object,
  }

  constructor(props, context){
    super(props, context)
  }

  render(){
    const { theme } = this.context;
    return (
      <Comp
         {...this.props}
         theme={theme}
       />
    );
  }
}

export default withTheme
