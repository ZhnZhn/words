import memoIsShow from '../hoc/memoIsShow';
import useTheme from '../hoc/useTheme';
import styleConfig from '../dialogs/Dialog.Style';

import {
  WAT_EDIT_WATCH_COMPLETED,
  WAT_EDIT_WATCH_FAILED,
  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST,
  WatchActions
} from '../../flux/actions/WatchActions';

import {
  notSelected,
  emptyName
} from '../../constants/MsgWatch';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import TabPane from '../zhn-tabpane/TabPane';
import Tab from '../zhn-tabpane/Tab';
import ListCreatePane from './ListCreatePane';
import ListEditPane from './ListEditPane';
import ListDeletePane from './ListDeletePane';

import {
  S_DIALOG,
  TAB_PANE_WIDTH,
  S_TABS
} from './Dialog.Style';

const {
  createList,
  renameList,
  deleteList
} = WatchActions;

const EditListDialog = memoIsShow(({
  isShow,
  store,
  onClose
}) => {
  const TS = useTheme(styleConfig);
  return (
    <ModalDialog
       style={{...TS.R_DIALOG, ...S_DIALOG}}
       captionStyle={TS.BROWSER_CAPTION}
       caption="Watch Lists Edit"
       isShow={isShow}
       isWithButton={false}
       onClose={onClose}
    >
      <TabPane width={TAB_PANE_WIDTH} tabStyle={S_TABS}>
         <Tab title="Create" style={TS.TAB}>
           <ListCreatePane
              store={store}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
              actionCompleted={WAT_EDIT_WATCH_COMPLETED}
              actionFailed={WAT_EDIT_WATCH_FAILED}
              forActionType={WAT_CREATE_LIST}
              msgOnNotSelect={notSelected}
              msgOnIsEmptyName={emptyName}
              onCreate={createList}
              onClose={onClose} />
         </Tab>
         <Tab title="Rename" style={TS.TAB}>
           <ListEditPane
              store={store}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
              actionCompleted={WAT_EDIT_WATCH_COMPLETED}
              actionFailed={WAT_EDIT_WATCH_FAILED}
              forActionType={WAT_RENAME_LIST}
              msgOnNotSelect={notSelected}
              msgOnIsEmptyName={emptyName}
              onRename={renameList}
              onClose={onClose}
           />
         </Tab>
         <Tab title="Delete" style={TS.TAB}>
           <ListDeletePane
              store={store}
              inputStyle={TS.INPUT}
              btStyle={TS.BT.FLAT_ROOT}
              actionCompleted={WAT_EDIT_WATCH_COMPLETED}
              actionFailed={WAT_EDIT_WATCH_FAILED}
              forActionType={WAT_DELETE_LIST}
              msgOnNotSelect={notSelected}
              onDelete={deleteList}
              onClose={onClose}
           />
         </Tab>
      </TabPane>
    </ModalDialog>
  );
});

export default EditListDialog
