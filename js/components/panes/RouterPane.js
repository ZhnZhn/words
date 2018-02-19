'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaneType = require('./PaneType1');

var _PaneType2 = _interopRequireDefault(_PaneType);

var _Word = require('../items/word/Word');

var _Word2 = _interopRequireDefault(_Word);

var _InputWord = require('./InputWord');

var _InputWord2 = _interopRequireDefault(_InputWord);

var _InputRandom = require('./InputRandom');

var _InputRandom2 = _interopRequireDefault(_InputRandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = {
  DF: {
    Pane: _PaneType2.default,
    Input: _InputWord2.default,
    Item: _Word2.default
  },
  R: {
    Pane: _PaneType2.default,
    Input: _InputRandom2.default,
    Item: _Word2.default
  }
};

var RouterPane = {
  getElement: function getElement(type) {
    return R[type] || R.DF;
  }
};

exports.default = RouterPane;
//# sourceMappingURL=D:\_Dev\_React\_Words\js\components\panes\RouterPane.js.map