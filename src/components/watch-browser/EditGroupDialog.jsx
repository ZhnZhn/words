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
  delGroup,
  getWatchGroups,
  useMsEdit,
  useWatchList
} from '../../flux/watch-list/useWatchListStore';

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
      <TabPane width={TAB_PANE_WIDTH} tabStyle={S_TABS}>
         <Tab title="Create" style={TS.TAB}>
           <GroupAddPane
              useMsEdit={useMsEdit}
              forActionType={WAT_CREATE_GROUP}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
              msgOnIsEmptyName={emptyName}
              onCreate={crGroup}
              onClose={onClose}
            />
         </Tab>
         <Tab title="Rename" style={TS.TAB}>
           <GroupEditPane
              getWatchGroups={getWatchGroups}
              useMsEdit={useMsEdit}
              useWatchList={useWatchList}
              forActionType={WAT_RENAME_GROUP}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
              msgOnNotSelect={notSelected}
              msgOnIsEmptyName={emptyName}
              onRename={renGroup}
              onClose={onClose}
           />
         </Tab>
         <Tab title="Delete" style={TS.TAB}>
           <GroupDeletePane
              getWatchGroups={getWatchGroups}
              useMsEdit={useMsEdit}
              useWatchList={useWatchList}
              forActionType={WAT_DELETE_GROUP}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
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
