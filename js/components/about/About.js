"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useTheme = _interopRequireDefault(require("../hoc/useTheme"));
var _About = _interopRequireDefault(require("./About.Style"));
var _Atoms = _interopRequireDefault(require("../zhn-atoms/Atoms"));
var _Links = _interopRequireDefault(require("../links/Links"));
var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));
var _ContainerStyle = require("../styles/ContainerStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SHOW = "show-popup";
const About = _ref => {
  let {
    useAbout
  } = _ref;
  const [isShow, showAbout, closeAbout] = (0, _useBool.default)(true);
  useAbout(about => {
    if (about.is) {
      showAbout();
    } else {
      closeAbout();
    }
  });
  const TS = (0, _useTheme.default)(_About.default),
    [_style, _className] = isShow ? [TS.BLOCK, CL_SHOW] : [TS.NONE];
  return (0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: {
      ..._ContainerStyle.S_ABOUT,
      ..._style,
      ...TS.ROOT
    },
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.BrowserCaption, {
      rootStyle: TS.BROWSER_CAPTION,
      caption: "About",
      onClose: closeAbout
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: TS.SCROLL_DIV,
      children: (0, _jsxRuntime.jsxs)("div", {
        style: TS.DIV_WRAPPER,
        children: [(0, _jsxRuntime.jsxs)("div", {
          style: TS.DIV_TEXT,
          children: [(0, _jsxRuntime.jsxs)("p", {
            children: [(0, _jsxRuntime.jsx)("span", {
              style: TS.APP_TITLE,
              children: "Words"
            }), " is web app, RESTful client."]
          }), (0, _jsxRuntime.jsxs)("p", {
            children: ["Words data provider ", (0, _jsxRuntime.jsx)(_Links.default.WordsApi, {}), " via ", (0, _jsxRuntime.jsx)(_Links.default.RapidApi, {})]
          }), (0, _jsxRuntime.jsx)("p", {
            style: TS.PADDING_TOP,
            children: "Provider's API Key is required for using app."
          }), (0, _jsxRuntime.jsx)("p", {
            children: "API Key can be set in Settings Dialog [s]."
          })]
        }), (0, _jsxRuntime.jsx)(_IconLogoBar.default, {
          iconStyle: TS.ICON,
          iconGitHubStyle: TS.ICON_GITHUB
        }), (0, _jsxRuntime.jsx)("p", {
          style: TS.BLACK,
          children: "*Logos Fair Use."
        })]
      })
    })]
  });
};
var _default = About;
exports.default = _default;
//# sourceMappingURL=About.js.map