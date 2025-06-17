"use strict";

exports.__esModule = true;
exports.crShowHide = exports.crCn = exports.S_NONE = exports.S_BLOCK = exports.CL_SHOW_POPUP = void 0;
const isArr = Array.isArray;
const _getCn = arrOrStr => isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = (arrOrStr1, arrOrStr2) => {
  const _cl1 = _getCn(arrOrStr1),
    _cl2 = _getCn(arrOrStr2);
  return _cl1 ? _cl2 ? `${_cl1} ${_cl2}` : _cl1 : _cl2 || void 0;
};
exports.crCn = crCn;
const CL_SHOW_POPUP = exports.CL_SHOW_POPUP = "show-popup";
const _fCrStyle = propName => value => ({
    [propName]: value
  }),
  _crDisplayStyle = _fCrStyle("display");
const S_BLOCK = exports.S_BLOCK = _crDisplayStyle("block");
const S_NONE = exports.S_NONE = _crDisplayStyle("none");
const crShowHide = (is, className, withoutAnimation, animationClassName) => is ? [crCn(className, [!withoutAnimation, animationClassName || CL_SHOW_POPUP]), S_BLOCK] : [className, S_NONE];
exports.crShowHide = crShowHide;
//# sourceMappingURL=styleFn.js.map