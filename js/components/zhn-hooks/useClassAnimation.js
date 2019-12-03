'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useClassAnimation = function useClassAnimation(_ref) {
  var isShow = _ref.isShow,
      CL = _ref.CL,
      S = _ref.S,
      _ref$initialWasClosed = _ref.initialWasClosed,
      initialWasClosed = _ref$initialWasClosed === undefined ? true : _ref$initialWasClosed,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === undefined ? 450 : _ref$timeout;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      _wasUpdated = _useState2[0],
      _forceUpdate = _useState2[1],
      _refWasClosed = (0, _react.useRef)(initialWasClosed),
      _refPrevIsShow = (0, _react.useRef)(isShow);

  (0, _react.useEffect)(function () {
    if (_refPrevIsShow.current && !isShow) {
      setTimeout(function () {
        _refWasClosed.current = true;
        _forceUpdate(function (is) {
          return !is;
        });
      }, timeout);
    }
    _refPrevIsShow.current = isShow;
    _refWasClosed.current = false;
  }, [isShow, _wasUpdated]);

  var className = void 0,
      style = void 0;
  if (_refWasClosed.current) {
    className = CL.INIT;
    style = S.INIT;
  } else {
    className = isShow ? CL.SHOWING : CL.HIDING;
    style = isShow ? S.SHOWING : S.HIDING;
  }
  return { className: className, style: style };
};

exports.default = useClassAnimation;
//# sourceMappingURL=useClassAnimation.js.map