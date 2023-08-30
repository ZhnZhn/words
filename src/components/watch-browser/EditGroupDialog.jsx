import memoIsShow from '../hoc/memoIsShow';
import useTheme from '../hoc/useTheme';
import styleConfig from '../dialogs/Dialog.Style';

import {
  WAT_CREATE_GROUP,
  WAT_RENAME_GROUP,
  WAT_DELETE_GROUP
} from '../../flux/actions/WatchActions';

import {
  crGroup,
  renGroup,
  delGroup
} from '../../flux/watch-list/watchListStore';

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


const EditGroupDialog = memoIsShow(({
  isShow,
  onClose
}) => {
  const TS = useTheme(styleConfig);
  return (
    <ModalDialog
       isShow={isShow}
       isWithButton={false}
       style={{...TS.R_DIALOG, ...S_DIALOG}}
       captionStyle={TS.BROWSER_CAPTION}
       caption="Watch Groups Edit"
       onClose={onClose}
    >
      <TabPane id="egd" width={TAB_PANE_WIDTH} tabStyle={S_TABS}>
         <Tab title="Create">
           <GroupAddPane
              forActionType={WAT_CREATE_GROUP}
              msgOnIsEmptyName={emptyName}
              onCreate={crGroup}
              onClose={onClose}
            />
         </Tab>
         <Tab title="Rename">
           <GroupEditPane
              forActionType={WAT_RENAME_GROUP}
              msgOnNotSelect={notSelected}
              msgOnIsEmptyName={emptyName}
              onRename={renGroup}
              onClose={onClose}
           />
         </Tab>
         <Tab title="Delete">
           <GroupDeletePane
              forActionType={WAT_DELETE_GROUP}
              msgOnNotSelect={notSelected}
              onDelete={delGroup}
              onClose={onClose}
           />
         </Tab>
      </TabPane>
    </ModalDialog>
  );
})

export default EditGroupDialog
