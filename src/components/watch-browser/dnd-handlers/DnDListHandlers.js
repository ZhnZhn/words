import {
  ddList,
  ddItem
} from '../../../flux/watch-list/useWatchListStore';

import getTransferData from './getTransferData';
import DRAG from './WatchDnDConfig';

import {
  dropWithDnDStyle
} from './DnDStyleHandlers';
import {
  fDragStart,
  fDragEnter,
  hDragOver,
  hDragLeave
} from './DnDHandlers';

const _crListId = ({
  groupCaption,
  caption
}) => `${groupCaption};${caption};`

export const hDragStartList = fDragStart(
  [DRAG.LIST, DRAG.GROUP],
  _crListId
)

export const hDropList = (
  //{groupCaption, caption},
  options,
  event
 ) => {
  dropWithDnDStyle(event)
  const {
   xType,
   dragId
  } = getTransferData(event)
  , dropId = _crListId(options);

  if (xType === DRAG.LIST) {
    if (dragId === dropId) {
      return;
    } else {
      event.preventDefault()
      ddList({
        dragId,
        dropId
      })
    }
  } else if (xType === DRAG.ITEM) {
    event.preventDefault()
    ddItem({
      dragId,
      dropId
    })
  }
}

export const hDragEnterList = fDragEnter(
  DRAG.LIST,
  DRAG.C_LIST_ENTER
)

export const hDragOverList = hDragOver
export const hDragLeaveList = hDragLeave
