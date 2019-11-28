'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fn = require('../../utils/fn');

var _fn2 = _interopRequireDefault(_fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    var config = adapter.toConfig(json, option);
    var itemConf = option.itemConf;
    onCompleted({ config: config, itemConf: itemConf }, option);
  };
};

var loadItem = function loadItem(option, onCompleted, onFailed) {
  var api = option.api,
      adapter = option.adapter,
      getRequestUrl = api.getRequestUrl,
      crOptions = api.crOptions,
      checkResponse = api.checkResponse,
      fetchOptions = typeof crOptions === 'function' ? crOptions(option) : undefined;

  (0, _fn2.default)({
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

exports.default = loadItem;
//# sourceMappingURL=loadItem.js.map