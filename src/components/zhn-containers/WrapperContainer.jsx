import { Component, createElement } from 'react';
//import PropTypes from "prop-types";

import Router from '../dialogs/RouterModal';
import ModalContainer from './ModalContainer';

class WrapperContainer extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    SHOW_ACTION: PropTypes.string
  }
  */

  state = {
    isShow : false,
    inits : {},
    shows : {},
    data : {},
    dialogs : [],
    currentDialog : null
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, option) => {
     const { SHOW_ACTION } = this.props;
     if (actionType === SHOW_ACTION){
       const type = option.modalDialogType
           , { inits, shows, data, dialogs } = this.state;

       data[type] = option
       shows[type] = true
       if (inits[type]){
         this.setState({
           isShow: true, currentDialog: type,
           shows, data
         })
       } else {
         Router.getDialog(type)
           .then(comp => {
             if (comp) {
               dialogs.push({ type, comp })
               inits[type] = true
               this.setState({
                 isShow: true, currentDialog: type,
                 shows, data, dialogs
               });
             }
           })
       }
     }
  }

  _handleClose = (type) => {
    this.state.shows[type] = false;
    this.setState({
      isShow : false,
      currentDialog: null,
      shows : this.state.shows
    })
  }

  _renderDialogs = () => {
    const { store } = this.props
        , { shows, data, dialogs } = this.state;

    return dialogs.map((dialog, index) => {
      const { type, comp } = dialog;
      return createElement(comp, {
         key: type,
         isShow: shows[type],
         data: data[type],
         store : store,
         onClose: this._handleClose.bind(null, type)
      })
    })
  }

  render(){
    const { isShow, currentDialog } = this.state;

    return (
      <ModalContainer
          isShow={isShow}
          onClose={this._handleClose.bind(null, currentDialog)}
      >
         {this._renderDialogs()}
     </ModalContainer>
    )
  }
}

export default WrapperContainer
