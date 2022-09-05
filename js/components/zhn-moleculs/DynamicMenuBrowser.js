"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useBool4 = _interopRequireDefault(require("../hooks/useBool"));

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["store", "url", "showAction", "browserId", "styleConfig", "caption", "children", "onError"];
var S_BROWSER = {
  paddingRight: 0
},
    S_SCROLL_PANE = {
  overflowY: 'auto',
  height: '92%',
  paddingRight: 10
},
    S_SPINNER_LOADING = {
  position: 'relative',
  display: 'block',
  width: 32,
  height: 32,
  margin: '0 auto',
  marginTop: 32,
  textAlign: 'middle'
};

var FN_NOOP = function FN_NOOP() {},
    DF_MENU_MODEL = {},
    DF_STYLE_CONFIG = {};

var MenuParts = function MenuParts(_ref) {
  var styleConfig = _ref.styleConfig,
      menuModel = _ref.menuModel,
      restProps = _ref.restProps;
  var menu = menuModel.menu,
      _menuModel$items = menuModel.items,
      items = _menuModel$items === void 0 ? {} : _menuModel$items;
  return (menu || []).map(function (menuPart, index) {
    return /*#__PURE__*/(0, _react.createElement)(_MenuPart["default"], (0, _extends2["default"])({}, menuPart, {
      key: index,
      hmItems: items,
      styleConfig: styleConfig
    }, restProps));
  });
};

var DynamicMenuBrowser = function DynamicMenuBrowser(_ref2) {
  var store = _ref2.store,
      url = _ref2.url,
      showAction = _ref2.showAction,
      browserId = _ref2.browserId,
      _ref2$styleConfig = _ref2.styleConfig,
      TS = _ref2$styleConfig === void 0 ? DF_STYLE_CONFIG : _ref2$styleConfig,
      caption = _ref2.caption,
      children = _ref2.children,
      _ref2$onError = _ref2.onError,
      onError = _ref2$onError === void 0 ? FN_NOOP : _ref2$onError,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded);

  var _useState = (0, _uiApi.useState)(DF_MENU_MODEL),
      menuModel = _useState[0],
      setMenuModel = _useState[1],
      _useBool = (0, _useBool4["default"])(),
      isShow = _useBool[0],
      openMenuBrowser = _useBool[1],
      closeMenuBrowser = _useBool[2],
      _useBool2 = (0, _useBool4["default"])(true),
      isLoading = _useBool2[0],

  /*eslint-disable no-unused-vars */
  setLoading = _useBool2[1],

  /*eslint-enable no-unused-vars */
  setNotLoading = _useBool2[2],
      _useBool3 = (0, _useBool4["default"])(),
      isLoadingFailed = _useBool3[0],
      setLoadingFailed = _useBool3[1];

  (0, _useListen["default"])(store, function (actionType, id) {
    if (actionType === showAction && id === browserId) {
      openMenuBrowser();
    }
  });
  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(function () {
    fetch(url).then(function (response) {
      var status = response.status;

      if (status >= 200 && status < 400) {
        return response.json();
      } else {
        throw {
          status: status,
          url: url
        };
      }
    }).then(function (json) {
      setNotLoading();
      setMenuModel(json);
    })["catch"](function (err) {
      setLoadingFailed();
      setNotLoading();
      onError(err);
    });
  }, []); // url, onError
  // setNotLoading, setLoadingFailed

  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Atoms["default"].Browser, {
    isShow: isShow,
    style: (0, _extends2["default"])({}, S_BROWSER, TS.BROWSER),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].BrowserCaption, {
      rootStyle: TS.BROWSER_CAPTION,
      caption: caption,
      onClose: closeMenuBrowser
    }), isLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].SpinnerLoading, {
      style: S_SPINNER_LOADING
    }), isLoadingFailed && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Atoms["default"].SpinnerLoading, {
      style: S_SPINNER_LOADING,
      isFailed: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Atoms["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S_SCROLL_PANE,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(MenuParts, {
        styleConfig: TS,
        menuModel: menuModel,
        restProps: restProps
      }), children]
    })]
  });
};

var _default = DynamicMenuBrowser;
exports["default"] = _default;
//# sourceMappingURL=DynamicMenuBrowser.js.map