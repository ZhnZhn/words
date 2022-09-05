//import PropTypes from "prop-types";
import {
  Component,
  createElement
} from 'react';

import Router from '../dialogs/RouterModal';
import ModalContainer from './ModalContainer';

const DialogsStack = ({
  store,
  shows,
  data,
  dialogs,
  onClose
}) => dialogs.map(({
  type,
  comp
}) => createElement(comp, {
   key: type,
   isShow: shows[type],
   data: data[type],
   onClose: onClose.bind(null, type),
   store
  })
)



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
    isShow: false,
    inits: {},
    shows: {},
    data: {},
    dialogs: [],
    currentDialog: null
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
       , {
         inits,
         shows,
         data,
         dialogs
       } = this.state;

       data[type] = option
       shows[type] = true
       if (inits[type]){
         this.setState({
           isShow: true,
           currentDialog: type,
           shows,
           data
         })
       } else {
         Router.getDialog(type)
           .then(comp => {
             if (comp) {
               dialogs.push({ type, comp })
               inits[type] = true
               this.setState({
                 isShow: true,
                 currentDialog: type,
                 shows,
                 data,
                 dialogs
               });
             }
           })
       }
     }
  }

  _hClose = (type) => {
    this.state.shows[type] = false;
    this.setState({
      isShow: false,
      currentDialog: null,
      shows: this.state.shows
    })
  }

  render(){
    const {
      store
    } = this.props
    , {
      isShow,
      currentDialog,
      shows,
      data,
      dialogs
    } = this.state;

    return (
      <ModalContainer
          isShow={isShow}
          onClose={this._hClose.bind(null, currentDialog)}
      >
         <DialogsStack
           store={store}
           shows={shows}
           data={data}
           dialogs={dialogs}
           onClose={this._hClose}
         />
     </ModalContainer>
    );
  }
}

export default WrapperContainer
