//import PropTypes from "prop-types";
import { Component } from '../uiApi';

import A from './Atoms';

class ListCreatePane extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func
    }),
    actionCompleted: PropTypes.string,
    actionFailed: PropTypes.string,
    forActionType: PropTypes.string,
    msgOnNotSelect: PropTypes.func,
    msgOnIsEmptyName: PropTypes.func,

    inputStyle: PropTypes.object,
    btStyle: PropTypes.object,

    onCreate: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  constructor(props){
    super(props)
    this.captionGroup = null
    this.state = {
      groupOptions: props.store.getWatchGroups(),
      isUpdateGroup: false,
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
        let isUpdateGroup = true;
        if (data.forActionType === forActionType){
          this._handleClear()
          isUpdateGroup = false
        }
        this.setState({
           groupOptions: store.getWatchGroups(),
           isUpdateGroup
        });
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      this.setState({
        validationMessages: data.messages,
        isUpdateGroup:false
      })
    }
  }

  _handleSelectGroup = (item) => {
    if (item && item.caption){
      this.captionGroup = item.caption
    } else {
      this.captionGroup = null
    }
  }

  _handleClear = () => {
     this.inputText.setValue('')
     if (this.state.validationMessages.length>0){
       this.setState({ validationMessages: [], isUpdateGroup:false })
     }
  }

  _handleCreate = () => {
     const { onCreate, msgOnNotSelect, msgOnIsEmptyName } = this.props
         , captionList = this.inputText.getValue();
     if (this.captionGroup && captionList){
       onCreate({
          captionGroup : this.captionGroup,
          captionList : captionList
       });
     } else {
       const msg = [];
       if (!this.captionGroup) { msg.push(msgOnNotSelect('In Group')); }
       if (!captionList)       { msg.push(msgOnIsEmptyName('List')); }
       this.setState({ validationMessages:msg, isUpdateGroup:false });
     }
  }

  _crPrimaryBt = (btStyle) => {
    return (
      <A.Button.Primary
         style={btStyle}
         caption="Create"
         title="Create New List"
         onClick={this._handleCreate}
      />
    );
  }

  _refInputText = c => this.inputText = c

  render(){
    const {
            inputStyle, btStyle,
            onClose
          } = this.props
        , { groupOptions, validationMessages } = this.state;
    return (
      <div>
        <A.RowInputSelect
           inputStyle={inputStyle}
           caption="In Group:"
           options={groupOptions}
           onSelect={this._handleSelectGroup}
        />
        <A.RowInputText
           ref={this._refInputText}
           inputStyle={inputStyle}
           caption="List:"
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

export default ListCreatePane
