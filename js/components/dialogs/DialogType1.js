"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));

var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));

var _jsxRuntime = require("react/jsx-runtime");

var DialogType1 = function DialogType1(_ref) {
  var isShow = _ref.isShow,
      caption = _ref.caption,
      type = _ref.type,
      source = _ref.source,
      itemConf = _ref.itemConf,
      onLoad = _ref.onLoad,
      onShow = _ref.onShow,
      onClose = _ref.onClose;

  var _refDialog = (0, _uiApi.useRef)(),
      _refInputWord = (0, _uiApi.useRef)(),
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      symbol: (0, _uiApi.getRefInputValue)(_refInputWord)
    });
  }, [type, source, itemConf, onLoad]),
      _hClose = (0, _uiApi.useCallback)(function () {
    var _dialogInst = (0, _uiApi.getRefValue)(_refDialog);

    if (_dialogInst) {
      _dialogInst.focusPrevEl();
    }

    onClose();
  }, [onClose]),
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    if (evt.keyCode === 13) {
      _hLoad();
    } else if (evt.keyCode === 27) {
      _hClose();
    }
  }, [_hLoad, _hClose]),
      TS = (0, _useTheme["default"])(_Dialog["default"]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
    ref: _refDialog,
    style: TS.R_DIALOG,
    browserCaptionStyle: TS.BROWSER_CAPTION,
    styleButton: TS.BT,
    caption: caption,
    isShow: isShow,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField["default"], {
      ref: _refInputWord,
      rootStyle: TS.INPUT_ROOT,
      caption: "Word (Default: Example)",
      initialValue: "Example"
    })
  });
};

var _default = DialogType1;
exports["default"] = _default;
//# sourceMappingURL=DialogType1.js.map