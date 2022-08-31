"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _jsxRuntime = require("react/jsx-runtime");

var FN_NOOP = function FN_NOOP() {};

var MenuItem = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      caption = _ref.caption,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? FN_NOOP : _ref$onClick,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? FN_NOOP : _ref$onClose;

  var _refDiv = (0, _uiApi.useRef)(),
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    var _event = event,
        keyCode = _event.keyCode;

    if (keyCode === 13) {
      onClick();
    } else if (keyCode === 27) {
      onClose({
        target: (0, _uiApi.getRefValue)(_refDiv)
      });
    }
  }, [onClick, onClose]);

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        var _el = (0, _uiApi.getRefValue)(_refDiv);

        if (_el) {
          _el.focus();
        }
      }
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "button",
    ref: _refDiv,
    className: className,
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: caption
  });
});
var _default = MenuItem;
exports["default"] = _default;
//# sourceMappingURL=MenuItem.js.map