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
const CL_ABOUT = 'about';
const About = _ref => {
  let {
    id,
    usePane
  } = _ref;
  const [isShow, showAbout, closeAbout] = (0, _useBool.default)(true);
  usePane(pOption => {
    if (pOption.id === id) {
      showAbout();
    } else {
      closeAbout();
    }
  });
  const TS = (0, _useTheme.default)(_About.default),
    [_style, _className] = (0, _ContainerStyle.crShowHideIf)(isShow, CL_ABOUT);
  return (0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: _style,
    children: [(0, _jsxRuntime.jsx)(_Atoms.default.BrowserCaption, {
      caption: "About",
      onClose: closeAbout
    }), (0, _jsxRuntime.jsx)(_Atoms.default.ScrollPane, {
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
        }), (0, _jsxRuntime.jsx)(_IconLogoBar.default, {}), (0, _jsxRuntime.jsx)("p", {
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