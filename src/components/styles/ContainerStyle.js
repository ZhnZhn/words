const CL_CONTAINER_SHOW_POPUP = 'container show-popup'
, S_BLOCK = { display: 'block' }
, S_INLINE_BLOCK = { display: 'inline-block' }
, S_NONE = { display: 'none' }

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
