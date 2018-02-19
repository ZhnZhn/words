const S = {
  INPUT_ROOT: {
    width: '250px',
    marginLeft: '8px'
    //display: 'block'
  },
  BT_RAISED_ROOT: {
    position: 'relative',
    top: '12px',
    marginLeft: '16px'
  },
};

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle : (R, themeName) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      PANE_CAPTION: {
        ...R.BG_HEADER
      },
      SVG_RESIZE: {
        ...R.SVG_RESIZE
      },
      PANE_ROOT: {
        ...R.BG
      },
      INPUT_ROOT: {
        ...S.INPUT_ROOT
      },
      BT: {
        CL_RAISED_DIV: R.CL_BT_RAISED_DIV,
        RAISED_ROOT: {
          ...S.BT_RAISED_ROOT,
          ...R.BG_HEADER
        }
      },
    };
  }
}

export default styleConfig
