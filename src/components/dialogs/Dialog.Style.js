
const S_BROWSER_CAPTION = {
  color: '#303030',
  paddingTop: 5,
  backgroundColor: '#3f5178',
  textAlign: 'center',
  fontSize: '18px',
  marginBottom: 0
}
, S_INPUT_ROOT = {
  display: 'block',
  width: 280
};

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
        ...S_BROWSER_CAPTION,
        ...R.BG_HEADER
      },
      INPUT_ROOT: {
        ...S_INPUT_ROOT
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
