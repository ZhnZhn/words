//import PropTypes from "prop-types";
import { Component } from 'react';

import withTheme from '../hoc/withTheme'
import styleConfig from '../dialogs/Dialog.Style'

import Actions, { WatchActionTypes as WAT } from '../../flux/actions/WatchActions';

import Msg from '../../constants/MsgWatch';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-tabpane/TabPane';
import Tab from '../zhn-tabpane/Tab';
import GroupAddPane from './GroupAddPane';
import GroupEditPane from './GroupEditPane';
import GroupDeletePane from './GroupDeletePane';

import S from './Dialog.Style';

const {
  addGroup,
  renameGroup,
  deleteGroup
} = Actions;
const {
  EDIT_WATCH_COMPLETED,
  EDIT_WATCH_FAILED,
  ADD_GROUP,
  RENAME_GROUP,
  DELETE_GROUP
} = WAT;
const {
  notSelected,
  emptyName
} = Msg;

class EditGroupDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    store: PropTypes.object,
    onClose: PropTypes.func
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
       isShow,
       store,
       onClose
      } = this.props
    , TS = theme.createStyle(styleConfig);

    return (
      <ModalDialog
         style={{...TS.R_DIALOG, ...S.DIALOG}}
         captionStyle={TS.BROWSER_CAPTION}
         caption="Watch Groups Edit"
         isShow={isShow}
         isWithButton={false}
         onClose={onClose}
      >
        <TabPane width={S.TAB_PANE_WIDTH} tabStyle={S.TABS}>
           <Tab title="Create" style={TS.TAB}>
             <GroupAddPane
                store={store}
                inputStyle={TS.INPUT}
                btStyle={TS.BT.FLAT_ROOT}
                actionCompleted={EDIT_WATCH_COMPLETED}
                actionFailed={EDIT_WATCH_FAILED}
                forActionType={ADD_GROUP}
                msgOnIsEmptyName={emptyName}
                onCreate={addGroup}
                onClose={onClose}
              />
           </Tab>
           <Tab title="Rename" style={TS.TAB}>
             <GroupEditPane
                store={store}
                inputStyle={TS.INPUT}
                btStyle={TS.BT.FLAT_ROOT}
                actionCompleted={EDIT_WATCH_COMPLETED}
                actionFailed={EDIT_WATCH_FAILED}
                forActionType={RENAME_GROUP}
                msgOnNotSelect={notSelected}
                msgOnIsEmptyName={emptyName}
                onRename={renameGroup}
                onClose={onClose}
             />
           </Tab>
           <Tab title="Delete" style={TS.TAB}>
             <GroupDeletePane
                store={store}
                inputStyle={TS.INPUT}
                btStyle={TS.BT.FLAT_ROOT}
                store={store}
                actionCompleted={EDIT_WATCH_COMPLETED}
                forActionType={DELETE_GROUP}
                msgOnNotSelect={notSelected}
                onDelete={deleteGroup}
                onClose={onClose}
             />
           </Tab>
        </TabPane>
      </ModalDialog>
    )
  }
}

export default withTheme(EditGroupDialog)
