
const _assign = Object.assign;

const DF_BGC = "#808080"
const DF_C_BGC = "#4d4d4d"
const DF_BF_C = "#3270b4"
const DF_IH_BGC = "#404040"
const DF_L_C = "#4d4d4d"

const P = {};
const BG_HEADER_GREY = DF_BF_C
const TH_GREY = {
  'bgc': DF_BGC,
  'c-bgc': DF_C_BGC,
  'bf-c': BG_HEADER_GREY,
  'ih-bgc': DF_IH_BGC,
  'l-c': DF_L_C
}

const _TH_LIGHT = {
  'bgc': '#a9a9a9', //'darkgrey'
  'bf-c': '#0096c8'
}

const TH_WHITE = {
  ..._TH_LIGHT,
  'c-bgc': '#ebf1f5',
  'ih-bgc': '#e6ecf0',
  'l-c': 'grey'
};
const TH_SAND = {
  ..._TH_LIGHT,
  'c-bgc': '#e8e0cb',
  'ih-bgc': '#d0c198',
  'l-c': '#e8e0cb'
}

const CSS_RULE = {
  CL_QUERY_ITEM: 'row__topic',  
  CL_BT_FLAT_DIV: 'bt-flat__div'
};

export const THEME_NAME = {
  DF: 'GREY',
  GREY: 'GREY',
  WHITE: 'WHITE',
  SAND: 'SAND'
};

const CUSTOM_CSS_PROPERTY_CONFIGS = [
  ["bgc", DF_BGC],
  ["c-bgc", DF_C_BGC],
  ["bf-c", DF_BF_C],
  ["ih-bgc", DF_IH_BGC],
  ["l-c", DF_L_C]
]

const _setStyleProperties = (conf, P) => {
  const _style = document.body.style;
  CUSTOM_CSS_PROPERTY_CONFIGS.forEach(([propName, dfValue]) => {
    _style.setProperty(
       '--' + propName,
       P[propName] || dfValue
    )
  })
};

const _setTheme = {
  [THEME_NAME.GREY]: () => {
    _assign(P, TH_GREY)
    _setStyleProperties(CSS_RULE, TH_GREY)
  },
  [THEME_NAME.WHITE]: () => {
    _assign(P, TH_WHITE)
    _setStyleProperties(CSS_RULE, TH_WHITE)
  },
  [THEME_NAME.SAND]: () => {
    _assign(P, TH_SAND)
    _setStyleProperties(CSS_RULE, TH_SAND)
  }
}

const theme = {
  themeName: THEME_NAME.DF,
  _init(){
    _assign(P, TH_GREY)
    _setStyleProperties(CSS_RULE, 'GREY')
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
