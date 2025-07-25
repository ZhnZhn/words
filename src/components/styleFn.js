const isArr = Array.isArray;

const _getCn = (
  arrOrStr
) => isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : ''
  : arrOrStr || '';

export const crCn = (
  arrOrStr1,
  arrOrStr2
) => {
  const _cl1 = _getCn(arrOrStr1)
  , _cl2 = _getCn(arrOrStr2);
  return _cl1
    ? _cl2 ? `${_cl1} ${_cl2}` : _cl1
    : _cl2 || void 0 ;
}

export const crStyle2 = (
  style1,
  style2
) => style2
 ? {...style1, ...style2}
 : style1;

export const CL_BT_FLAT_DIV = "bt-flat__div"
export const CL_SHOW_POPUP = "show-popup"
export const CL_POPUP_MENU = `popup-menu`

export const crUnderline = (
  className
) => crCn("underline", className)

const _fCrStyle = propName => value => ({
  [propName]: value
})
, _crDisplayStyle = _fCrStyle("display")
export const S_BLOCK = _crDisplayStyle("block")
export const S_NONE = _crDisplayStyle("none")
export const S_INLINE_BLOCK = _crDisplayStyle("inline-block")

export const crShowHide = (
  isShow,
  style
) => isShow
  ? style ? style : S_BLOCK
  : S_NONE

export const crShowPopup = (
  is,
  className
) => is
  ? [crCn(className, CL_SHOW_POPUP), S_BLOCK]
  : [className, S_NONE]

const CL_CONTAINER_SHOW_POPUP = `container ${CL_SHOW_POPUP}`
const _fCrShowHideIf = (showStyle) => (
  isShow,
  CL
) => isShow
? [
   showStyle,
   `${CL_CONTAINER_SHOW_POPUP} ${CL}`
  ]
: [S_NONE];

export const crShowHideIf = _fCrShowHideIf(S_BLOCK)
export const crShowHideInlineIf = _fCrShowHideIf(S_INLINE_BLOCK)

export const crVisibilityHidden = (
  isVisible
) => isVisible
  ? void 0
  : { visibility: 'hidden' }

export const crAbsoluteTopLeftStyle = (
  top,
  left,
  isRight,
  isBottom
) => ({
  position: 'absolute',
  [isBottom ? 'bottom' : 'top']: top,
  [isRight ? 'right': 'left']: left
})

const _crTransformTranslateX = (x) => ({
  transform: `matrix(1, 0, 0, 1, ${x}, 0)`
});
export const crSliderTransformStyle = (
  pageWidth,
  pageCurrent
) => _crTransformTranslateX(-1*pageWidth*(pageCurrent - 1) + 0)
