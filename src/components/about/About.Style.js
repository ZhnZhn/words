
const S = {
  SCROLL_DIV : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  DIV_WRAPPER : {
    paddingLeft: 12,
    paddingRight: 5,
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
  BLACK: {
    color: 'black'
  },
  PADDING_TOP: {
    paddingTop: 8
  },
  PROVIDER: {
    color: '#009ae5'
  }
}

const styleConfig = {
  themeName : undefined,
  style : undefined,
  createStyle : (R) => {
    return {
      CL_SCROLL_PANE: R.CL_SCROLL_PANE,
      //CL_GITHUB_ICON: R.CL_GITHUB_ICON,
      //CL_WORDS_ICON: R.CL_WORDS_ICON,
      ROOT : {
        ...R.BG
      },
      BROWSER_CAPTION: {
        ...R.BG_HEADER
      },
      ...S
    }
  }
}

export default styleConfig
