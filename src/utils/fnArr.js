
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
