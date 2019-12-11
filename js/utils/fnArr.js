"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var fnArr = {
  findIndexByProp: function findIndexByProp(propName) {
    return function (arr, propValue) {
      if (!Array.isArray(arr)) {
        return -1;
      }

      return arr.findIndex(function (item) {
        return item[propName] === propValue;
      });
    };
  },
  isSameByProp: function isSameByProp(propName) {
    return function (arr, propValue) {
      if (!Array.isArray(arr)) {
        return false;
      }

      var index = arr.findIndex(function (item) {
        return item[propName] === propValue;
      });
      return index === -1 ? false : true;
    };
  }
};
var _default = fnArr;
exports["default"] = _default;
//# sourceMappingURL=fnArr.js.map