"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));
var _MenuPart = _interopRequireDefault(require("./MenuPart"));
var _preact = require("preact");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BROWSER = {
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
const FN_NOOP = () => {},
  DF_MENU_MODEL = {},
  DF_STYLE_CONFIG = {};
const MenuParts = _ref => {
  let {
    styleConfig,
    menuModel,
    restProps
  } = _ref;
  const {
    menu,
    items = {}
  } = menuModel;
  return (menu || []).map((menuPart, index) => (0, _preact.createElement)(_MenuPart.default, {
    ...menuPart,
    key: index,
    hmItems: items,
    styleConfig: styleConfig,
    ...restProps
  }));
};
const DynamicMenuBrowser = _ref2 => {
  let {
    url,
    browserId,
    useBrowser,
    styleConfig: TS = DF_STYLE_CONFIG,
    caption,
    children,
    onError = FN_NOOP,
    ...restProps
  } = _ref2;
  const [menuModel, setMenuModel] = (0, _uiApi.useState)(DF_MENU_MODEL),
    [isShow, openMenuBrowser, closeMenuBrowser] = (0, _useBool.default)(),
    [isLoading, /*eslint-disable no-unused-vars */
    setLoading, /*eslint-enable no-unused-vars */
    setNotLoading] = (0, _useBool.default)(true),
    [isLoadingFailed, setLoadingFailed] = (0, _useBool.default)();
  useBrowser(browser => {
    if (browser && browser.id === browserId) {
      openMenuBrowser();
    }
  });

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    fetch(url).then(response => {
      const {
        status
      } = response;
      if (status >= 200 && status < 400) {
        return response.json();
      } else {
        throw {
          status,
          url
        };
      }
    }).then(json => {
      setNotLoading();
      setMenuModel(json);
    }).catch(err => {
      setLoadingFailed();
      setNotLoading();
      onError(err);
    });
  }, []);
  // url, onError
  // setNotLoading, setLoadingFailed
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)(_Atoms.default.Browser, {
    isShow: isShow,
    style: S_BROWSER,
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.BrowserCaption, {
      caption: caption,
      onClose: closeMenuBrowser
    }), isLoading && (0, _jsxRuntime.jsx)(_Atoms.default.SpinnerLoading, {
      style: S_SPINNER_LOADING
    }), isLoadingFailed && (0, _jsxRuntime.jsx)(_Atoms.default.SpinnerLoading, {
      style: S_SPINNER_LOADING,
      isFailed: true
    }), (0, _jsxRuntime.jsxs)(_Atoms.default.ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S_SCROLL_PANE,
      children: [(0, _jsxRuntime.jsx)(MenuParts, {
        styleConfig: TS,
        menuModel: menuModel,
        restProps: restProps
      }), children]
    })]
  });
};
var _default = DynamicMenuBrowser;
exports.default = _default;
//# sourceMappingURL=DynamicMenuBrowser.js.map