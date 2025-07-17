"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useFocus = require("../hooks/useFocus");
const useFocusTrap = props => {
  const _refFirstItem = (0, _uiApi.useRef)(),
    _refLastItem = (0, _uiApi.useRef)(),
    _getRefItem = index => index === 0 && !props.title ? _refFirstItem : index === props.items.length - 1 ? _refLastItem : void 0;
  (0, _useFocus.useAsyncFocusFirstItemIf)(props.isVisible, _refFirstItem);
  return [_refFirstItem, _refLastItem, _getRefItem];
};
var _default = exports.default = useFocusTrap;
//# sourceMappingURL=useFocusTrap.js.map