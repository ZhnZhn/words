
import {
  fFindArrIndexByPropName,
  fIsArrSameItemByPropName
} from '../fnArr';

describe('fFindArrIndexByPropName', ()=>{
  const fn = fFindArrIndexByPropName
  test('should return function that return index of item by value of propName from array',()=>{
    const _findArrIndex = fn('prop1')
    , value1 = 'item1'
    , value2 = 'item2'
    , arr = [
      {prop1: value1},
      {prop1: value2}
    ];

    expect(typeof _findArrIndex).toBe('function')
    expect(_findArrIndex(arr, value1)).toBe(0)
    expect(_findArrIndex(arr, value2)).toBe(1)
    expect(_findArrIndex(arr, 'someValue')).toBe(-1)
  })
  test('should return function that return -1 in edge case',()=>{
    const _findArrIndex = fn('prop1');
    expect(_findArrIndex({}, '')).toBe(-1)
    expect(_findArrIndex(void 0, '')).toBe(-1)
    expect(_findArrIndex(null, '')).toBe(-1)

    expect(_findArrIndex('str', '')).toBe(-1)
    expect(_findArrIndex(0, '')).toBe(-1)
    expect(_findArrIndex(true, '')).toBe(-1)
  })
})

describe('fIsArrSameItemByPropName',()=>{
  const fn = fIsArrSameItemByPropName
  test('should return function that return boolean if item in array by propName value',()=>{
    const _isArrSameItem = fn('prop1')
    ,  value1 = 'item1'
    , value2 = 'item2'
    , arr = [
      {prop1: value1},
      {prop1: value2}
    ];

    expect(typeof _isArrSameItem).toBe('function')
    expect(_isArrSameItem(arr, value1)).toBe(true)
    expect(_isArrSameItem(arr, value2)).toBe(true)
    expect(_isArrSameItem(arr, 'someValue')).toBe(false)
  })
  test('should return function that return false in edge case',()=>{
    const _isArrSameItem = fn('prop1');
    expect(_isArrSameItem({}, '')).toBe(false)
    expect(_isArrSameItem(void 0, '')).toBe(false)
    expect(_isArrSameItem(null, '')).toBe(false)

    expect(_isArrSameItem('str', '')).toBe(false)
    expect(_isArrSameItem(0, '')).toBe(false)
    expect(_isArrSameItem(true, '')).toBe(false)
  })
})
