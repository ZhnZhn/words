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

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  DIALOG: {
    left: 'calc(50vw - 184px)'
  },
  CAPTION: {
    paddingTop: 8,
    paddingLeft: 8,
    color: 'rgba(164, 135, 212, 1)',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  ROW: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  DESCR: {
    color: 'gray',
    width: 360,
    paddingLeft: 10,
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre'
  }
};

var MsgDialog = function (_Component) {
  (0, _inherits3.default)(MsgDialog, _Component);

  function MsgDialog() {
    (0, _classCallCheck3.default)(this, MsgDialog);
    return (0, _possibleConstructorReturn3.default)(this, (MsgDialog.__proto__ || Object.getPrototypeOf(MsgDialog)).apply(this, arguments));
  }

  (0, _createClass3.default)(MsgDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          isShow = _props.isShow,
          data = _props.data,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default),
          caption = data.caption,
          descr = data.descr;

      return _react2.default.createElement(
        _Comp2.default.ModalDialog,
        {
          STYLE: TS.BT,
          style: (0, _extends3.default)({}, TS.R_DIALOG, S.DIALOG),
          captionStyle: TS.BROWSER_CAPTION,
          caption: 'Message',
          isShow: isShow,
          onClose: onClose
        },
        _react2.default.createElement(
          'div',
          { style: S.ROW },
          _react2.default.createElement(
            'p',
            { style: S.CAPTION },
            caption
          )
        ),
        _react2.default.createElement(
          'div',
          { style: S.ROW },
          _react2.default.createElement(
            'p',
            { style: S.DESCR },
            descr
          )
        )
      );
    }
  }]);
  return MsgDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(MsgDialog);
//# sourceMappingURL=MsgDialog.js.map