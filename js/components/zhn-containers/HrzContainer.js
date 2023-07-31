"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_DIV = "hrz-container";
const _isInCont = (arrComps, comp) => {
  const {
      key
    } = comp,
    _max = arrComps.length;
  let i = 0;
  for (i; i < _max; i++) {
    if (arrComps[i].key === key) {
      return true;
    }
  }
  return false;
};
const HrzContainer = _ref => {
  let {
    className,
    usePane,
    addAction
  } = _ref;
  const [comps, setComps] = (0, _uiApi.useState)([]);
  usePane(option => {
    if (option && option.Comp) {
      setComps(prevComps => {
        const comp = option.Comp;
        return _isInCont(prevComps, comp) ? prevComps : [comp, ...prevComps];
      });
    }
  });
  return (0, _jsxRuntime.jsx)("div", {
    className: (0, _uiApi.crCn)(CL_DIV, className),
    children: comps
  });
};
var _default = HrzContainer;
exports.default = _default;
//# sourceMappingURL=HrzContainer.js.map