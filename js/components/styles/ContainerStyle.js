'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _crBase = function _crBase() {
  return {
    position: 'relative',
    backgroundColor: '#4d4d4d',
    height: 'calc(100vh - 71px)',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderRadius: '4px'
  };
};

var ContainerStyle = {
  BROWSER_ROOT: (0, _extends3.default)({}, _crBase(), {
    flexShrink: 0,
    marginLeft: '10px',
    padding: '0px 3px 35px 0px',
    minWidth: '270px',
    maxWidth: '400px',
    minHeight: '500px'
  }),
  ABOUT_ROOT: (0, _extends3.default)({}, _crBase(), {
    marginLeft: '16px',
    padding: '0px',
    paddingBottom: '35px',
    width: '380px',
    minWidth: '300px',
    minHeight: '500px'
  })
};

exports.default = ContainerStyle;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\styles\ContainerStyle.js.map