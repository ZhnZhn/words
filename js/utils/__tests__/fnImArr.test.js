"use strict";

var _fnImArr = require("../fnImArr");
var _isArr = Array.isArray;
describe('pushToImArr', function () {
  var fn = _fnImArr.pushToImArr;
  test('should push to array and return new array with item', function () {
    expect(typeof fn).toBe('function');
    var obj1 = {
        propName: 'value1'
      },
      arr1 = fn(void 0, obj1);
    expect(_isArr(arr1)).toBe(true);
    expect(arr1[0]).not.toBe(obj1);
    expect(arr1[0]).toEqual(obj1);
    var obj2 = {
        propName: 'value2'
      },
      arr2 = fn(arr1, obj2);
    expect(arr2).not.toBe(arr1);
    expect(arr2[1]).not.toBe(obj2);
    expect(arr2[1]).toEqual(obj2);
  });
});
describe('fFilterByPropNameImArr', function () {
  var fn = _fnImArr.fFilterByPropNameImArr;
  test('should return function by propName that filter array by propValue in immutable way', function () {
    var _item, _item2;
    expect(typeof fn).toBe('function');
    var propName = 'propName',
      value1 = 'value1',
      value2 = 'value2',
      item1 = (_item = {}, _item[propName] = value1, _item),
      item2 = (_item2 = {}, _item2[propName] = value2, _item2),
      arr1 = [item1, item2],
      filterImArr = fn(propName);
    expect(typeof filterImArr).toBe('function');
    var arr2 = filterImArr(arr1, 'someValue');
    expect(_isArr(arr2)).toBe(true);
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(arr1);
    expect(arr1.length).toBe(arr2.length);
    var arr3 = filterImArr(arr2, value1);
    expect(arr3).not.toBe(arr2);
    expect(arr3.length).toBe(arr2.length - 1);
  });
});
describe('insertItemToImArr', function () {
  var fn = _fnImArr.insertItemToImArr;
  test('should insert item in array by index and return new array with item', function () {
    expect(typeof fn).toBe('function');
    var obj1 = {
        pn: 'value1'
      },
      arr1 = fn(obj1);
    expect(_isArr(arr1)).toBe(true);
    expect(arr1).toEqual([obj1]);
    expect(arr1[0]).not.toBe(obj1);
    var obj2 = {
        pn: 'value2'
      },
      arr2 = fn(obj2, 0, arr1);
    expect(_isArr(arr2)).toBe(true);
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual([obj2, obj1]);
    expect(arr2[0]).not.toBe(obj2);
  });
});
describe('fEditByPropNameImArr', function () {
  var fn = _fnImArr.fEditByPropNameImArr;
  test('should return function by propName that edit array by itemIndex and propValue in immutable way', function () {
    var _item3, _item4, _expect$toEqual;
    expect(typeof fn).toBe('function');
    var propName = 'propName',
      value1 = 'value1',
      value2 = 'value2',
      item1 = (_item3 = {}, _item3[propName] = value1, _item3),
      item2 = (_item4 = {}, _item4[propName] = value2, _item4),
      arr1 = [item1, item2],
      _editImArr = fn(propName),
      value3 = 'value3';
    var arr2 = _editImArr(arr1, 0, value3);
    expect(_isArr(arr1)).toBe(true);
    expect(arr2).not.toBe(arr1);
    expect(arr2.length).toBe(arr1.length);
    expect(arr2[0]).not.toBe(arr1[0]);
    expect(arr2[0]).toEqual((_expect$toEqual = {}, _expect$toEqual[propName] = value3, _expect$toEqual));
  });
});
//# sourceMappingURL=fnImArr.test.js.map