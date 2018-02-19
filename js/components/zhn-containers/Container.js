'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BrowserContainer = require('./BrowserContainer');

var _BrowserContainer2 = _interopRequireDefault(_BrowserContainer);

var _HrzContainer = require('./HrzContainer');

var _HrzContainer2 = _interopRequireDefault(_HrzContainer);

var _WrapperContainer = require('./WrapperContainer');

var _WrapperContainer2 = _interopRequireDefault(_WrapperContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = {
  Browser: _BrowserContainer2.default,
  Hrz: _HrzContainer2.default,
  Wrapper: _WrapperContainer2.default
};

exports.default = Container;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\zhn-containers\Container.js.map