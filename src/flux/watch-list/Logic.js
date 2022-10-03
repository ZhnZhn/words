
import WithLogicList from './WithLogicList';
import WithLogicItem from './WithLogicItem';
import WithLogicDnD from './WithLogicDnD';

const Logic = {

  ...WithLogicList,
  ...WithLogicItem,

  ...WithLogicDnD
};

export default Logic
