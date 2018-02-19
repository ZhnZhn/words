'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DialogType = require('./DialogType1');

var _DialogType2 = _interopRequireDefault(_DialogType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = {
  DF: _DialogType2.default,
  DialogType1: _DialogType2.default
};

var RouterDialog = {
  getElement: function getElement(type) {
    return R[type] || R.DF;
  }
};

exports.default = RouterDialog;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\dialogs\RouterDialog.js.map