export { saveWatchList } from '../../flux/watch-list/useWatchListStore';

import { deleteWatchItem } from '../../flux/watch-list/useWatchListStore';
import { showMd } from '../../flux/useCompStore';

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
