"use strict";

exports.__esModule = true;
exports.crVisibilityHidden = exports.crStyle2 = exports.crSliderTransformStyle = exports.crShowPopup = exports.crShowHideInlineIf = exports.crShowHideIf = exports.crCn = exports.crAbsoluteTopLeftStyle = exports.S_NONE = exports.S_INLINE_BLOCK = exports.S_BLOCK = exports.CL_SHOW_POPUP = exports.CL_POPUP_MENU = exports.CL_BT_FLAT_DIV = void 0;
const isArr = Array.isArray;
const _getCn = arrOrStr => isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = (arrOrStr1, arrOrStr2) => {
  const _cl1 = _getCn(arrOrStr1),
    _cl2 = _getCn(arrOrStr2);
  return _cl1 ? _cl2 ? `${_cl1} ${_cl2}` : _cl1 : _cl2 || void 0;
};
exports.crCn = crCn;
const crStyle2 = (style1, style2) => style2 ? {
  ...style1,
  ...style2
} : style1;
exports.crStyle2 = crStyle2;
const CL_BT_FLAT_DIV = exports.CL_BT_FLAT_DIV = "bt-flat__div";
const CL_SHOW_POPUP = exports.CL_SHOW_POPUP = "show-popup";
const CL_POPUP_MENU = exports.CL_POPUP_MENU = `popup-menu`;
const _fCrStyle = propName => value => ({
    [propName]: value
  }),
  _crDisplayStyle = _fCrStyle("display");
const S_BLOCK = exports.S_BLOCK = _crDisplayStyle("block");
const S_NONE = exports.S_NONE = _crDisplayStyle("none");
const S_INLINE_BLOCK = exports.S_INLINE_BLOCK = _crDisplayStyle("inline-block");
const crShowPopup = (is, className) => is ? [crCn(className, CL_SHOW_POPUP), S_BLOCK] : [className, S_NONE];
exports.crShowPopup = crShowPopup;
const CL_CONTAINER_SHOW_POPUP = `container ${CL_SHOW_POPUP}`;
const _fCrShowHideIf = showStyle => (isShow, CL) => isShow ? [showStyle, `${CL_CONTAINER_SHOW_POPUP} ${CL}`] : [S_NONE];
const crShowHideIf = exports.crShowHideIf = _fCrShowHideIf(S_BLOCK);
const crShowHideInlineIf = exports.crShowHideInlineIf = _fCrShowHideIf(S_INLINE_BLOCK);
const crVisibilityHidden = isVisible => isVisible ? void 0 : {
  visibility: 'hidden'
};
exports.crVisibilityHidden = crVisibilityHidden;
const crAbsoluteTopLeftStyle = (top, left, isRight, isBottom) => ({
  position: 'absolute',
  [isBottom ? 'bottom' : 'top']: top,
  [isRight ? 'right' : 'left']: left
});
exports.crAbsoluteTopLeftStyle = crAbsoluteTopLeftStyle;
const _crTransformTranslateX = x => ({
  transform: `matrix(1, 0, 0, 1, ${x}, 0)`
});
const crSliderTransformStyle = (pageWidth, pageCurrent) => _crTransformTranslateX(-1 * pageWidth * (pageCurrent - 1) + 0);
exports.crSliderTransformStyle = crSliderTransformStyle;
//# sourceMappingURL=styleFn.js.map