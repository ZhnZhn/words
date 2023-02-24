
export const fFindItemInObjArrayByPropName = (
  propArrName,
  propName
) => (
  obj,
  propValue
) => obj[propArrName]
  .find(item => item[propName] === propValue)
