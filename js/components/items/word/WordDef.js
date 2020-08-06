"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../../Comp"));

var _WordSyn = _interopRequireDefault(require("./WordSyn"));

var _WordNyms = _interopRequireDefault(require("./WordNyms"));

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
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: style
  }, "\xA0", text);
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
            _afterComp = /*#__PURE__*/_react["default"].createElement(Span, {
          style: S.OC_AFTER,
          text: partOfSpeech
        });

        return /*#__PURE__*/_react["default"].createElement(_Comp["default"].OpenClose, {
          key: index,
          isClose: true,
          style: style,
          caption: definition,
          fillOpen: S.FILL_OPEN,
          captionStyle: S.OC_CAPTION,
          afterCaptionComp: _afterComp,
          childrenStyle: S.OC_CHILDREN
        }, /*#__PURE__*/_react["default"].createElement(_WordSyn["default"], {
          result: result
        }), /*#__PURE__*/_react["default"].createElement(_WordNyms["default"], {
          result: result
        }));
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
    return /*#__PURE__*/_react["default"].createElement(_Comp["default"].ShowHide, {
      style: style,
      isShow: isShow
    }, this._renderDefinitions(config.results, style));
  };

  return WordDef;
}(_react.Component);

WordDef.defaultProps = {
  config: {}
};
var _default = WordDef;
exports["default"] = _default;
//# sourceMappingURL=WordDef.js.map