import React, { Component } from 'react';
//import PropTypes from "prop-types";

import A from './Atoms'

class GroupEditPane extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    actionFailed: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnIsEmptyName: PropTypes.func,
    msgOnNotSelect: PropTypes.func,

    inputStyle: PropTypes.object,
    btStyle: PropTypes.object,

    onRename: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  constructor(props){
    super()
    this.captionFrom = null
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
    const { actionCompleted, actionFailed, forActionType, store } = this.props
    if (actionType === actionCompleted){
      if (data.forActionType === forActionType){
        this._handleClear()
      }
      this.setState({ groupOptions : store.getWatchGroups() })
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      this.setState({ validationMessages: data.messages })
    }
  }

  _handleSelectGroup = (item) => {
     if (item && item.caption){
       this.captionFrom = item.caption
     } else {
       this.captionFrom = null
     }
  }

  _handleClear = () => {
    this.inputText.setValue('')
    if (this.state.validationMessages.length>0){
      this.setState({ validationMessages:[] })
    }
  }
  _handleRename = () => {
     const { onRename, msgOnNotSelect, msgOnIsEmptyName } = this.props
         , captionTo = this.inputText.getValue();
     if (captionTo && this.captionFrom) {
       onRename({ captionFrom: this.captionFrom, captionTo })
     } else {
       const msg = [];
       if (!this.captionFrom){
         msg.push(msgOnNotSelect('Group From'))
       }
       if (!captionTo){
         msg.push(msgOnIsEmptyName('Group To'))
       }
       this.setState({ validationMessages:msg })
     }
  }

  _crPrimaryBt = (btStyle) => {
    return (
      <A.Button.Primary
         style={btStyle}
         caption="Edit"
         title="Edit Group Name"
         onClick={this._handleRename}
      />
    );
  }

  _refInputText = c => this.inputText = c

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
             caption="Group From:"
             inputStyle={inputStyle}
             options={groupOptions}
             onSelect={this._handleSelectGroup}
          />
         <A.RowInputText
           ref={this._refInputText}
           caption="Group To:"
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
    );
  }
}

export default GroupEditPane
