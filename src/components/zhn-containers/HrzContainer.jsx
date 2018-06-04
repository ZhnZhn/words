import React, { Component } from 'react'
//import PropTypes from 'prop-types'

const CL_DIV = "hrz-container";

class HrzContainer extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    addAction: PropTypes.string
  }
  */
  static defaultProps = {
    className: ''
  }

  constructor(props){
    super()
    this.state = {
      containers: []
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, option) => {
     if (actionType === this.props.addAction && option.Comp){
       this.setState(prevState => {
         prevState.containers.unshift(option.Comp)
         return prevState;
       })
     }
  }

  _renderContainers(containers){
    return containers.map(container => {
      return container;
    });
  }

  render(){
    const { className } = this.props
        , { containers } = this.state;
    return (
       <div className={`${CL_DIV} ${className}`}>
          {this._renderContainers(containers)}
       </div>
    )
  }
}

export default HrzContainer
