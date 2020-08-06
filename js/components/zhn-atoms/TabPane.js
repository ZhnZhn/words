"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

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
        return /*#__PURE__*/_react["default"].cloneElement(tab, {
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

        return /*#__PURE__*/_react["default"].createElement("div", {
          style: _divStyle,
          key: 'a' + index
        }, /*#__PURE__*/_react["default"].cloneElement(tab.props.children, {
          key: 'comp' + index,
          isSelected: _isSelected
        }));
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
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, S.TAB_CAPTIONS, tabStyle)
    }, this._renderTabs()), /*#__PURE__*/_react["default"].createElement("div", {
      style: S.TABS
    }, this._renderComponents()));
  };

  return TabPane;
}(_react.Component);

var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map