import memoIsShow from '../hoc/memoIsShow';
import useTheme from '../hoc/useTheme';
import styleConfig from '../dialogs/Dialog.Style';

import {
  WAT_EDIT_WATCH_COMPLETED,
  WAT_EDIT_WATCH_FAILED,
  WAT_CREATE_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP,
  WatchActions
} from '../../flux/actions/WatchActions';

import {
  notSelected,
  emptyName
} from '../../constants/MsgWatch';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-tabpane/TabPane';
import Tab from '../zhn-tabpane/Tab';
import GroupAddPane from './GroupAddPane';
import GroupEditPane from './GroupEditPane';
import GroupDeletePane from './GroupDeletePane';

import {
  S_DIALOG,
  TAB_PANE_WIDTH,
  S_TABS
} from './Dialog.Style';

const {
  createGroup,
  renameGroup,
  deleteGroup
} = WatchActions;


const EditGroupDialog = memoIsShow(({
  isShow,
  store,
  onClose
}) => {
  const TS = useTheme(styleConfig);
  return (
    <ModalDialog
       style={{...TS.R_DIALOG, ...S_DIALOG}}
       captionStyle={TS.BROWSER_CAPTION}
       caption="Watch Groups Edit"
       isShow={isShow}
       isWithButton={false}
       onClose={onClose}
    >
      <TabPane width={TAB_PANE_WIDTH} tabStyle={S_TABS}>
         <Tab title="Create" style={TS.TAB}>
           <GroupAddPane
              store={store}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
              actionCompleted={WAT_EDIT_WATCH_COMPLETED}
              actionFailed={WAT_EDIT_WATCH_FAILED}
              forActionType={WAT_CREATE_GROUP}
              msgOnIsEmptyName={emptyName}
              onCreate={createGroup}
              onClose={onClose}
            />
         </Tab>
         <Tab title="Rename" style={TS.TAB}>
           <GroupEditPane
              store={store}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
              actionCompleted={WAT_EDIT_WATCH_COMPLETED}
              actionFailed={WAT_EDIT_WATCH_FAILED}
              forActionType={WAT_RENAME_GROUP}
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
              actionCompleted={WAT_EDIT_WATCH_COMPLETED}
              forActionType={WAT_DELETE_GROUP}
              msgOnNotSelect={notSelected}
              onDelete={deleteGroup}
              onClose={onClose}
           />
         </Tab>
      </TabPane>
    </ModalDialog>
  );
})

export default EditGroupDialog
