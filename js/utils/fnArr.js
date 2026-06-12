"use strict";

exports.__esModule = true;
exports.joinByComma = exports.joinByColon = exports.joinByBlank = exports.fIsArrSameItemByPropName = exports.fFindArrIndexByPropName = void 0;
var _bindTo = require("./bindTo");
const _isArr = Array.isArray;
const fFindArrIndexByPropName = propName => (arr, propValue) => _isArr(arr) ? arr.findIndex(item => item[propName] === propValue) : -1;
exports.fFindArrIndexByPropName = fFindArrIndexByPropName;
const fIsArrSameItemByPropName = propName => (arr, propValue) => _isArr(arr) ? arr.findIndex(item => item[propName] === propValue) !== -1 : false;
exports.fIsArrSameItemByPropName = fIsArrSameItemByPropName;
const _joinBy = function (delimeter) {
  for (var _len = arguments.length, restItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restItems[_key - 1] = arguments[_key];
  }
  return restItems.filter(Boolean).join(delimeter);
};
const joinByBlank = exports.joinByBlank = (0, _bindTo.bindTo)(_joinBy, ' ');
const joinByColon = exports.joinByColon = (0, _bindTo.bindTo)(_joinBy, ': ');
const joinByComma = exports.joinByComma = (0, _bindTo.bindTo)(_joinBy, ', ');
//# sourceMappingURL=fnArr.js.map