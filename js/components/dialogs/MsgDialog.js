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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  CAPTION: {
    //width : '360px',
    //paddingLeft : '10px',
    paddingTop: '8px',
    paddingLeft: '8px',
    color: 'rgba(164, 135, 212,1)',
    fontSize: '18px',
    fontWeight: 'bold'
    //lineHeight : 2
  },
  ROW: {
    //display: 'block',
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
    marginTop: '5px',
    marginLeft: '5px',
    marginBottom: '5px'
  },
  DESCR: {
    color: 'gray',
    width: '360px',
    paddingLeft: '10px',
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
        _ModalDialog2.default,
        {
          STYLE: TS.BT,
          style: TS.R_DIALOG
          //captionStyle={{ ...TS.BROWSER_CAPTION, ...S.CAPTION }}
          , captionStyle: TS.BROWSER_CAPTION,
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
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\dialogs\MsgDialog.js.map