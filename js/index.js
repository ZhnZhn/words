"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _uiApi = require("./components/uiApi");
var _Store = _interopRequireDefault(require("./flux/stores/Store"));
var _AppActions = _interopRequireDefault(require("./flux/actions/AppActions"));
var _AppWords = _interopRequireDefault(require("./components/AppWords"));
var _jsxRuntime = require("react/jsx-runtime");
(0, _uiApi.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppWords.default, {
  store: _Store.default,
  action: _AppActions.default
}), document.getElementById('app'));
//# sourceMappingURL=index.js.map