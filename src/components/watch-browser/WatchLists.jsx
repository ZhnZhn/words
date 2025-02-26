import {
  hDragStartList,
  hDragEnterList,
  hDragOverList,
  hDragLeaveList,
  hDropList
} from './dnd-handlers/DnDListHandlers';

import OpenClose2 from '../zhn-atoms/OpenClose2';
import WatchItems from './WatchItems';

const _isArr = Array.isArray
, C_FILL_OPEN = '#80c040'
, COLOR_CAPTION = '#9e9e9e'
, S_CAPTION = {
  color: COLOR_CAPTION
}
, S_LIST_DIV = {
  marginLeft: 8,
  paddingLeft: 12,
  borderLeft: `3px solid ${COLOR_CAPTION}`,
  lineHeight: 2.5
}
, S_ITEM_NOT_SELECTED = {
  marginRight: 10
};

const WatchLists = ({
  isModeEdit,
  groupCaption,
  lists,
  onClickItem
}) => _isArr(lists) ? lists
  .map(({ caption, items }) => (
    <OpenClose2
       key={caption}
       fillOpen={C_FILL_OPEN}
       style={S_LIST_DIV}
       styleCaption={S_CAPTION}
       styleNotSelected={S_ITEM_NOT_SELECTED}
       caption={caption}
       isDraggable={isModeEdit}
       option={{groupCaption, caption}}
       onDragStart={hDragStartList}
       onDragEnter={hDragEnterList}
       onDragOver={hDragOverList}
       onDragLeave={hDragLeaveList}
       onDrop={hDropList}
    >
      <WatchItems
        isModeEdit={isModeEdit}
        items={items}
        groupCaption={groupCaption}
        listCaption={caption}
        onClickItem={onClickItem}
      />
    </OpenClose2>
  )) : null;

export default WatchLists
