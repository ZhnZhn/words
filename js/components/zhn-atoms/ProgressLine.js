"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = "progress-line",
    DF_COLOR = '#2f7ed8',
    TM_PERIOD = 1200,
    T_WIDTH = 'width 500ms ease-out' //, T_WIDTH = 'width 350ms linear'
,
    T_OPACITY = 'opacity 400ms linear' //, T_OPACITY = 'opacity 250ms linear'
,
    _crStyle = function _crStyle(backgroundColor, opacity, width, transition) {
  return {
    backgroundColor: backgroundColor,
    width: width,
    opacity: opacity,
    transition: transition
  };
};

var ProgressLine = function ProgressLine(_ref) {
  var completed = _ref.completed,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? DF_COLOR : _ref$color;

  var _rerender = (0, _useRerender["default"])(),
      _refWasCompleted = (0, _uiApi.useRef)(false),
      _refIdCompleted = (0, _uiApi.useRef)(null),
      _refWasOpacied = (0, _uiApi.useRef)(false),
      _refIdOpacied = (0, _uiApi.useRef)(null);

  (0, _uiApi.useEffect)(function () {
    if ((0, _uiApi.getRefValue)(_refWasCompleted)) {
      (0, _uiApi.setRefValue)(_refIdCompleted, setTimeout(_rerender, TM_PERIOD));
    } else if ((0, _uiApi.getRefValue)(_refWasOpacied)) {
      (0, _uiApi.setRefValue)(_refIdOpacied, setTimeout(_rerender, TM_PERIOD));
    }
  });
  (0, _uiApi.useEffect)(function () {
    return function () {
      clearTimeout((0, _uiApi.getRefValue)(_refIdCompleted));
      clearTimeout((0, _uiApi.getRefValue)(_refIdOpacied));
    };
  }, []);

  var _style;

  if ((0, _uiApi.getRefValue)(_refWasOpacied)) {
    _style = _crStyle(color, 1, 0);
    (0, _uiApi.setRefValue)(_refWasOpacied, false);
  } else if ((0, _uiApi.getRefValue)(_refWasCompleted)) {
    _style = _crStyle(color, 0, '100%', T_OPACITY);
    (0, _uiApi.setRefValue)(_refWasCompleted, false);
    (0, _uiApi.setRefValue)(_refWasOpacied, true);
  } else {
    if (completed < 0) {
      completed = 0;
    } else if (completed >= 100) {
      completed = 100;
      (0, _uiApi.setRefValue)(_refWasCompleted, true);
    }

    _style = _crStyle(color, 1, completed + '%', T_WIDTH);
  } //console.log(_style)


  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: CL,
    style: _style
  });
};
/*
ProgressLine.propTypes = {
  color: PropTypes.string,
  completed: PropTypes.number
}
*/


var _default = ProgressLine;
exports["default"] = _default;
//# sourceMappingURL=ProgressLine.js.map