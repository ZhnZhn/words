const styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: (R) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      CL_ROW: R.CL_ROW_ITEM,

      BROWSER: {
        ...R.BG
      },
      OPEN_CLOSE: {
        ...R.BG
      },
      BADGE: {
        ...R.BG_HEADER
      }
    };
  }
}

export default styleConfig
