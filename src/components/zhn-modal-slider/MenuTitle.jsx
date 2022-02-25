import { useCallback } from '../uiApi';

import MenuAriaItem from './MenuAriaItem';

const S_ITEM = { position: 'relative' }
, S_PREV_PAGE = {
  position: 'absolute',
  top: 0,
  left: 16
}
, S_TITLE = { paddingLeft: 16 };

const MenuTitle = ({
  baseTitleCl,
  title,
  pageNumber,
  onPrevPage,
  onReg
}) => {
  const _hClick = useCallback(() => {
    onPrevPage(pageNumber)
  }, [onPrevPage, pageNumber]);

  return !title ? null : (
    <MenuAriaItem
      className={baseTitleCl}
      style={S_ITEM}
      onClick={_hClick}
      onReg={onReg}
    >
      <span style={S_PREV_PAGE}>
        {'<'}
      </span>
      <span style={S_TITLE}>
        {title}
      </span>
    </MenuAriaItem>
  );
};

export default MenuTitle
