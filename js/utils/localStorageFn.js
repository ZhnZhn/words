"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.writeObj = exports.readObj = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var LS = window.localStorage,
    KEY_PREFIX = 'W',
    _crErr = function _crErr(msg) {
  return {
    message: msg
  };
},
    ERR_LS_IS_ABSENT = _crErr("LocalStorage is absent"),
    _crStorageKey = function _crStorageKey(storageKey) {
  return KEY_PREFIX + "_" + storageKey;
},
    _hasLocalStorage = !!LS;

var readObj = function readObj(storageKey) {
  if (_hasLocalStorage) {
    try {
      return [JSON.parse(LS[_crStorageKey(storageKey)])];
    } catch (err) {
      return [void 0, err];
    }
  } else {
    return [void 0, (0, _extends2["default"])({}, ERR_LS_IS_ABSENT)];
  }
};

exports.readObj = readObj;

var writeObj = function writeObj(storageKey, valueObj) {
  if (_hasLocalStorage) {
    try {
      LS[_crStorageKey(storageKey)] = JSON.stringify(valueObj);
    } catch (err) {
      return err;
    }
  } else {
    return (0, _extends2["default"])({}, ERR_LS_IS_ABSENT);
  }
};

exports.writeObj = writeObj;
//# sourceMappingURL=localStorageFn.js.map