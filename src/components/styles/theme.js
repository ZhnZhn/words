
const P = {};
const TH_GREY = {
  C_ICON: '#4d4d4d',
  BG_BODY: '#808080',
  BG: '#4d4d4d',
  //BG_HEADER: '#3a6799',
  BG_HEADER: '#3270b4',
  BG_ITEM_HEADER: '#404040',
  BG_INPUT: '#e1e1cb',
  C_M_SELECT_ITEM: 'white'
}
const TH_WHITE = {
  C_ICON: 'grey',
  BG_BODY: 'darkgrey',
  BG: '#ebf1f5',
  BG_HEADER: '#0096c8',
  BG_ITEM_HEADER: '#e6ecf0',
  BG_INPUT: '#e1e1cb',
  C_M_SELECT_ITEM: '#303030'
};
const TH_SAND = {
  C_ICON: '#e8e0cb',
  BG_BODY: 'darkgrey',
  BG: '#e8e0cb',
  BG_HEADER: '#0096c8',
  BG_ITEM_HEADER: '#d0c198',
  BG_INPUT: 'white',
  C_M_SELECT_ITEM: '#303030'
}

const CSS_RULE = {
  CL_QUERY_ITEM: 'row__topic',
  CL_ROW_ITEM: "row__item",
  CL_SELECT_ITEM: 'm-select__item',
  CL_BT_FLAT_DIV: 'bt-flat__div',

  ICON: {},
  ICON_GITHUB: {},

  BG: {},
  BG_HEADER: {},
  SVG_RESIZE: {},
  ITEM_HEADER: {},
  R_DIALOG: {},

  INPUT: {},
  M_SELECT_ITEM: {},
  BT_FLAT: {},
  TAB: {
    color: '#303030'
  }

};

export const THEME_NAME = {
  DEFAULT : 'GREY',
  GREY : 'GREY',
  WHITE : 'WHITE',
  SAND: 'SAND'
};

const CL_PROPS = {
  CL_SCROLL_PANE: 'with-scroll',
  CL_BT_RAISED_DIV: 'bt-raise__div'
};

const _setClassNameTo = (suffix='') => {
  Object.keys(CL_PROPS).forEach(key => {
    CSS_RULE[key] = CL_PROPS[key] + suffix
  })
}

const _setBodyBg = conf => {
  document.body.style.backgroundColor = P.BG_BODY
};
const _crIcon = conf => {
  conf.ICON.backgroundColor = P.C_ICON
  conf.ICON_GITHUB.fill = P.C_ICON
};
const _crBg = conf => {
  conf.BG.backgroundColor = P.BG
};
const _crBgHeader = conf => {
  Object.assign(conf.BG_HEADER, {
    backgroundColor: P.BG_HEADER,
    color: P.BG
  })
};
const _crSvgResize = conf => {
  Object.assign(conf.SVG_RESIZE, {
    borderColor: P.BG,
    stroke: P.BG
  })
};
const _crItemHeader = conf => {
  conf.ITEM_HEADER.backgroundColor = P.BG_ITEM_HEADER
};
const _crRDialog = conf => {
  Object.assign(conf.R_DIALOG, {
    border: `solid 2px ${P.BG_HEADER}`,
    backgroundColor: P.BG
  })
};
const _crTab = conf => {
  Object.assign(conf.TAB, {
    backgroundColor: P.BG_HEADER
  })
};
const _crMSelectItem = conf => {
  Object.assign(conf.M_SELECT_ITEM, {
    color: P.C_M_SELECT_ITEM
  })
};
const _crBtFlat = conf => {
  conf.BT_FLAT.color = P.BG_HEADER
};
const _crInput = conf => {
  conf.INPUT.backgroundColor = P.BG_INPUT
};

const FN_STYLES = [
  _setBodyBg,
  _crIcon,
  _crBg,
  _crBgHeader, _crSvgResize, _crItemHeader,
  _crRDialog, _crTab,
  _crMSelectItem,
  _crBtFlat, _crInput
];

const _setStyleTo = conf => {
  FN_STYLES.forEach(fn => fn(conf))
};

const _setTheme = {
  [THEME_NAME.GREY]: () => {
    Object.assign(P, TH_GREY)
    _setClassNameTo()
    _setStyleTo(CSS_RULE)
  },
  [THEME_NAME.WHITE]: () => {
    Object.assign(P, TH_WHITE)
    _setClassNameTo('--white')
    _setStyleTo(CSS_RULE)
  },
  [THEME_NAME.SAND]: () => {
    Object.assign(P, TH_SAND)
    _setClassNameTo('--white')
    _setStyleTo(CSS_RULE)
  }
}

const theme = {
  themeName : THEME_NAME.DEFAULT,
  _init(){
    Object.assign(P, TH_GREY)
    _setClassNameTo()
    _setStyleTo(CSS_RULE, 'GREY')
  },
  getThemeName(){
    return this.themeName;
  },
  setThemeName(themeName){
    this.themeName = themeName
    _setTheme[themeName]()
  },
  createStyle(config){
     if (this.themeName !== config.themeName){
       config.style = config.createStyle(CSS_RULE, this.themeName)
       config.themeName = this.themeName
     }
     return config.style;
  }
};

theme._init()

export default theme
