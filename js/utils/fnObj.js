"use strict";

exports.__esModule = true;
exports.fFindItemInObjArrayByPropName = void 0;
var fFindItemInObjArrayByPropName = function fFindItemInObjArrayByPropName(propArrName, propName) {
  return function (obj, propValue) {
    return obj[propArrName].find(function (item) {
      return item[propName] === propValue;
    });
  };
};
exports.fFindItemInObjArrayByPropName = fFindItemInObjArrayByPropName;
//# sourceMappingURL=fnObj.js.map