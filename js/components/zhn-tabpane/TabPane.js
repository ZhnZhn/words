"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _jsxRuntime = require("react/jsx-runtime");

var S_TABS = {
  margin: '5px 5px 10px 12px'
},
    S_COMPONENTS = {
  width: "100%",
  height: "100%"
},
    S_BLOCK = {
  display: 'block',
  width: "100%",
  height: "100%"
},
    S_NONE = {
  display: 'none'
};

var TabPane = function TabPane(_ref) {
  var width = _ref.width,
      height = _ref.height,
      tabStyle = _ref.tabStyle,
      children = _ref.children;

  var _useState = (0, _uiApi.useState)(0),
      selectedTabIndex = _useState[0],
      setSelectedTabIndex = _useState[1],
      _isSelectedTabIndex = function _isSelectedTabIndex(index) {
    return index === selectedTabIndex;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      width: width,
      height: height
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: (0, _extends2["default"])({}, S_TABS, tabStyle),
      children: children.map(function (tab, index) {
        return (0, _uiApi.cloneElement)(tab, {
          key: index,
          id: index,
          onClick: function onClick() {
            return setSelectedTabIndex(index);
          },
          isSelected: _isSelectedTabIndex(index)
        });
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_COMPONENTS,
      children: children.map(function (tab, index) {
        var isSelected = _isSelectedTabIndex(index);

        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: isSelected ? S_BLOCK : S_NONE,
          role: "tabpanel",
          id: "tabpanel-" + index,
          "aria-labelledby": "tab-" + index,
          children: (0, _uiApi.cloneElement)(tab.props.children, {
            isSelected: isSelected
          })
        }, index);
      })
    })]
  });
};

var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map