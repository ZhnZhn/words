'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Atoms = require('../../zhn-atoms/Atoms');

var _Atoms2 = _interopRequireDefault(_Atoms);

var _WordSyn = require('./WordSyn');

var _WordSyn2 = _interopRequireDefault(_WordSyn);

var _WordNyms = require('./WordNyms');

var _WordNyms2 = _interopRequireDefault(_WordNyms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  FILL_OPEN: "black",
  OC_CAPTION: {
    color: 'black'
  },
  OC_AFTER: {
    color: '#0c7abf',
    fontWeight: 'bold'
  },
  OC_CHILDREN: {
    paddingLeft: '16px',
    paddingRight: '16px'
  }
};

var Span = function Span(_ref) {
  var style = _ref.style,
      text = _ref.text;
  return _react2.default.createElement(
    'span',
    { style: style },
    '\xA0',
    text
  );
};

var WordDef = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(WordDef, _Component);

  function WordDef() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WordDef);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = WordDef.__proto__ || Object.getPrototypeOf(WordDef)).call.apply(_ref2, [this].concat(args))), _this), _this._renderDefinitions = function () {
      var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var style = arguments[1];

      return results.map(function (result, index) {
        var definition = result.definition,
            partOfSpeech = result.partOfSpeech,
            _afterComp = _react2.default.createElement(Span, {
          style: S.OC_AFTER,
          text: partOfSpeech
        });

        return _react2.default.createElement(
          _Atoms2.default.OpenClose,
          {
            key: index,
            isClose: true,
            style: style,
            caption: definition,
            fillOpen: S.FILL_OPEN,
            captionStyle: S.OC_CAPTION,
            afterCaptionComp: _afterComp,
            childrenStyle: S.OC_CHILDREN
          },
          _react2.default.createElement(_WordSyn2.default, {
            result: result
          }),
          _react2.default.createElement(_WordNyms2.default, {
            result: result
          })
        );
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WordDef, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          style = _props.style,
          config = _props.config;

      return _react2.default.createElement(
        _Atoms2.default.ShowHide,
        {
          style: style,
          isShow: isShow
        },
        this._renderDefinitions(config.results, style)
      );
    }
  }]);
  return WordDef;
}(_react.Component), _class.defaultProps = {
  config: {}
}, _temp2);
exports.default = WordDef;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\items\word\WordDef.js.map