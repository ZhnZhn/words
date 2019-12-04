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

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

var _CardApiKey = require('./CardApiKey');

var _CardApiKey2 = _interopRequireDefault(_CardApiKey);

var _CardUi = require('./CardUi');

var _CardUi2 = _interopRequireDefault(_CardUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  MODAL: {
    position: 'static',
    width: 350,
    height: 290,
    zIndex: 10,
    margin: '70px auto 0px',
    border: 'solid 2px #1b2836',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px'
  },
  CARD_ROOT: {
    position: 'relative',
    height: 200
  },
  CARD_BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  }
};

var SettingsDialog = function (_Component) {
  (0, _inherits3.default)(SettingsDialog, _Component);

  function SettingsDialog(props) {
    (0, _classCallCheck3.default)(this, SettingsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call(this, props));

    _this._hSelectTheme = function (item) {
      var theme = _this.props.theme;

      if (item && theme.getThemeName() !== item.value) {
        _ComponentActions2.default.changeTheme(item.value);
      }
    };

    _this._hSetAndClose = function () {
      var onClose = _this.props.onClose;

      _this._setKey1(_this.iComp1.getValue());
      onClose();
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
          TS = theme.createStyle(_Dialog2.default);


      return _react2.default.createElement(
        _Comp2.default.ModalDialog,
        {
          className: '',
          STYLE: TS.BT,
          style: (0, _extends3.default)({}, S.MODAL, TS.R_DIALOG),
          caption: 'User Settings',
          captionStyle: TS.BROWSER_CAPTION,
          isShow: isShow,
          isWithButton: false,
          onClose: onClose
        },
        _react2.default.createElement(
          _Comp2.default.TabPane,
          { width: '100%' },
          _react2.default.createElement(
            _Comp2.default.Tab,
            { title: 'API Key', style: TS.TAB },
            _react2.default.createElement(_CardApiKey2.default, {
              ref: this._ref1,
              style: S.CARD_ROOT,
              buttonsStyle: S.CARD_BUTTONS,
              btStyle: TS.BT.FLAT_ROOT,
              onSet: this._hSetAndClose,
              onClose: onClose
            })
          ),
          _react2.default.createElement(
            _Comp2.default.Tab,
            { title: 'UI Theme', style: TS.TAB },
            _react2.default.createElement(_CardUi2.default, {
              style: S.CARD_ROOT,
              buttonsStyle: S.CARD_BUTTONS,
              btStyle: TS.BT.FLAT_ROOT,
              onSetTheme: this._hSelectTheme,
              onClose: onClose
            })
          )
        )
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(SettingsDialog);
//# sourceMappingURL=SettingsDialog.js.map