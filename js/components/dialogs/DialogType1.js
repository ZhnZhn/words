"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));

var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));

var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));

var _withKeyDown = _interopRequireDefault(require("./decorators/withKeyDown"));

var _class, _temp;

var DialogType1 = (0, _withKeyDown["default"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DialogType1, _Component);

  function DialogType1(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _symbol = _this.inputSymbol.getValue();

      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        symbol: _symbol
      });
    };

    _this._handleClose = function () {
      _this.dialogComp.focusPrevEl();

      _this.props.onClose();
    };

    _this._createCommandButtons = function (TS) {
      return [_react["default"].createElement(_RaisedButton["default"], {
        key: "_load",
        rootStyle: TS.RAISED_ROOT,
        clDiv: TS.CL_RAISED_DIV,
        caption: "Load",
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

    _this._handleKeyDownWith = _this._handleKeyDownWith.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = DialogType1.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        theme = _this$props2.theme,
        isShow = _this$props2.isShow,
        caption = _this$props2.caption,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT);

    return _react["default"].createElement(_DraggableDialog["default"], {
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
    }, _react["default"].createElement(_TextField["default"], {
      ref: this._refInputWord,
      rootStyle: TS.INPUT_ROOT,
      caption: "Word (Default: Example)",
      initValue: "Example"
    }));
  };

  return DialogType1;
}(_react.Component), _temp)) || _class;

var _default = (0, _withTheme["default"])(DialogType1);

exports["default"] = _default;
//# sourceMappingURL=DialogType1.js.map