'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _FlatButton = require('../zhn-atoms/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var CL_DIV = 'bt-flat__div';

var S = {
  SELECT: {
    ROOT: {
      width: '280px'
    }
  },
  BT_ROOT: {
    color: 'rgb(35, 47, 59)'
  }
};

var DF_THEME = { caption: 'Grey', value: 'GREY' };
var _themeOptions = [{ caption: 'Grey', value: 'GREY' }, { caption: 'Sand', value: 'SAND' }, { caption: 'White', value: 'WHITE' }];

var CardUi = function (_Component) {
  (0, _inherits3.default)(CardUi, _Component);

  function CardUi() {
    (0, _classCallCheck3.default)(this, CardUi);
    return (0, _possibleConstructorReturn3.default)(this, (CardUi.__proto__ || Object.getPrototypeOf(CardUi)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardUi, [{
    key: 'render',


    /*
    static propTypes = {
      style: PropTypes.object,
      buttonsStyle: PropTypes.object,
      btStyle: PropTypes.object,
      onSetTheme: PropTypes.func,
      onClose: PropTypes.func
    }
    */

    value: function render() {
      var _props = this.props,
          style = _props.style,
          buttonsStyle = _props.buttonsStyle,
          btStyle = _props.btStyle,
          onSetTheme = _props.onSetTheme,
          onClose = _props.onClose;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(_InputSelect2.default, {
          styleConfig: S.SELECT,
          caption: 'Theme (Default: Grey)',
          initItem: DF_THEME,
          options: _themeOptions,
          onSelect: onSetTheme
        }),
        _react2.default.createElement(
          'div',
          { style: buttonsStyle },
          _react2.default.createElement(_FlatButton2.default, {
            rootStyle: (0, _extends3.default)({}, S.BT_ROOT, btStyle),
            clDiv: CL_DIV,
            caption: 'Close',
            title: 'Close Dialog',
            onClick: onClose
          })
        )
      );
    }
  }]);
  return CardUi;
}(_react.Component);

exports.default = CardUi;
//# sourceMappingURL=CardUi.js.map