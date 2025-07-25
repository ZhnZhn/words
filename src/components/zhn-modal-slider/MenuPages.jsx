import { bindTo } from '../../utils/bindTo';
import { safeMap } from '../uiApi';

import MenuPage from './MenuPage';

const MenuPages = ({
  isShow,
  style,
  pages,
  pageCurrent,
  onNextPage,
  onPrevPage,
  onClose
}) => safeMap(pages, ({key, ...restProps}, index) => {
  const _pageNumber = index + 1
  , _isFirstPage = index === 0;
  return (<MenuPage
    key={key}
    {...restProps}
    style={style}
    canBeHidden={_pageNumber > pageCurrent}
    isVisible={isShow && (_pageNumber === pageCurrent)}
    pageNumber={_pageNumber}
    onNextPage={_isFirstPage ? onNextPage : void 0}
    onPrevPage={_isFirstPage ? void 0 : bindTo(onPrevPage, _pageNumber)}
    onClose={onClose}
  />)
});

export default MenuPages
