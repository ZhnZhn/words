import memoIsShow from '../hoc/memoIsShow';
import useTheme from '../hoc/useTheme';
import styleConfig from '../dialogs/Dialog.Style';

import {
  WAT_CREATE_LIST,
  WAT_RENAME_LIST,
  WAT_DELETE_LIST
} from '../../flux/actions/WatchActions';

import {
  crList,
  renList,
  delList,
  getWatchListsByGroup
} from '../../flux/watch-list/watchListStore'

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

const EditListDialog = memoIsShow(({
  isShow,
  store,
  onClose
}) => {
  const TS = useTheme(styleConfig);
  return (
    <ModalDialog
       isShow={isShow}
       isWithButton={false}       
       style={S_DIALOG}
       captionStyle={TS.BROWSER_CAPTION}
       caption="Watch Lists Edit"
       onClose={onClose}
    >
      <TabPane id="eld" width={TAB_PANE_WIDTH} tabStyle={S_TABS}>
         <Tab title="Create">
           <ListCreatePane
              forActionType={WAT_CREATE_LIST}
              msgOnNotSelect={notSelected}
              msgOnIsEmptyName={emptyName}
              onCreate={crList}
              onClose={onClose}
            />
         </Tab>
         <Tab title="Rename">
           <ListEditPane
              getWatchListsByGroup={getWatchListsByGroup}
              forActionType={WAT_RENAME_LIST}
              msgOnNotSelect={notSelected}
              msgOnIsEmptyName={emptyName}
              onRename={renList}
              onClose={onClose}
           />
         </Tab>
         <Tab title="Delete">
           <ListDeletePane
              getWatchListsByGroup={getWatchListsByGroup}
              forActionType={WAT_DELETE_LIST}
              msgOnNotSelect={notSelected}
              onDelete={delList}
              onClose={onClose}
           />
         </Tab>
      </TabPane>
    </ModalDialog>
  );
});

export default EditListDialog
