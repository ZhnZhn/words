"use strict";

exports.__esModule = true;
exports.crMenuSubItem = exports.crMenuModelProps = exports.crMenuItem = void 0;
const CL_ROW = 'menu-more__item not-selected';
const crMenuModelProps = function (pageWidth, maxPages) {
  if (maxPages === void 0) {
    maxPages = 1;
  }
  return {
    pageWidth,
    maxPages,
    titleCl: CL_ROW,
    itemCl: CL_ROW
  };
};
exports.crMenuModelProps = crMenuModelProps;
const crMenuSubItem = (id, name) => ({
  type: 'sub',
  id,
  name
});
exports.crMenuSubItem = crMenuSubItem;
const crMenuItem = function (name, onClick, isClose, isInitial) {
  if (isClose === void 0) {
    isClose = !0;
  }
  return {
    name,
    onClick,
    isClose,
    isInitial
  };
};
exports.crMenuItem = crMenuItem;
//# sourceMappingURL=menuModelFn.js.map