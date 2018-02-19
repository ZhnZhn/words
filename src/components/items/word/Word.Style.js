
//230, 236, 240

const styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: (R, themeName) => {
    return {
      HEADER: {
        ...R.ITEM_HEADER
      },
       DESCR: {
         lineHeight: 2.2
       }
    };
  }
}

export default styleConfig
