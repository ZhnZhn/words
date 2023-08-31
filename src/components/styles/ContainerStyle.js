const CL_CONTAINER_SHOW_POPUP = 'container show-popup'

export const S_PANE_TYPE1 = {
  padding : '0 0 3px 0',
  overflow: 'hidden'
}

export const S_BROWSER = {
  flexShrink: 0,
  padding: '0px 3px 35px 0px',
  minWidth: 270,
  maxWidth: 400
}

export const S_ABOUT = {
  padding: 0,
  paddingBottom: 35,
  width: 390,
  minWidth: 300
}
const S_BLOCK = { display: 'block' }
, S_INLINE_BLOCK = { display: 'inline-block' }
, S_NONE = { display: 'none' }

export const crShowHideIf = (
  isShow,
  isInlineBlock
) => isShow
  ? [
     isInlineBlock ? S_INLINE_BLOCK : S_BLOCK,
     CL_CONTAINER_SHOW_POPUP
    ]
  : [S_NONE];
