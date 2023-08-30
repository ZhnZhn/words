const _crBgColorStyle = color => ({
  backgroundColor: color
});

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: (R, themeName) => {
    let _paneRoot;
    switch(themeName){
      case 'WHITE':
        _paneRoot = _crBgColorStyle('rgb(235, 241, 245)')
        break;
      case 'SAND':
        _paneRoot = _crBgColorStyle('#e8e0cb')
        break;
      default:
    }
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      PANE_CAPTION: {
        ...R.BG_HEADER
      },
      SVG_RESIZE: {
        ...R.SVG_RESIZE
      },
      BG_COLOR: {
        ..._paneRoot
      },
      BT: {
        CL_FLAT_DIV: R.CL_BT_FLAT_DIV
      },
    };
  }
}

export default styleConfig
