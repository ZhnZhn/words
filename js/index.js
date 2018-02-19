'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Store = require('./flux/stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _AppActions = require('./flux/actions/AppActions');

var _AppActions2 = _interopRequireDefault(_AppActions);

var _ComponentActions = require('./flux/actions/ComponentActions');

var _LoadingActions = require('./flux/actions/LoadingActions');

var _AppWords = require('./components/AppWords');

var _AppWords2 = _interopRequireDefault(_AppWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appProps = {
  store: _Store2.default, action: _AppActions2.default, CAT: _ComponentActions.T, LPT: _LoadingActions.T
};

(0, _reactDom.render)(_react2.default.createElement(_AppWords2.default, appProps), document.getElementById('app'));
//# sourceMappingURL=D:\_Dev\_React\_Words\js\index.js.map