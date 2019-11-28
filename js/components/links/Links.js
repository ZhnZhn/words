'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withProps = require('../hoc/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _Link = require('../zhn-atoms/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WordsApi = (0, _withProps2.default)({
  title: "WordsApi",
  href: "https://www.wordsapi.com/"
})(_Link2.default);

var Link = {
  WordsApi: WordsApi
};

exports.default = Link;
//# sourceMappingURL=Links.js.map