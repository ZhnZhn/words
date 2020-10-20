"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

//import PropTypes from "prop-types";
var S = {
  TAB_CAPTIONS: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5
  },
  TABS: {
    width: "100%",
    height: "100%"
  },
  TAB_SELECTED: {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  NONE: {
    display: 'none'
  }
};

var TabPane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TabPane, _Component);

  function TabPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      selectedTabIndex: 0
    };

    _this._handleClickTab = function (index) {
      _this.setState({
        selectedTabIndex: index
      });
    };

    _this._renderTabs = function () {
      var children = _this.props.children,
          selectedTabIndex = _this.state.selectedTabIndex;
      return children.map(function (tab, index) {
        var isSelected = index === selectedTabIndex;
        return /*#__PURE__*/(0, _react.cloneElement)(tab, {
          key: index,
          id: index,
          onClick: _this._handleClickTab.bind(null, index),
          isSelected: isSelected
        });
      });
    };

    _this._renderComponents = function () {
      var children = _this.props.children,
          selectedTabIndex = _this.state.selectedTabIndex;
      return children.map(function (tab, index) {
        var _isSelected = index === selectedTabIndex,
            _divStyle = _isSelected ? S.TAB_SELECTED : S.NONE;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: _divStyle,
          children: /*#__PURE__*/(0, _react.cloneElement)(tab.props.children, {
            key: 'comp' + index,
            isSelected: _isSelected
          })
        }, 'a' + index);
      });
    };

    _this.getSelectedTabIndex = function () {
      return _this.state.selectedTabIndex;
    };

    return _this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        tabStyle = _this$props.tabStyle;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: style,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: (0, _extends2["default"])({}, S.TAB_CAPTIONS, tabStyle),
        children: this._renderTabs()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S.TABS,
        children: this._renderComponents()
      })]
    });
  };

  return TabPane;
}(_react.Component);

var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map