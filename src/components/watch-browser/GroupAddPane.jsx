import React, { Component } from 'react';
//import PropTypes from "prop-types";

import A from './Atoms'

class GroupAddPane extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    actionFailed: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnIsEmptyName: PropTypes.func,

    inputStyle: PropTypes.object,
    btStyle: PropTypes.object,

    onCreate: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  state = {
    validationMessages: []
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, data) => {
    const { actionCompleted, actionFailed, forActionType } = this.props;
    if (actionType === actionCompleted && data.forActionType === forActionType){
       this._handleClear()
    } else if (actionType === actionFailed && data.forActionType === forActionType){
       this.setState({ validationMessages: data.messages })
    }
  }

  _handleClear = () => {
    this.inputText.setValue('')
    if (this.state.validationMessages.length>0){
       this.setState({ validationMessages: [] })
    }
  }

  _handleCreate = () => {
     const { onCreate, msgOnIsEmptyName } = this.props
          , caption = this.inputText.getValue();
     if (caption){
       onCreate({ caption })
     } else {
       this.inputText.setValue('')
       this.setState({ validationMessages:[msgOnIsEmptyName('Group')] })
     }
  }


  _crPrimaryBt = (btStyle) => {
    return (
      <A.Button.Primary
         style={btStyle}
         caption="Create"
         title="Create New Group"
         onClick={this._handleCreate}
     />
    );
  }


  _refInputText = c => this.inputText = c

  render(){
    const { inputStyle, btStyle, onClose } = this.props
        , { validationMessages } = this.state;
    return (
      <div>
        <A.RowInputText
           ref={this._refInputText}
           caption="Group:"
           inputStyle={inputStyle}
        />
        <A.ValidationMessages
           validationMessages={validationMessages}
         />
         <A.RowButtons
            btStyle={btStyle}
            Primary={this._crPrimaryBt(btStyle)}
            onClear={this._handleClear}
            onClose={onClose}
         />
      </div>
    )
  }
}

export default GroupAddPane
