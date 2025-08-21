
const CL_ROW = 'menu-more__item not-selected';
export const crMenuModelProps = (
  pageWidth,
  maxPages=1
) => ({
  pageWidth,
  maxPages,
  titleCl: CL_ROW,
  itemCl: CL_ROW,
})

export const crMenuSubItem = (
  id,
  name
) => ({
  type: 'sub',
  id,
  name
})

export const crMenuItem = (
  name,
  onClick,
  isClose=!0,
  isInitial
) => ({
  name,
  onClick,
  isClose,
  isInitial
})
