"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _fnFetch = _interopRequireDefault(require("../../utils/fnFetch"));
var _fnCatch = function _fnCatch(_ref) {
  var error = _ref.error,
    onFailed = _ref.onFailed;
  onFailed(error);
};
var _fFetch = function _fFetch(adapter) {
  return function (_ref2) {
    var json = _ref2.json,
      option = _ref2.option,
      onCompleted = _ref2.onCompleted;
    var config = adapter.toConfig(json, option),
      itemConf = option.itemConf;
    onCompleted({
      config: config,
      itemConf: itemConf
    }, option);
  };
};
var loadItem = function loadItem(option, onCompleted, onFailed) {
  var api = option.api,
    adapter = option.adapter,
    getRequestUrl = api.getRequestUrl,
    crOptions = api.crOptions,
    checkResponse = api.checkResponse,
    fetchOptions = typeof crOptions === 'function' ? crOptions(option) : void 0;
  (0, _fnFetch["default"])({
    uri: getRequestUrl(option),
    option: option,
    fetchOptions: fetchOptions,
    onCheckResponse: checkResponse,
    onFetch: _fFetch(adapter),
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  });
};
var _default = loadItem;
exports["default"] = _default;
//# sourceMappingURL=loadItem.js.map