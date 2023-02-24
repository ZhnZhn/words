import {
  fFindItemInObjArrayByPropName
} from '../fnObj';

describe('fFindItemInObjArrayByPropName',()=>{
  const fn = fFindItemInObjArrayByPropName
  test('',()=>{
    const _arrPropName = 'arrPropName'
    , _itemPropName = 'itemPropName`'
    , _findItem = fn(_arrPropName, _itemPropName)
    , value1 = 'value1'
    , value2 = 'value2'
    , item1 = {[_itemPropName]: value1}
    , item2 = {[_itemPropName]: value2}
    , _obj = {
      [_arrPropName]: [
        item1,
        item2
      ]
    };

    expect(typeof _findItem).toBe('function')
    expect(_findItem(_obj, value1)).toBe(item1)
    expect(_findItem(_obj, value2)).toBe(item2)
    expect(_findItem(_obj, 'someValue')).toBe(void 0)
  })
})
