import React, { Component } from 'react';
//import PropTypes from "prop-types";

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import Actions, { WatchActionTypes as WAT } from '../../flux/actions/WatchActions';

import Msg from '../../constants/MsgWatch';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import A from '../zhn-atoms/Atoms';
import ListCreatePane from './ListCreatePane';
import ListEditPane from './ListEditPane';
import ListDeletePane from './ListDeletePane';

import S from './Dialog.Style'

const { createList, renameList, deleteList } = Actions
const {
  EDIT_WATCH_COMPLETED, EDIT_WATCH_FAILED,
  CREATE_LIST, RENAME_LIST, DELETE_LIST
} = WAT;
const { notSelected, emptyName } = Msg;

class EditListDialog extends Component {
  /*
  static propTypes = {
    isShow : PropTypes.bool,
    store : PropTypes.object,
    onClose : PropTypes.func
  }
  */

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props
        && nextProps.isShow === this.props.isShow
    ) {
      return false;
    }
    return true;
  }

  render(){
    const {
            theme,
            isShow, store, onClose
          } = this.props
        , TS = theme.createStyle(styleConfig);
    return (
      <ModalDialog
        //STYLE={TS.BT}
         style={{...TS.R_DIALOG, ...S.DIALOG }}
         captionStyle={TS.BROWSER_CAPTION}
         caption="Watch Lists Edit"
         isShow={isShow}
         isWithButton={false}
         onClose={onClose}
      >
        <A.TabPane width={S.TAB_PANE_WIDTH} isUpdateInit={true}>
           <A.Tab title="Create" style={TS.TAB}>
             <ListCreatePane
                store={store}
                inputStyle={TS.INPUT}
                btStyle={TS.BT.FLAT_ROOT}
                actionCompleted={EDIT_WATCH_COMPLETED}
                actionFailed={EDIT_WATCH_FAILED}
                forActionType={CREATE_LIST}
                msgOnNotSelect={notSelected}
                msgOnIsEmptyName={emptyName}
                onCreate={createList}
                onClose={onClose} />
           </A.Tab>
           <A.Tab title="Rename" style={TS.TAB}>
             <ListEditPane
                store={store}
                inputStyle={TS.INPUT}
                btStyle={TS.BT.FLAT_ROOT}
                actionCompleted={EDIT_WATCH_COMPLETED}
                actionFailed={EDIT_WATCH_FAILED}
                forActionType={RENAME_LIST}
                msgOnNotSelect={notSelected}
                msgOnIsEmptyName={emptyName}
                onRename={renameList}
                onClose={onClose}
             />
           </A.Tab>
           <A.Tab title="Delete" style={TS.TAB}>
             <ListDeletePane
                store={store}
                inputStyle={TS.INPUT}
                btStyle={TS.BT.FLAT_ROOT}
                actionCompleted={EDIT_WATCH_COMPLETED}
                actionFailed={EDIT_WATCH_FAILED}
                forActionType={DELETE_LIST}
                msgOnNotSelect={notSelected}
                onDelete={deleteList}
                onClose={onClose}
             />
           </A.Tab>
        </A.TabPane>
      </ModalDialog>
    )
  }
}

export default withTheme(EditListDialog)
