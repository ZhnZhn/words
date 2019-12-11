"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _Store = _interopRequireDefault(require("./flux/stores/Store"));

var _AppActions = _interopRequireDefault(require("./flux/actions/AppActions"));

var _ComponentActions = require("./flux/actions/ComponentActions");

var _LoadingActions = require("./flux/actions/LoadingActions");

var _AppWords = _interopRequireDefault(require("./components/AppWords"));

var appProps = {
  store: _Store["default"],
  action: _AppActions["default"],
  CAT: _ComponentActions.T,
  LPT: _LoadingActions.T
};
(0, _reactDom.render)(_react["default"].createElement(_AppWords["default"], appProps), document.getElementById('app'));
//# sourceMappingURL=index.js.map