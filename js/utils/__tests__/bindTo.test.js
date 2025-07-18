"use strict";

var _bindTo = require("../bindTo");
const _crTest = fn => () => {
  const add = (a, b) => a + b,
    add2 = fn(add, 2);
  expect(typeof add2).toBe("function");
  expect(add2(1)).toBe(3);
  expect(add2(2)).toBe(4);
  const sum = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return args.reduce((sum, nextValus) => sum + nextValus, 0);
    },
    sum10 = fn(sum, 10);
  expect(typeof sum10).toBe("function");
  expect(sum10(1, 2, 3)).toBe(16);
  expect(sum10(1, 2, 3, 4)).toBe(20);
};
describe("bindTo", () => {
  const fn = _bindTo.bindTo;
  test("should bind arguments to function", () => {
    _crTest(fn)();
  });
});
describe("safeBindTo", () => {
  const fn = _bindTo.safeBindTo;
  test("should safe bind arguments to function", () => {
    _crTest(fn);
  });
  test("should return void in edge cases", () => {
    expect(fn(void 0, 1)).toBe(undefined);
    expect(fn(null, 1)).toBe(undefined);
    expect(fn(false, 1)).toBe(undefined);
    expect(fn('str', 1)).toBe(undefined);
    expect(fn(0, 1)).toBe(undefined);
    expect(fn(NaN, 1)).toBe(undefined);
    expect(fn({}, 1)).toBe(undefined);
    expect(fn([], 1)).toBe(undefined);
  });
});
//# sourceMappingURL=bindTo.test.js.map