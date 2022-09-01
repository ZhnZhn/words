import {
  useRef,
  useCallback,
  useEffect,
  getRefValue
} from '../uiApi';

import MenuTitle from './MenuTitle';
import MenuItemList from './MenuItemList';

const DF_ITEMS = []
, MLS_FOCUS_TIMEOUT = 1000;

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
  titleCl,
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
      const _elTitle = getRefValue(_refTitle)
      , _elFirstItem = getRefValue(_refFirstItem);
      if (_elTitle) {
         setTimeout(() => _elTitle.focus(), MLS_FOCUS_TIMEOUT)
      } else if (_elFirstItem) {
         setTimeout(() => _elFirstItem.focus(), MLS_FOCUS_TIMEOUT)
      }
    }
  })

  return (
    <div style={style}>
      <MenuTitle
        titleCl={titleCl}
        title={title}
        pageNumber={pageNumber}
        onPrevPage={onPrevPage}
        onReg={_onRegTitle}
      />
      <MenuItemList
        items={items}
        itemCl={itemCl || titleCl}
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
  titleCl: PropTypes.string,
  itemCl: PropTypes.string,
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default MenuPage
