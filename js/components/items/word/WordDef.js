"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _Comp = _interopRequireDefault(require("../../Comp"));

var _WordSyn = _interopRequireDefault(require("./WordSyn"));

var _WordNyms = _interopRequireDefault(require("./WordNyms"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  FILL_OPEN: "black",
  OC_CAPTION: {
    color: 'black'
  },
  OC_AFTER: {
    color: '#0c7abf',
    fontWeight: 800
  },
  OC_CHILDREN: {
    paddingLeft: 16,
    paddingRight: 16
  }
};

var Span = function Span(_ref) {
  var style = _ref.style,
      text = _ref.text;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    style: style,
    children: ["\xA0", text]
  });
};

var WordDef = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WordDef, _Component);

  function WordDef() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._renderDefinitions = function (results, style) {
      if (results === void 0) {
        results = [];
      }

      return results.map(function (result, index) {
        var definition = result.definition,
            partOfSpeech = result.partOfSpeech,
            _afterComp = /*#__PURE__*/(0, _jsxRuntime.jsx)(Span, {
          style: S.OC_AFTER,
          text: partOfSpeech
        });

        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].OpenClose, {
          isClose: true,
          style: style,
          caption: definition,
          fillOpen: S.FILL_OPEN,
          captionStyle: S.OC_CAPTION,
          afterCaptionComp: _afterComp,
          childrenStyle: S.OC_CHILDREN,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WordSyn["default"], {
            result: result
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_WordNyms["default"], {
            result: result
          })]
        }, index);
      });
    };

    return _this;
  }

  var _proto = WordDef.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        style = _this$props.style,
        config = _this$props.config;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ShowHide, {
      style: style,
      isShow: isShow,
      children: this._renderDefinitions(config.results, style)
    });
  };

  return WordDef;
}(_react.Component);

WordDef.defaultProps = {
  config: {}
};
var _default = WordDef;
exports["default"] = _default;
//# sourceMappingURL=WordDef.js.map