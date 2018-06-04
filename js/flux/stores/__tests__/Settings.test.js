'use strict';

var _Settings = require('../Settings');

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isApiKeyAllow = _Settings2.default.isApiKeyAllow;


describe("isApiKeyAllow", function () {
  var fn = isApiKeyAllow;
  test('should return false for all X', function () {
    expect(fn('XXX')).toBe(false);
    expect(fn('XXXXXXXX')).toBe(false);
    expect(fn('X')).toBe(false);
  });

  test('should return true for one not X', function () {
    expect(fn('XXXy')).toBe(true);
    expect(fn('XXXXXyXXX')).toBe(true);
    expect(fn('abcd')).toBe(true);
  });
});
//# sourceMappingURL=Settings.test.js.map