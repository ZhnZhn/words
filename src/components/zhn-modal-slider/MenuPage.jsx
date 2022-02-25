import {
  useRef,
  useCallback,
  useEffect
} from '../uiApi';

import MenuTitle from './MenuTitle';
import MenuItemList from './MenuItemList';

const DF_ITEMS = []
, _getRefValue = ref => ref.current;

const useRegRef = () => {
  const ref = useRef()
  , onReg = useCallback(el => {
    ref.current = el;
  }, []);
  return [ref, onReg];
};

const MenuPage = ({
  style,
  title,
  items=DF_ITEMS,
  baseTitleCl,
  itemCl,
  pageCurrent,
  pageNumber,
  onNextPage,
  onPrevPage,
  onClose,
  children
}) => {
  const [
    _refTitle,
    _onRegTitle
  ] = useRegRef()
  , [
    _refFirstItem,
    _onRegFirstItem
  ] = useRegRef();

  useEffect(() => {
    if (pageCurrent === pageNumber){
      const _elTitle = _getRefValue(_refTitle)
      , _elFirstItem = _getRefValue(_refFirstItem);
      if (_elTitle) {
         setTimeout(() => _elTitle.focus(), 1000)
      } else if (_elFirstItem) {
         setTimeout(() => _elFirstItem.focus(), 1000)
      }
    }
  })

  return (
    <div style={style}>
      <MenuTitle
        baseTitleCl={baseTitleCl}
        title={title}
        pageNumber={pageNumber}
        onPrevPage={onPrevPage}
        onReg={_onRegTitle}
      />
      <MenuItemList
        items={items}
        itemCl={itemCl || baseTitleCl}
        pageNumber={pageNumber}
        onNextPage={onNextPage}
        onReg={_onRegFirstItem}
        onClose={onClose}
      />
      {children}
    </div>
  );
};

/*
MenuPage.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  pageCurrent: PropTypes.number,
  pageNumber: PropTypes.number,
  items: PropTypes.arrayOf(
     PropTypes.shapeOf({
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func
     })
  ),
  baseTitleCl: PropTypes.string,
  itemCl: PropTypes.string,
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default MenuPage
