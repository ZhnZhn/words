'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const LIMIT_REMAINING = 'X-RateLimit-Remaining';

/*
const _fnMsg400 = (option) => {
  if (option.loadId === "EU_STAT"){
    return '400 : Bad request.\nDataset contains no data. One or more filtering elements (query parameters) are probably invalid.\nMaybe try request with older date.';
  } else {
    return '400 : Bad request';
  }
}
*/
var LIMIT_REMAINING = 'X-RateLimit-requests-Remaining';

var FREQUENCY_RESTRICTION = 5000;
var MSG_FREQUENCY_RESTRICTION = 'Request frequency restriction.\nOne request per 5 second.\n Remain';
//const MSG_LOAD_RESTRICTION = 'Request has already loaded.\n1 Request per 5 second.';
var _lastUri = void 0;
var _msLastFetch = void 0;

var _crMsgFrequency = function _crMsgFrequency(msDiff) {
  var _s = (msDiff / 1000).toFixed(1);
  return MSG_FREQUENCY_RESTRICTION + ' ' + _s + ' seconds';
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
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
      onFailed({ msg: _crMsgFrequency(_msDiff) });
    }
  } else {
    _lastUri = uri;
    _msLastFetch = _msNow;
    fetch(uri, fetchOptions).then(function (res) {
      var status = res.status,
          statusText = res.statusText,
          _res$headers = res.headers,
          headers = _res$headers === undefined ? {} : _res$headers;

      return Promise.all([Promise.resolve(status), Promise.resolve(statusText), _isFn(headers.get) ? Promise.resolve(headers.get(LIMIT_REMAINING)) : Promise.resolve(undefined), _isFn(res.json) ? res.json() : Promise.resolve(undefined)]);
      /*
      if ((status>=200 && status<400) || ok) {
        if (_isFn(headers.get)){
          return Promise.all([
             Promise.resolve(headers.get(LIMIT_REMAINING)),
             res.json()
          ]);
        } else {
          return Promise.all([
             Promise.resolve(status),
             Promise.resolve(statusText),
             Promise.resolve(undefined),
             res.json()
          ]);
        }
      } else if (status === 404) {
        throw {
          msg: `Not Found ${status}`
        };
      } else {
        throw {
          msg : `Response Error ${status}: ${statusText}`
        };
      }
      */
    }).then(function (_ref2) {
      var _ref3 = (0, _slicedToArray3.default)(_ref2, 4),
          status = _ref3[0],
          statusText = _ref3[1],
          limitRemaining = _ref3[2],
          json = _ref3[3];

      if (status >= 200 && status < 400) {
        if (onCheckResponse(json, option)) {
          option.limitRemaining = limitRemaining;
          onFetch({ json: json, option: option, onCompleted: onCompleted });
        }
      } else if (status === 404) {
        throw {
          msg: status + ': Not Found'
        };
      } else {
        throw {
          msg: status + ': ' + statusText + '. ' + (json.message || '')
        };
      }
    }).catch(function (error) {
      onCatch({ error: error, option: option, onFailed: onFailed });
    });
  }
};

exports.default = fnFetch;
//# sourceMappingURL=fn.js.map