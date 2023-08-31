const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (R) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,

      SELECT: {
        CL_ITEM: R.CL_SELECT_ITEM,
        ROOT: {
          width: 280
        },
        MODAL_PANE: {
          ...R.BG,
        }
      },
      TAB: {
        ...R.TAB
      },
      INPUT: {
        ...R.INPUT
      }
    };
  }
}

export default styleConfig
