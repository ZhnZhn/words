'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ItemActions = require('../actions/ItemActions');

var _ItemActions2 = _interopRequireDefault(_ItemActions);

var _WatchActions = require('../actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _ComponentSlice = require('./ComponentSlice');

var _ComponentSlice2 = _interopRequireDefault(_ComponentSlice);

var _ItemSlice = require('./ItemSlice');

var _ItemSlice2 = _interopRequireDefault(_ItemSlice);

var _WithLoading = require('./WithLoading');

var _WithLoading2 = _interopRequireDefault(_WithLoading);

var _WatchListSlice = require('../watch-list/WatchListSlice');

var _WatchListSlice2 = _interopRequireDefault(_WatchListSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = _reflux2.default.createStore((0, _extends3.default)({
  listenables: [_ComponentActions2.default, _ItemActions2.default, _WatchActions2.default],

  init: function init() {
    this.initWatchList();
  }
}, _ComponentSlice2.default, _ItemSlice2.default, _WatchListSlice2.default, _WithLoading2.default));

exports.default = Store;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\stores\Store.js.map