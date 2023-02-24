
const _isArr = Array.isArray;
const _assign = Object.assign;

export const pushToImArr = (
  arr,
  obj
) => _isArr(arr)
  ? [...arr, _assign({}, obj)]
  : [_assign({}, obj)]

export const fFilterByPropNameImArr = (
  propName
) => (
  arr,
  propValue
) => arr.filter(
   obj => obj[propName] !== propValue
);

export const insertItemToImArr = (
  item,
  index,
  arr
) => _isArr(arr)
  ? [
     ...arr.slice(0, index),
     _assign({}, item),
     ...arr.slice(index)
   ]
  : [_assign({}, item)];

export const fEditByPropNameImArr = (
  propName
) => (
  arr,
  index,
  propValue
) => _isArr(arr)
  ? [
      ...arr.slice(0, index),
      _assign({}, arr[index], { [propName]: propValue} ),
      ...arr.slice(index+1)
    ]
  : [{ [propName]: propValue}]
