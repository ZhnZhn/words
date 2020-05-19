
const S = {
  BROWSER_CAPTION: {
    paddingTop: 5,
    color: '#303030',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: 0
  },
  BT_RAISED_ROOT: {
    marginRight: 2,
    marginLeft: 2
  },
  INPUT_ROOT: {
    width: 280,
    display: 'block'
  }
}

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (R) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      R_DIALOG: {
        ...R.R_DIALOG
      },
      CHB_STROKE: R.R_DIALOG.backgroundColor,
      BROWSER_CAPTION: {
        ...S.BROWSER_CAPTION,
        ...R.BG_HEADER
      },
      INPUT_ROOT: {
        ...S.INPUT_ROOT
      },
      BT: {
        CL_RAISED_DIV: R.CL_BT_RAISED_DIV,
        RAISED_ROOT: {
          ...S.BT_RAISED_ROOT,
          ...R.BG_HEADER
        },
        FLAT_ROOT: {
          ...R.BT_FLAT
        },
      },
      SELECT: {
        CL_ITEM: R.CL_SELECT_ITEM,
        ITEM: {
          ...R.M_SELECT_ITEM
        },
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
