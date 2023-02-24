"use strict";

exports.__esModule = true;
exports.pushToImArr = exports.insertItemToImArr = exports.fFilterByPropNameImArr = exports.fEditByPropNameImArr = void 0;
var _isArr = Array.isArray;
var _assign = Object.assign;
var pushToImArr = function pushToImArr(arr, obj) {
  return _isArr(arr) ? [].concat(arr, [_assign({}, obj)]) : [_assign({}, obj)];
};
exports.pushToImArr = pushToImArr;
var fFilterByPropNameImArr = function fFilterByPropNameImArr(propName) {
  return function (arr, propValue) {
    return arr.filter(function (obj) {
      return obj[propName] !== propValue;
    });
  };
};
exports.fFilterByPropNameImArr = fFilterByPropNameImArr;
var insertItemToImArr = function insertItemToImArr(item, index, arr) {
  return _isArr(arr) ? [].concat(arr.slice(0, index), [_assign({}, item)], arr.slice(index)) : [_assign({}, item)];
};
exports.insertItemToImArr = insertItemToImArr;
var fEditByPropNameImArr = function fEditByPropNameImArr(propName) {
  return function (arr, index, propValue) {
    var _assign2, _ref;
    return _isArr(arr) ? [].concat(arr.slice(0, index), [_assign({}, arr[index], (_assign2 = {}, _assign2[propName] = propValue, _assign2))], arr.slice(index + 1)) : [(_ref = {}, _ref[propName] = propValue, _ref)];
  };
};
exports.fEditByPropNameImArr = fEditByPropNameImArr;
//# sourceMappingURL=fnImArr.js.map