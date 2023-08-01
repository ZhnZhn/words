export { saveWatchList } from '../../flux/watch-list/watchListStore';

import { deleteWatchItem } from '../../flux/watch-list/watchListStore';
import { showMd } from '../../flux/compStore';

import {
  MD_EDIT_WATCH_GROUP,
  MD_EDIT_WATCH_LIST
} from '../../constants/Type';

export const showDialogEditGroups = () => showMd(MD_EDIT_WATCH_GROUP);
export const showDialogEditLists = () => showMd(MD_EDIT_WATCH_LIST);

export const removeWatchItem = (
  option,
  evt
) => {
  evt.stopPropagation()
  deleteWatchItem(option)
}
