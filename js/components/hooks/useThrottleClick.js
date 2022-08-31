"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var FN_NOOP = function FN_NOOP() {};

var useThrottleClick = function useThrottleClick(timeout, onClick) {
  if (timeout === void 0) {
    timeout = 0;
  }

  if (onClick === void 0) {
    onClick = FN_NOOP;
  }

  var _refTimeStamp = (0, _uiApi.useRef)(null);

  return (0, _uiApi.useCallback)(function (evt) {
    if (timeout === 0) {
      onClick(evt);
      return;
    }

    var _timeStampPrev = _refTimeStamp.current,
        timeStamp = evt.timeStamp;

    if (_timeStampPrev == null || timeStamp - _timeStampPrev > timeout) {
      onClick(evt);
      _refTimeStamp.current = timeStamp;
    }
  }, [timeout, onClick]);
};

var _default = useThrottleClick;
exports["default"] = _default;
//# sourceMappingURL=useThrottleClick.js.map