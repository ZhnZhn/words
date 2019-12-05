
const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: (R, themeName) => {
    return {
      HEADER: {
        ...R.ITEM_HEADER
      },
       DESCR: {
         lineHeight: 2.2,
         paddingRight: 8
       }
    };
  }
};

export default styleConfig
