"use strict";

var _fnObj = require("../fnObj");
describe('fFindItemInObjArrayByPropName', function () {
  var fn = _fnObj.fFindItemInObjArrayByPropName;
  test('', function () {
    var _item, _item2, _obj2;
    var _arrPropName = 'arrPropName',
      _itemPropName = 'itemPropName`',
      _findItem = fn(_arrPropName, _itemPropName),
      value1 = 'value1',
      value2 = 'value2',
      item1 = (_item = {}, _item[_itemPropName] = value1, _item),
      item2 = (_item2 = {}, _item2[_itemPropName] = value2, _item2),
      _obj = (_obj2 = {}, _obj2[_arrPropName] = [item1, item2], _obj2);
    expect(typeof _findItem).toBe('function');
    expect(_findItem(_obj, value1)).toBe(item1);
    expect(_findItem(_obj, value2)).toBe(item2);
    expect(_findItem(_obj, 'someValue')).toBe(void 0);
  });
});
//# sourceMappingURL=fnObj.test.js.map