import {
  MD_SETTINGS,
  MD_ALERT_DIALOG,
  MD_EXCEPTION,
  MD_MSG,

  MD_EDIT_WATCH_GROUP,
  MD_EDIT_WATCH_LIST,
  MD_ADD_TO_WATCH
} from '../../constants/Type';

import SettingsDialog from './SettingsDialog';
import AlertDialog from './AlertDialog';
import AlertDialog2 from './AlertDialog2';
import MsgDialog from './MsgDialog';

import EditGroupDialog from '../watch-browser/EditGroupDialog';
import EditListDialog from '../watch-browser/EditListDialog';
import AddToWatchDialog from '../watch-browser/AddToWatchDialog';

const _r = {
  [MD_SETTINGS]: SettingsDialog,
  [MD_ALERT_DIALOG]: AlertDialog,
  [MD_EXCEPTION]: AlertDialog2,
  [MD_MSG]: MsgDialog,

  [MD_EDIT_WATCH_GROUP]: EditGroupDialog,
  [MD_EDIT_WATCH_LIST]: EditListDialog,
  [MD_ADD_TO_WATCH]: AddToWatchDialog
};

const RouterModal = {
  getDialog(type){
    return Promise.resolve(_r[type]);
  }
};

export default RouterModal
