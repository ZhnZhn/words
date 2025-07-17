"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _useEffectTimeout = _interopRequireDefault(require("../hooks/useEffectTimeout"));
const useCanBeHidden = props => {
  const [hasBeenHidden, setHasBeenHidden] = (0, _uiApi.useState)(!1);
  (0, _useEffectTimeout.default)(() => setHasBeenHidden(!0), 500, [props.canBeHidden], props.canBeHidden);
  if (!props.canBeHidden) {
    setHasBeenHidden(!1);
  }
  return hasBeenHidden ? _styleFn.S_NONE : _styleFn.S_BLOCK;
};
var _default = exports.default = useCanBeHidden;
//# sourceMappingURL=useCanBeHidden.js.map