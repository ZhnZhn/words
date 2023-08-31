import {
  hDragStartGroup,
  hDragEnterGroup,
  hDragOverGroup,
  hDragLeaveGroup,
  hDropGroup
} from './dnd-handlers/DnDGroupHandlers';

import Comp from '../Comp';
import WatchLists from './WatchLists';

const { OpenClose2 } = Comp
, _isArr = Array.isArray
, S_GROUP_DIV = {
  lineHeight: 2.5
}
, S_CAPTION = {
  color: '#9e9e9e'
};

const WatchGroups = ({
  isModeEdit,
  groups,
  onClickItem
}) => _isArr(groups) ? groups
  .map(({caption, lists}) => (
      <OpenClose2
         key={caption}
         style={S_GROUP_DIV}
         styleCaption={S_CAPTION}
         caption={caption}
         isDraggable={isModeEdit}
         option={{caption}}
         onDragStart={hDragStartGroup}
         onDragEnter={hDragEnterGroup}
         onDragOver={hDragOverGroup}
         onDragLeave={hDragLeaveGroup}
         onDrop={hDropGroup}
       >
         <WatchLists
           isModeEdit={isModeEdit}
           groupCaption={caption}
           lists={lists}
           onClickItem={onClickItem}
         />
       </OpenClose2>
  )) : null;

export default WatchGroups
