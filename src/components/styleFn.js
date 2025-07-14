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

export const CL_BT_FLAT_DIV = "bt-flat__div"
export const CL_SHOW_POPUP = "show-popup"

const _fCrStyle = propName => value => ({
  [propName]: value
})
, _crDisplayStyle = _fCrStyle("display")
export const S_BLOCK = _crDisplayStyle("block")
export const S_NONE = _crDisplayStyle("none")

export const crShowHide = (
  is,
  className,
  withoutAnimation,
  animationClassName
) => is
  ? [
      crCn(
        className,
        [!withoutAnimation, animationClassName || CL_SHOW_POPUP]
      ),
      S_BLOCK
    ]
  : [
      className,
      S_NONE
    ]

const CL_CONTAINER_SHOW_POPUP = `container ${CL_SHOW_POPUP}`
, S_INLINE_BLOCK = _crDisplayStyle("inline-block")

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
