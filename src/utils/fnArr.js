import { bindTo } from './bindTo';

const _isArr = Array.isArray;

export const fFindArrIndexByPropName = (
  propName
) => (
  arr,
  propValue
) => _isArr(arr)
  ? arr.findIndex(
      item => item[propName] === propValue
    )
  : -1;

export const fIsArrSameItemByPropName = (
  propName
) => (
  arr,
  propValue
) => _isArr(arr)
  ? arr.findIndex(
        item => item[propName] === propValue
    ) !== -1
  : false;

  const _joinBy = (
    delimeter,
    ...restItems
  ) => restItems
    .filter(Boolean)
    .join(delimeter)

export const joinByBlank = bindTo(_joinBy, ' ')
export const joinByColon = bindTo(_joinBy, ': ')
export const joinByComma = bindTo(_joinBy, ', ')
