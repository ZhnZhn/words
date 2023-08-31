const _S_CONTAINER = {
  position: 'relative',
  backgroundColor: '#4d4d4d',
  height: 'calc(100vh - 71px)',
  minHeight: 500,
  marginLeft: 8,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderRadius: 4
};

export const S_PANE_TYPE1 = {  
  padding : '0 0 3px 0',
  overflow: 'hidden'
}

export const S_BROWSER = {
  ..._S_CONTAINER,
  flexShrink: 0,
  padding: '0px 3px 35px 0px',
  minWidth: 270,
  maxWidth: 400
}

export const S_ABOUT = {
  ..._S_CONTAINER,
  padding: 0,
  paddingBottom: 35,
  width: 390,
  minWidth: 300
}
