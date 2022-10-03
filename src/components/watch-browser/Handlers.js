import {
  ComponentActions
} from '../../flux/actions/ComponentActions';
import {
  WatchActions
} from '../../flux/actions/WatchActions';
import {
  MD_EDIT_WATCH_GROUP,
  MD_EDIT_WATCH_LIST
} from '../../constants/Type';

export const showDialogEditGroups = () =>
  ComponentActions.showModalDialog(MD_EDIT_WATCH_GROUP);

export const showDialogEditLists = () =>
  ComponentActions.showModalDialog(MD_EDIT_WATCH_LIST);

export const removeWatchItem = (option, evt) => {
  evt.stopPropagation()
  WatchActions.removeItem(option)
}

export const saveWatchList = () => {
  WatchActions.saveWatch()
}
