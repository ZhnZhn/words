"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Settings = _interopRequireDefault(require("../stores/Settings"));

var _Adapter = _interopRequireDefault(require("../../adapters/Adapter"));

var MSG_ERR_TAIL = 'API key is not set. \nPlease, set in Settings Dialog [s]\nand try again.';
var MSG_ERR_DF = 'Unknow data API provider';
var RouterApiConf = {
  getApiConf: function getApiConf(id) {
    switch (id) {
      case 'WD':
        return {
          apiKey: _Settings["default"].getKey('wordsApi'),
          api: _Adapter["default"].Words.api,
          adapter: _Adapter["default"].Words.adapter,
          msgErr: "WordsApi's " + MSG_ERR_TAIL
        };

      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
};
var _default = RouterApiConf;
exports["default"] = _default;
//# sourceMappingURL=RouterApiConf.js.map