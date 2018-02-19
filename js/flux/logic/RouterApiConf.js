'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Settings = require('../stores/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _Adapter = require('../../adapters/Adapter');

var _Adapter2 = _interopRequireDefault(_Adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MSG_ERR_TAIL = 'API key is not set. \nPlease, set in Settings Dialog [s]\nand try again.';
var MSG_ERR_DF = 'Unknow data API provider';

var RouterApiConf = {
  getApiConf: function getApiConf(id) {
    switch (id) {
      case 'WD':
        return {
          apiKey: _Settings2.default.getKey('wordsApi'),
          api: _Adapter2.default.Words.api,
          adapter: _Adapter2.default.Words.adapter,
          msgErr: 'WordsApi ' + MSG_ERR_TAIL
        };
      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
};

exports.default = RouterApiConf;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\logic\RouterApiConf.js.map