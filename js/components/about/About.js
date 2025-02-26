"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));
var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));
var _Links = _interopRequireDefault(require("../links/Links"));
var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));
var _ContainerStyle = require("../styles/ContainerStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_ABOUT = 'about',
  S_SCROLL_DIV = {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  S_DIV_WRAPPER = {
    paddingLeft: 12,
    paddingRight: 5,
    lineHeight: 1.6,
    fontWeight: 'bold'
  },
  S_APP_TITLE = {
    color: '#80c040'
  },
  S_BLACK = {
    color: 'black'
  },
  S_PADDING_TOP = {
    paddingTop: 8
  };
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
  const [_style, _className] = (0, _ContainerStyle.crShowHideIf)(isShow, CL_ABOUT);
  return (0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: _style,
    children: [(0, _jsxRuntime.jsx)(_BrowserCaption.default, {
      caption: "About",
      onClose: closeAbout
    }), (0, _jsxRuntime.jsx)(_ScrollPane.default, {
      style: S_SCROLL_DIV,
      children: (0, _jsxRuntime.jsxs)("div", {
        style: S_DIV_WRAPPER,
        children: [(0, _jsxRuntime.jsxs)("p", {
          children: [(0, _jsxRuntime.jsx)("span", {
            style: S_APP_TITLE,
            children: "Words"
          }), " is web app, RESTful client."]
        }), (0, _jsxRuntime.jsxs)("p", {
          children: ["Words data provider ", (0, _jsxRuntime.jsx)(_Links.default.WordsApi, {}), " via ", (0, _jsxRuntime.jsx)(_Links.default.RapidApi, {})]
        }), (0, _jsxRuntime.jsx)("p", {
          style: S_PADDING_TOP,
          children: "Provider's API Key is required for using app."
        }), (0, _jsxRuntime.jsx)("p", {
          children: "API Key can be set in Settings Dialog [s]."
        }), (0, _jsxRuntime.jsx)(_IconLogoBar.default, {}), (0, _jsxRuntime.jsx)("p", {
          style: S_BLACK,
          children: "*Logos Fair Use."
        })]
      })
    })]
  });
};
var _default = exports.default = About;
//# sourceMappingURL=About.js.map