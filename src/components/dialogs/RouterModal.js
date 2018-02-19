
import { ModalDialog as M } from '../../constants/Type'

import SettingsDialog from './SettingsDialog'
import AlertDialog from './AlertDialog'
import AlertDialog2 from './AlertDialog2'
import MsgDialog from './MsgDialog'

import EditGroupDialog from '../watch-browser/EditGroupDialog'
import EditListDialog from '../watch-browser/EditListDialog'
import AddToWatchDialog from '../watch-browser/AddToWatchDialog'

const _r = {
  [M.SETTINGS]: SettingsDialog,
  [M.ALERT_DIALOG]: AlertDialog,
  [M.EXCEPTION]: AlertDialog2,
  [M.MSG]: MsgDialog,

  [M.EDIT_WATCH_GROUP]: EditGroupDialog,
  [M.EDIT_WATCH_LIST]: EditListDialog,
  [M.ADD_TO_WATCH]: AddToWatchDialog
};

const RouterModal = {
  getDialog(type){
    return Promise.resolve(_r[type]);
  }
};

export default RouterModal
