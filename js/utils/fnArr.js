"use strict";

exports.__esModule = true;
exports.fIsArrSameItemByPropName = exports.fFindArrIndexByPropName = void 0;
var _isArr = Array.isArray;
var fFindArrIndexByPropName = function fFindArrIndexByPropName(propName) {
  return function (arr, propValue) {
    return _isArr(arr) ? arr.findIndex(function (item) {
      return item[propName] === propValue;
    }) : -1;
  };
};
exports.fFindArrIndexByPropName = fFindArrIndexByPropName;
var fIsArrSameItemByPropName = function fIsArrSameItemByPropName(propName) {
  return function (arr, propValue) {
    return _isArr(arr) ? arr.findIndex(function (item) {
      return item[propName] === propValue;
    }) !== -1 : false;
  };
};
exports.fIsArrSameItemByPropName = fIsArrSameItemByPropName;
//# sourceMappingURL=fnArr.js.map