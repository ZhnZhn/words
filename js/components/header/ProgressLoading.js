"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ItemActions = require("../../flux/actions/ItemActions");
var _itemStore = require("../../flux/itemStore");
var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));
var _jsxRuntime = require("preact/jsx-runtime");
const COLOR_LOADING = '#2f7ed8',
  COLOR_FAILED = '#ed5813';
//, COMPLETE_TIMEOUT_MLS = 450;

const _crState = (completed, color) => [completed, color];
const ProgressLoading = () => {
  const [state, setState] = (0, _uiApi.useState)(() => _crState(0, COLOR_LOADING)),
    [completed, color] = state;
  (0, _itemStore.useLoading)(loading => {
    if (loading === _ItemActions.IAT_LOAD_ITEM_LOADING) {
      setState(_crState(35, COLOR_LOADING));
    } else if (loading === _ItemActions.IAT_LOAD_ITEM_COMPLETED) {
      setTimeout(() => setState(_crState(100, COLOR_LOADING)), 0);
    } else if (loading === _ItemActions.IAT_LOAD_ITEM_FAILED) {
      setState(_crState(100, COLOR_FAILED));
    }
  });
  return (0, _jsxRuntime.jsx)(_ProgressLine.default, {
    color: color,
    completed: completed
  });
};
const _isNotShouldRerender = () => true;
var _default = (0, _uiApi.memo)(ProgressLoading, _isNotShouldRerender);
exports.default = _default;
//# sourceMappingURL=ProgressLoading.js.map