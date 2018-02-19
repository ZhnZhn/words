
const S = {
  BROWSER_CAPTION: {
    //padding: '5px',
    paddingTop: '5px',
    //color: '#9e9e9e',
    color: '#303030',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '0px'
  },
  BT_RAISED_ROOT: {
    marginRight: '2px',
    marginLeft: '2px'
  },
  INPUT_ROOT: {
    width: '280px',
    display: 'block'
  }
}

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle : (R) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      R_DIALOG: {
        ...R.R_DIALOG
      },
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
          width: '280px'
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
