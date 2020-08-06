"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useClassAnimation = _interopRequireDefault(require("../zhn-hooks/useClassAnimation"));

//import PropTypes from 'prop-types'
var CL = {
  INIT: 'modal-root',
  SHOWING: 'modal-root show-modal',
  HIDING: 'modal-root hide-modal'
};
var S = {
  INIT: {
    display: 'none'
  },
  SHOWING: {
    display: 'block'
  },
  HIDING: {
    backgroundColor: 'rgba(0,0,0, 0)'
  }
};

var ModalContainer = function ModalContainer(_ref) {
  var isShow = _ref.isShow,
      timeout = _ref.timeout,
      children = _ref.children,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, (0, _useClassAnimation["default"])({
    isShow: isShow,
    CL: CL,
    S: S,
    timeout: timeout
  }), {
    onClick: onClose
  }), children);
};

var _default = ModalContainer;
exports["default"] = _default;
//# sourceMappingURL=ModalContainer.js.map