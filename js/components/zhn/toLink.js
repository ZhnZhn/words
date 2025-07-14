"use strict";

exports.__esModule = true;
exports.default = void 0;
const toLink = (href, isHttp) => {
  const protocol = (href || '').split('://')[0];
  return protocol === 'https' || isHttp && protocol === 'http' ? href : void 0;
};
var _default = exports.default = toLink;
//# sourceMappingURL=toLink.js.map