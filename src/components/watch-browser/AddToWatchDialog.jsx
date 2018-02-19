import React, { Component } from 'react';
//import PropTypes from "prop-types";

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import WatchActions, { WatchActionTypes as WAT } from '../../flux/actions/WatchActions';
import Msg from '../../constants/MsgWatch';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import RowInputSelect from '../dialogs/RowInputSelect';
import Row from '../dialogs/Row';
import withValidationLoad from '../dialogs/decorators/withValidationLoad';
import A from './Atoms';

const actionCompleted = WAT.EDIT_WATCH_COMPLETED
    , actionFailed =  WAT.EDIT_WATCH_FAILED
    , forActionType = WAT.ADD_ITEM;

const { notSelected } = Msg;

@withValidationLoad
class AddToWatchDialog extends Component {
  /*
  static propTypes = {
    isShow  : PropTypes.bool,
    data    : PropTypes.object,
    store   : PropTypes.shape({
      listen: PropTypes.func,
      getWatchGroups: PropTypes.func,
      getWatchListsByGroup: PropTypes.func
    }),
    onClose : PropTypes.func
  }
  */

  constructor(props){
    super()
    this.groupCaption = null
    this.listCaption = null
    this.state = {
      groupOptions : props.store.getWatchGroups(),
      listOptions : [],
      validationMessages : []
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore)
  }
  componetWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, data) => {
    if (actionType === actionCompleted && data.forActionType === forActionType){
       if (this.state.validationMessages.length>0){
         this.setState({ validationMessages:[] })
       }
       this.props.onClose()
    } else if (actionType === actionFailed && data.forActionType === forActionType){
       this.setState({ validationMessages:data.messages });
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props && nextProps.isShow !== this.props.isShow) {
      const groups = nextProps.store.getWatchGroups();
      if (groups !== this.state.groupOptions){
        this.groupCaption = null
        this.listCaption = null
        this.setState({ groupOptions:groups, listOptions:[] })
      } else if (this.groupCaption){
        const lists = nextProps.store.getWatchListsByGroup(this.groupCaption);
        if (lists !== this.state.listOptions){
          this.listCaption = null
          this.setState({ listOptions:lists })
        }
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  _handleSelectGroup = (group) => {
    if (group && group.caption){
       this.groupCaption = group.caption;
       if (group.lists){
         this.setState({ listOptions : group.lists })
       }  else {
         this.setState({ listOptions : [] })
       }
    } else {
      this.groupCaption = null
    }
  }
  _handleSelectList = (list) => {
      if (list && list.caption){
        this.listCaption = list.caption
      } else {
        this.listCaption = null
      }
  }
  _handleAdd = () => {
    const validationMessages = this._getValidationMessages();
    if (validationMessages.isValid){
      const { data } = this.props
          , { caption, config } = data
          , { groupCaption, listCaption } = this;

      WatchActions.addWatchItem({ caption, groupCaption, listCaption, config })
    } else {
      this._updateValidationMessages(validationMessages)
    }
  }
  _getValidationMessages = () => {
    const msg = [];
    if (!this.groupCaption) {
      msg.push(notSelected('Group'))
    }
    if (!this.listCaption) {
      msg.push(notSelected('List'))
    }
    msg.isValid = (msg.length === 0)
      ? true
      : false
    return msg;
  }

  _handleClose = () => {
    if (this.state.validationMessages.length>0){
      this.setState({ validationMessages:[] })
    }
    this.props.onClose()
  }

  _crCommandButtons = (S) => {
    return [
      <A.Button.Raised
        caption="Add"
        title="Add Item To Watch List"
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        onClick={this._handleAdd}
       />
    ];
  }

  render(){
    const { theme, isShow, data } = this.props
        , { caption } = data
        , {
            groupOptions, listOptions,
            validationMessages
          } = this.state
        , TS = theme.createStyle(styleConfig)
        , _commandButtons = this._crCommandButtons(TS.BT);

    return (
      <ModalDialog
         STYLE={TS.BT}
         style={TS.R_DIALOG}
         captionStyle={TS.BROWSER_CAPTION}
         caption="Add To Watch List"
         isShow={isShow}
         commandButtons={_commandButtons}
         onClose={this._handleClose}
      >
        <RowInputSelect
          inputStyle={TS.INPUT}
          caption="Group:"
          options={groupOptions}
          onSelect={this._handleSelectGroup}
        />
        <RowInputSelect
          inputStyle={TS.INPUT}
          caption="List:"
          onSelect={this._handleSelectList}
          options={listOptions}
        />
        <Row.Text
          caption="Item:"
          text={caption}
        />
        <A.ValidationMessages
           validationMessages={validationMessages}
         />
      </ModalDialog>
    );
  }
}

export default withTheme(AddToWatchDialog)
