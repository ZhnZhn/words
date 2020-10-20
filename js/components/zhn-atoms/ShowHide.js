"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var SHOW_POPUP = 'show-popup';
var S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(props) {
  var isShow = props.isShow,
      className = props.className,
      style = props.style,
      children = props.children,
      _styleShow = isShow ? S.SHOW : S.HIDE,
      _classShow = isShow ? SHOW_POPUP : '',
      _className = className ? className + " " + _classShow : _classShow !== '' ? _classShow : undefined;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: Object.assign({}, style, _styleShow),
    children: children
  });
};
/*
ShowHide.propTypes = {
  isShow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType[
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]
}
*/


var _default = ShowHide;
exports["default"] = _default;
//# sourceMappingURL=ShowHide.js.map