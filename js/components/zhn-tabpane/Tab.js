"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CL_TAB = 'tab',
    CL_TAB_SELECTED = 'tab--selected';

var Tab = function Tab(_ref) {
  var id = _ref.id,
      title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _cn = (0, _crCn["default"])(CL_TAB, [isSelected, CL_TAB_SELECTED]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: _cn,
    id: "tab-" + id,
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": "tabpanel-" + id,
    onClick: onClick,
    children: title
  });
};
/*
Tab.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
*/


var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map