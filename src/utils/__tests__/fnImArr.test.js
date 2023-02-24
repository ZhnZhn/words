import {
  pushToImArr,
  fFilterByPropNameImArr,
  insertItemToImArr,
  fEditByPropNameImArr
} from '../fnImArr';

const _isArr = Array.isArray;

describe('pushToImArr',()=>{
  const fn = pushToImArr;
  test('should push to array and return new array with item',()=>{
    expect(typeof fn).toBe('function')

    const obj1 = { propName: 'value1' }
    , arr1 = fn(void 0, obj1)

    expect(_isArr(arr1)).toBe(true)
    expect(arr1[0]).not.toBe(obj1)
    expect(arr1[0]).toEqual(obj1)

    const obj2 = { propName: 'value2' }
    , arr2 = fn(arr1, obj2)
    expect(arr2).not.toBe(arr1)
    expect(arr2[1]).not.toBe(obj2)
    expect(arr2[1]).toEqual(obj2)
  })
})


describe('fFilterByPropNameImArr',()=>{
  const fn = fFilterByPropNameImArr;
  test('should return function by propName that filter array by propValue in immutable way',()=>{
    expect(typeof fn).toBe('function')
    const propName = 'propName'
    , value1 = 'value1'
    , value2 = 'value2'
    , item1 = {[propName]: value1}
    , item2 = {[propName]: value2}
    , arr1 = [ item1, item2]
    , filterImArr = fn(propName)

    expect(typeof filterImArr).toBe('function')

    const arr2 = filterImArr(arr1, 'someValue')
    expect(_isArr(arr2)).toBe(true)
    expect(arr2).not.toBe(arr1)
    expect(arr2).toEqual(arr1)
    expect(arr1.length).toBe(arr2.length)

    const arr3 = filterImArr(arr2, value1);
    expect(arr3).not.toBe(arr2)
    expect(arr3.length).toBe(arr2.length-1)

  })
})

describe('insertItemToImArr',()=>{
  const fn = insertItemToImArr;
  test('should insert item in array by index and return new array with item',()=>{
    expect(typeof fn).toBe('function')
    const obj1 = {pn: 'value1'}
    , arr1 = fn(obj1)

    expect(_isArr(arr1)).toBe(true)
    expect(arr1).toEqual([obj1])
    expect(arr1[0]).not.toBe(obj1)

    const obj2 = {pn: 'value2'}
    , arr2 = fn(obj2, 0, arr1);
    expect(_isArr(arr2)).toBe(true)
    expect(arr2).not.toBe(arr1)
    expect(arr2).toEqual([obj2, obj1])
    expect(arr2[0]).not.toBe(obj2)

  })
})

describe('fEditByPropNameImArr',()=>{
  const fn = fEditByPropNameImArr;
  test('should return function by propName that edit array by itemIndex and propValue in immutable way',()=>{
    expect(typeof fn).toBe('function')
    const propName = 'propName'
    , value1 = 'value1'
    , value2 = 'value2'
    , item1 = {[propName]: value1}
    , item2 = {[propName]: value2}
    , arr1 = [item1, item2]
    , _editImArr = fn(propName)
    , value3 = 'value3';

    const arr2 = _editImArr(arr1, 0, value3)
    expect(_isArr(arr1)).toBe(true)
    expect(arr2).not.toBe(arr1)
    expect(arr2.length).toBe(arr1.length)
    expect(arr2[0]).not.toBe(arr1[0])
    expect(arr2[0]).toEqual({[propName]: value3})
  })
})
