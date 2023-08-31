
const _assign = Object.assign
, _getObjectKeys = Object.keys;

const DF_C_BGC = "#4d4d4d"
const DF_BF_C = "#3270b4"
const DF_L_C = "#4d4d4d"

const P = {};
const BG_HEADER_GREY = DF_BF_C
const TH_GREY = {
  BG_BODY: '#808080',
  BG: '#4d4d4d',
  BG_HEADER: BG_HEADER_GREY,
  BG_ITEM_HEADER: '#404040',

  'c-bgc': DF_C_BGC,
  'bf-c': BG_HEADER_GREY,
  'l-c': DF_L_C
}

const BG_HEADER_LIGHT = '#0096c8'
const _TH_LIGHT = {
  BG_BODY: 'darkgrey',
  BG_HEADER: BG_HEADER_LIGHT,

  'bf-c': BG_HEADER_LIGHT
}

const TH_WHITE = {
  ..._TH_LIGHT,
  BG: '#ebf1f5',
  BG_ITEM_HEADER: '#e6ecf0',

  'c-bgc': '#ebf1f5',
  'l-c': 'grey'
};
const TH_SAND = {
  ..._TH_LIGHT,
  BG: '#e8e0cb',
  BG_ITEM_HEADER: '#d0c198',

  'c-bgc': '#e8e0cb',
  'l-c': '#e8e0cb'
}

const CSS_RULE = {
  CL_QUERY_ITEM: 'row__topic',
  CL_ROW_ITEM: "row__item",
  CL_SELECT_ITEM: 'm-select__item',
  CL_BT_FLAT_DIV: 'bt-flat__div',

  BG: {},
  BG_HEADER: {},
  ITEM_HEADER: {}
};

export const THEME_NAME = {
  DF: 'GREY',
  GREY: 'GREY',
  WHITE: 'WHITE',
  SAND: 'SAND'
};

const CL_PROPS = {
  CL_SCROLL_PANE: 'with-scroll'
};

const _setClassNameTo = (suffix='') => {
  _getObjectKeys(CL_PROPS).forEach(key => {
    CSS_RULE[key] = CL_PROPS[key] + suffix
  })
}


const _crBg = conf => {
  conf.BG.backgroundColor = P.BG
};
const _crBgHeader = conf => {
  _assign(conf.BG_HEADER, {
    backgroundColor: P.BG_HEADER,
    color: P.BG
  })
};

const _crItemHeader = conf => {
  conf.ITEM_HEADER.backgroundColor = P.BG_ITEM_HEADER
};

const CUSTOM_CSS_PROPERTY_CONFIGS = [
  ["c-bgc", DF_C_BGC],
  ["bf-c", DF_BF_C],
  ["l-c", DF_L_C]
]

const _setStyleProperties = (conf, P) => {
  const _style = document.body.style;
  _style.backgroundColor = P.BG_BODY
  CUSTOM_CSS_PROPERTY_CONFIGS.forEach(([propName, dfValue]) => {
    _style.setProperty(
       '--' + propName,
       P[propName] || dfValue
    )
  })
};

const FN_STYLES = [
  _crBg,
  _crBgHeader,
  _crItemHeader,
  _setStyleProperties
];

const _setStyleTo = (
  conf,
  colorPallete
) => {
  FN_STYLES.forEach(fn => fn(conf, colorPallete))
};

const _setTheme = {
  [THEME_NAME.GREY]: () => {
    _assign(P, TH_GREY)
    _setClassNameTo()
    _setStyleTo(CSS_RULE, TH_GREY)
  },
  [THEME_NAME.WHITE]: () => {
    _assign(P, TH_WHITE)
    _setClassNameTo('--white')
    _setStyleTo(CSS_RULE, TH_WHITE)
  },
  [THEME_NAME.SAND]: () => {
    _assign(P, TH_SAND)
    _setClassNameTo('--white')
    _setStyleTo(CSS_RULE, TH_SAND)
  }
}

const theme = {
  themeName: THEME_NAME.DF,
  _init(){
    _assign(P, TH_GREY)
    _setClassNameTo()
    _setStyleTo(CSS_RULE, 'GREY')
  },
  getThemeName(){
    return this.themeName;
  },
  setThemeName(themeName){
    this.themeName = themeName || THEME_NAME.DF
    _setTheme[this.themeName]()
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
