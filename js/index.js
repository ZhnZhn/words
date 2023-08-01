"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _uiApi = require("./components/uiApi");
var _AppActions = _interopRequireDefault(require("./flux/actions/AppActions"));
var _AppWords = _interopRequireDefault(require("./components/AppWords"));
var _jsxRuntime = require("preact/jsx-runtime");
(0, _uiApi.render)((0, _jsxRuntime.jsx)(_AppWords.default, {
  action: _AppActions.default
}), document.getElementById('app'));
//# sourceMappingURL=index.js.map