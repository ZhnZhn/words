"use strict";

exports.__esModule = true;
exports.writeObj = exports.readObj = exports.hasLocalStorage = void 0;
var LS = window.localStorage;
var hasLocalStorage = !!LS;
exports.hasLocalStorage = hasLocalStorage;

var _getTryCatchValue = function _getTryCatchValue(getValue, dfValue) {
  try {
    return getValue() || dfValue;
  } catch (err) {
    return dfValue;
  }
};

var readObj = function readObj(storageKey, dfValue) {
  return _getTryCatchValue(function () {
    return JSON.parse(LS[storageKey]);
  }, dfValue);
};

exports.readObj = readObj;

var writeObj = function writeObj(storageKey, valueObj) {
  try {
    LS[storageKey] = JSON.stringify(valueObj);
  } catch (err) {
    return err;
  }
};

exports.writeObj = writeObj;
//# sourceMappingURL=localStorageFn.js.map