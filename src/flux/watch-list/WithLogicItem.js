import LogicFn from './LogicFn';

const {
  crMsgItemExisted,

  findGroup,
  findList,
  isInArraySameCaption,
  filter
} = LogicFn;

const WithLogicItem = {

  addItem(watchList, item){
    const {
           caption, groupCaption, listCaption,
          } = item
        , toGroup = findGroup(watchList, groupCaption)
        , toList = findList(toGroup, listCaption)
        , items = toList.items;

    if ( isInArraySameCaption(items, caption) ){
      return crMsgItemExisted(caption, listCaption);
    }
    if (items){
      toList.items.push({ caption });
    } else {
      toList.items = [{ caption }];
    }
    return { isDone: true };
  },

  removeItem(watchList, {groupCaption, listCaption, caption}){
    const groupFrom = findGroup(watchList, groupCaption)
        , listFrom = findList(groupFrom, listCaption);

    listFrom.items = filter(listFrom.items, caption);
  }

};

export default WithLogicItem
