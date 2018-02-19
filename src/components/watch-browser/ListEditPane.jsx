import React, { Component } from 'react';
//import PropTypes from "prop-types";

import A from './Atoms'

class ListEditPane extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    forActionType: PropTypes.string,

    inputStyle: PropTypes.object,
    btStyle: PropTypes.object,

    onRename: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  constructor(props){
    super()
    this.state = {
      groupOptions: props.store.getWatchGroups(),
      listOptions: [],
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
    const { actionCompleted, actionFailed, forActionType, store } = this.props;
    if (actionType === actionCompleted){
        if (data.forActionType === forActionType){
          this._handleClear()
        }
        this.setState({ groupOptions : store.getWatchGroups() })
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      this.setState({ validationMessages:data.messages })
    }
  }

  _handleClear = () => {
     this.inputText.setValue('');
     if (this.state.validationMessages.length>0){
       this.setState({ validationMessages:[] })
     }
  }

  _handleRename = () => {
    const { onRename, msgOnIsEmptyName, msgOnNotSelect } = this.props
        , { captionGroup, captionList } = this.selectGroupList.getValue()
        , captionListTo = this.inputText.getValue();
    if (captionGroup && captionList && captionListTo){
      onRename({
        captionGroup: captionGroup,
        captionListFrom: captionList,
        captionListTo: captionListTo
      })
    } else {
      const msg = [];
      if (!captionGroup) { msg.push(msgOnNotSelect('Group')) }
      if (!captionList)  { msg.push(msgOnNotSelect('List From')) }
      if (!captionListTo){ msg.push(msgOnIsEmptyName('List To')) }
      this.setState({ validationMessages:msg })
    }
  }

  _crPrimaryBt = (btStyle) => {
    return (
      <A.Button.Primary
         style={btStyle}
         caption="Edit"
         title="Edit List Name"
         onClick={this._handleRename}
      />
    );
  }

  _refGroup = c => this.selectGroupList = c
  _refText = c => this.inputText = c

  render(){
    const {
            store,
            inputStyle, btStyle,
            onClose
          } = this.props
        , { groupOptions, validationMessages } = this.state;
    return (
      <div>
         <A.FragmentSelectGroupList
           ref={this._refGroup}
           inputStyle={inputStyle}
           store={store}
           groupCaption="In Group:"
           groupOptions={groupOptions}
           listCaption="List From:"
         />
         <A.RowInputText
            ref={this._refText}
            inputStyle={inputStyle}
            caption="List To:"
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

export default ListEditPane
