import { showMd } from '../../flux/useCompStore';

import {
  WatchActions
} from '../../flux/actions/WatchActions';
import {
  MD_EDIT_WATCH_GROUP,
  MD_EDIT_WATCH_LIST
} from '../../constants/Type';

export const showDialogEditGroups = () => showMd(MD_EDIT_WATCH_GROUP);
export const showDialogEditLists = () => showMd(MD_EDIT_WATCH_LIST);

export const removeWatchItem = (option, evt) => {
  evt.stopPropagation()
  WatchActions.removeWatchItem(option)
}

export const saveWatchList = () => {
  WatchActions.saveWatch()
}
