import { Component } from 'react'
//import PropTypes from 'prop-types'

const CL_DIV = "hrz-container";

const _isInCont = (arrComps, comp) => {
  const { key } = comp, _max = arrComps.length;
  let i = 0;
  for(i;i<_max;i++) {
    if (arrComps[i].key === key) {
      return true;
    }
  }
  return false;
};

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

  state = {
    containers: []
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, option) => {
     if (actionType === this.props.addAction && option && option.Comp){
       this.setState(prevState => {
         const comp = option.Comp;
         if (!_isInCont(prevState.containers, comp)) {
           prevState.containers.unshift(comp)
         }
         return prevState;
       })
     }
  }

  render(){
    const { className } = this.props
        , { containers } = this.state;
    return (
       <div className={`${CL_DIV} ${className}`}>
         {containers}
       </div>
    );
  }
}

export default HrzContainer
