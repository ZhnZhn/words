
const S = {
  SCROLL_DIV : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  DIV_WRAPPER : {
    paddingLeft: '12px',
    paddingRight: '5px',
    lineHeight : 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  DIV_TEXT: {
    lineHeight: 1.8
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  APP_TITLE: {
    color: '#80c040'
  },
  STEP: {
    marginTop: '3px'
  },
  BLACK: {
    color: 'black'
  },
  MARGIN_TOP: {
    marginTop: '8px'
  },
  PROVIDER: {
    color: '#009AE5'
  }
}

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle : (R) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      CL_GITHUB_ICON: R.CL_GITHUB_ICON,
      CL_WORDS_ICON: R.CL_WORDS_ICON,
      ROOT : {
        ...R.BG
      },
      BROWSER_CAPTION: {
        ...R.BG_HEADER
      },
      ICON: {
        ...R.ICON
      },
      ICON_GITHUB: {
        ...R.ICON_GITHUB
      },
      ...S
    }
  }
}

export default styleConfig
