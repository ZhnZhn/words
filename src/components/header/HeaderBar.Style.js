const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle: (R) => {
    return {
      CL_QUERY_ITEM: R.CL_QUERY_ITEM,
      HEADER: {
        ...R.BG
      },
      PANE: {
        ...R.BG
      },
      BT: {
        FLAT_ROOT: {
          ...R.BT_FLAT          
        },
        CL_FLAT_DIV: R.CL_BT_FLAT_DIV
      }
    }
  }
}

export default styleConfig
