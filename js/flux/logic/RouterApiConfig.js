'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = require('../stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _Adapter = require('../../adapters/Adapter');

var _Adapter2 = _interopRequireDefault(_Adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
var MSG_ERR_DF = 'Unknow news API provider';

var RouterApiConf = {
  getApiConf: function getApiConf(id) {
    switch (id) {
      case 'WD':
        return {
          apiKey: _Store2.default.getWordsKey(),
          //api: Api.News,
          api: _Adapter2.default.Words.api,
          //adapter: Adapter.News,
          msgErr: 'NewsApi ' + MSG_ERR_TAIL
        };
      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
};

exports.default = RouterApiConf;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\flux\logic\RouterApiConfig.js.map