"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

//import PropTypes from "prop-types";
var CL_UL = "tabpane__tabs";
var S = {
  UL: {
    listStyle: 'outside none none',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    borderBottom: '2px solid #80c040'
  },
  DIV: {
    width: "100%",
    height: "100%"
  },
  BLOCK: {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  NONE: {
    display: 'none'
  }
};

var TabPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(TabPane, _Component);

  /*
  static propTypes = {
    isUpdateInit: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node)
  }
  */
  function TabPane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleClickTab = function (index) {
      _this.setState({
        selectedTabIndex: index
      });
    };

    _this._renderTabs = function (children) {
      var selectedTabIndex = _this.state.selectedTabIndex;
      return children.map(function (tab, index) {
        var isSelected = index === selectedTabIndex ? true : false;
        return _react["default"].cloneElement(tab, {
          key: index,
          onClick: _this._handleClickTab.bind(null, index),
          isSelected: isSelected
        });
      });
    };

    _this._renderComponents = function () {
      var _this$state = _this.state,
          selectedTabIndex = _this$state.selectedTabIndex,
          components = _this$state.components;
      return components.map(function (comp, index) {
        var divStyle = index === selectedTabIndex ? S.BLOCK : S.NONE;
        return _react["default"].createElement("div", {
          style: divStyle,
          key: 'a' + index
        }, comp);
      });
    };

    _this.getSelectedTabIndex = function () {
      return _this.state.selectedTabIndex;
    };

    _this.isUpdateInit = props.isUpdateInit;

    var _components = props.children.map(function (tab, index) {
      return _react["default"].cloneElement(tab.props.children, {
        key: 'comp' + index
      });
    });

    _this.state = {
      selectedTabIndex: 0,
      components: _components
    };
    return _this;
  }

  var _proto = TabPane.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.isUpdateInit && this.props !== nextProps) {
      var components = nextProps.children.map(function (tab, index) {
        return _react["default"].cloneElement(tab.props.children, {
          key: 'comp' + index
        });
      });
      this.setState({
        components: components
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        width = _this$props.width,
        height = _this$props.height;
    return _react["default"].createElement("div", {
      style: {
        width: width,
        height: height
      }
    }, _react["default"].createElement("ul", {
      className: CL_UL,
      style: S.UL
    }, this._renderTabs(children)), _react["default"].createElement("div", {
      style: S.DIV
    }, this._renderComponents()));
  };

  return TabPane;
}(_react.Component);

var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map