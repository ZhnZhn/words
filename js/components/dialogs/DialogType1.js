"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _uiApi = require("../uiApi");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));

var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));

var _jsxRuntime = require("react/jsx-runtime");

var DialogType1 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogType1, _Component);

  function DialogType1() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad;
      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        symbol: _this.inputSymbol.getValue()
      });
    };

    _this._handleClose = function () {
      _this.dialogComp.focusPrevEl();

      _this.props.onClose();
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 13) {
        _this._handleLoad();
      } else if (event.keyCode === 27) {
        _this._handleClose();
      }
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputWord = function (comp) {
      return _this.inputSymbol = comp;
    };

    return _this;
  }

  var _proto = DialogType1.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        theme = _this$props2.theme,
        isShow = _this$props2.isShow,
        caption = _this$props2.caption,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
      ref: this._refDialogComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: caption,
      isShow: isShow,
      onKeyDown: this._handleKeyDown,
      onLoad: this._handleLoad,
      onShow: onShow,
      onClose: this._handleClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField["default"], {
        ref: this._refInputWord,
        rootStyle: TS.INPUT_ROOT,
        caption: "Word (Default: Example)",
        initialValue: "Example"
      })
    });
  };

  return DialogType1;
}(_uiApi.Component);

var _default = (0, _withTheme["default"])(DialogType1);

exports["default"] = _default;
//# sourceMappingURL=DialogType1.js.map