"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var LIMIT_REMAINING = 'X-RateLimit-requests-Remaining';
var FREQUENCY_RESTRICTION = 5000;
var MSG_FREQUENCY_RESTRICTION = 'Request frequency restriction.\nOne request per 5 second.\n Remain';
var _lastUri;
var _msLastFetch;
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
var _promiseResolve = Promise.resolve.bind(Promise);
var _crMsgFrequency = function _crMsgFrequency(msDiff) {
  var _s = (msDiff / 1000).toFixed(1);
  return MSG_FREQUENCY_RESTRICTION + " " + _s + " seconds";
};
var _crErrMsg = function _crErrMsg(msg) {
  return {
    msg: msg
  };
};
var fnFetch = function fnFetch(_ref) {
  var uri = _ref.uri,
    option = _ref.option,
    fetchOptions = _ref.fetchOptions,
    onCheckResponse = _ref.onCheckResponse,
    onFetch = _ref.onFetch,
    onCompleted = _ref.onCompleted,
    onFailed = _ref.onFailed,
    onCatch = _ref.onCatch;
  var _msNow = Date.now(),
    _msDiff = _msNow - _msLastFetch;
  if (_msDiff < FREQUENCY_RESTRICTION) {
    if (_lastUri !== uri) {
      onFailed(_crErrMsg(_crMsgFrequency(_msDiff)));
    }
  } else {
    _lastUri = uri;
    _msLastFetch = _msNow;
    fetch(uri, fetchOptions).then(function (res) {
      var status = res.status,
        statusText = res.statusText,
        _res$headers = res.headers,
        headers = _res$headers === void 0 ? {} : _res$headers;
      return Promise.all([_promiseResolve(status), _promiseResolve(statusText), _isFn(headers.get) ? _promiseResolve(headers.get(LIMIT_REMAINING)) : _promiseResolve(void 0), _isFn(res.json) ? res.json() : _promiseResolve(void 0)]);
    }).then(function (_ref2) {
      var status = _ref2[0],
        statusText = _ref2[1],
        limitRemaining = _ref2[2],
        json = _ref2[3];
      if (status >= 200 && status < 400) {
        if (onCheckResponse(json, option)) {
          option.limitRemaining = limitRemaining;
          onFetch({
            json: json,
            option: option,
            onCompleted: onCompleted
          });
        }
      } else {
        throw _crErrMsg(status === 404 ? status + ": Not Found" : status + ": " + statusText + ". " + (json.message || ''));
      }
    })["catch"](function (error) {
      onCatch({
        error: error,
        option: option,
        onFailed: onFailed
      });
    });
  }
};
var _default = fnFetch;
exports["default"] = _default;
//# sourceMappingURL=fnFetch.js.map