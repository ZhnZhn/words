"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from "prop-types";

const CL_TAB = 'tab',
  CL_TAB_SELECTED = 'tab--selected';
const Tab = _ref => {
  let {
    id,
    title,
    isSelected,
    onClick
  } = _ref;
  const _cn = (0, _uiApi.crCn)(CL_TAB, [isSelected, CL_TAB_SELECTED]);
  return (0, _jsxRuntime.jsx)("button", {
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
exports.default = _default;
//# sourceMappingURL=Tab.js.map