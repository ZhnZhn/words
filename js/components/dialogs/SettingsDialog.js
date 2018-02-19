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

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _SecretField = require('../zhn-m-input/SecretField');

var _SecretField2 = _interopRequireDefault(_SecretField);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var THEME_OPTIONS = [{ caption: "Dark", value: "GREY" }, { caption: "White", value: "WHITE" }, { caption: "Sand", value: "SAND" }];
var DF_THEME = THEME_OPTIONS[0];

var S = {
  MODAL: {
    position: 'static',
    width: '315px',
    height: '230px',
    margin: '70px auto 0px'
  }
};

var SettingsDialog = function (_Component) {
  (0, _inherits3.default)(SettingsDialog, _Component);

  function SettingsDialog(props) {
    (0, _classCallCheck3.default)(this, SettingsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call(this));

    _this._hSelectTheme = function (item) {
      var theme = _this.props.theme;

      if (item && theme.getThemeName() !== item.value) {
        theme.setThemeName(item.value);
        _ComponentActions2.default.changeTheme();
        //this.forceUpdate()
      }
    };

    _this._hSetAndClose = function () {
      var onClose = _this.props.onClose;

      _this._setKey1(_this.iComp1.getValue());
      onClose();
    };

    _this._crCommandButtons = function (S) {
      return [_react2.default.createElement(_RaisedButton2.default, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'SET & CLOSE',
        onClick: _this._hSetAndClose
      })];
    };

    _this._ref1 = function (n) {
      return _this.iComp1 = n;
    };

    var data = props.data;

    _this._setKey1 = data.key1;
    return _this;
  }

  (0, _createClass3.default)(SettingsDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          isShow = _props.isShow,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._crCommandButtons(TS.BT);

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          STYLE: TS.BT,
          style: (0, _extends3.default)({}, S.MODAL, TS.R_DIALOG),
          caption: 'User Settings',
          captionStyle: TS.BROWSER_CAPTION,
          isShow: isShow,
          commandButtons: _commandButtons,
          onClose: onClose
        },
        _react2.default.createElement(_SecretField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._ref1,
          caption: 'Words API Key *',
          maxLength: '50'
        }),
        _react2.default.createElement(_InputSelect2.default, {
          styleConfig: TS.SELECT,
          caption: 'Theme (Default: Dark)',
          initItem: DF_THEME,
          options: THEME_OPTIONS,
          onSelect: this._hSelectTheme
        })
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(SettingsDialog);
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\dialogs\SettingsDialog.js.map