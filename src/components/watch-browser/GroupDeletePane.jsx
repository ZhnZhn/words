//import PropTypes from "prop-types";
import { Component } from '../uiApi';

import A from './Atoms'

class GroupDeletePane extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnNotSelect: PropTypes.func,

    inputStyle: PropTypes.object,
    btStyle: PropTypes.object,

    onDelete: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  constructor(props){
    super(props)
    this.caption = null
    this.state = {
      groupOptions: props.store.getWatchGroups(),
      validationMessages: []
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, data) => {
    const { actionCompleted, forActionType, store } = this.props;
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType){
        this._handleClear()
      }
      this.setState({ groupOptions : store.getWatchGroups() })
    }
  }

  _handleSelectGroup = (item) => {
     if (item && item.caption){
       this.caption = item.caption
     } else {
       this.caption = null
     }
  }

  _handleClear = () => {
    if (this.state.validationMessages.length>0){
      this.setState({ validationMessages:[] })
    }
  }

  _handleDeleteGroup = () => {
     const { onDelete, msgOnNotSelect } = this.props;
     if (this.caption){
       onDelete({ caption:this.caption })
     } else {
       this.setState({ validationMessages:[msgOnNotSelect('Group')] })
     }
  }

  _crPrimaryBt = (btStyle) => {
    return (
      <A.Button.Primary
         style={btStyle}
         caption="Delete"
         title="Delete Group"
         onClick={this._handleDeleteGroup}
      />
    );
  }

  render(){
      const {
              inputStyle, btStyle,
              onClose
            } = this.props
          , {
              groupOptions, validationMessages
            } = this.state;

      return (
         <div>
           <A.RowInputSelect
             inputStyle={inputStyle}
             caption="Group:"
             options={groupOptions}
             onSelect={this._handleSelectGroup}
           />
           <A.ValidationMessages
             validationMessages={validationMessages}
           />
           <A.RowButtons
             btStyle={btStyle}
             Primary={this._crPrimaryBt(btStyle)}
             withoutClear={true}
             onClose={onClose}
           />
        </div>
    );
  }
}

export default GroupDeletePane
