"use strict";

exports.__esModule = true;
exports.default = void 0;
const _crItemLists = () => [{
    caption: 'List1'
  }, {
    caption: 'List2'
  }, {
    caption: 'List3'
  }],
  _crItemGroup = caption => ({
    caption,
    lists: _crItemLists()
  });
const WatchDefault = {
  groups: [_crItemGroup('Group1'), _crItemGroup('Group2'), _crItemGroup('Group3')]
};
var _default = WatchDefault;
exports.default = _default;
//# sourceMappingURL=WatchDefault.js.map