

const styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: (R) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      CL_ROW: R.CL_ROW_NEWS,

      BROWSER: {
        ...R.BG
      },
      OPEN_CLOSE: {
        ...R.BG
      },
      BROWSER_CAPTION: {
        ...R.BG_HEADER
      },
      ITEM: {
        borderBottom: "1px solid #9e9e9e",
      },
      BADGE: {
        ...R.BG_HEADER
      }
    };
  }
}

export default styleConfig
