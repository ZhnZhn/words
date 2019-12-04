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

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

var _TextField = require('../zhn-m-input/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _withKeyDown = require('./decorators/withKeyDown');

var _withKeyDown2 = _interopRequireDefault(_withKeyDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogType1 = (0, _withKeyDown2.default)(_class = function (_Component) {
  (0, _inherits3.default)(DialogType1, _Component);

  function DialogType1(props) {
    (0, _classCallCheck3.default)(this, DialogType1);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogType1.__proto__ || Object.getPrototypeOf(DialogType1)).call(this, props));

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _symbol = _this.inputSymbol.getValue();

      onLoad({
        type: type, source: source, itemConf: itemConf,
        symbol: _symbol
      });
    };

    _this._handleClose = function () {
      _this.dialogComp.focusPrevEl();
      _this.props.onClose();
    };

    _this._createCommandButtons = function (TS) {
      return [_react2.default.createElement(_RaisedButton2.default, {
        key: '_load',
        rootStyle: TS.RAISED_ROOT,
        clDiv: TS.CL_RAISED_DIV,
        caption: 'Load',
        isPrimary: true,
        onClick: _this._handleLoad
      })];
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputWord = function (comp) {
      return _this.inputSymbol = comp;
    };

    _this._handleKeyDownWith = _this._handleKeyDownWith.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DialogType1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          isShow = _props.isShow,
          caption = _props.caption,
          onShow = _props.onShow,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _DraggableDialog2.default,
        {
          ref: this._refDialogComp,
          rootStyle: TS.R_DIALOG,
          browserCaptionStyle: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: caption,
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_TextField2.default, {
          ref: this._refInputWord,
          rootStyle: TS.INPUT_ROOT,
          caption: 'Word (Default: Example)',
          initValue: 'Example'
        })
      );
    }
  }]);
  return DialogType1;
}(_react.Component)) || _class;

exports.default = (0, _withTheme2.default)(DialogType1);
//# sourceMappingURL=DialogType1.js.map