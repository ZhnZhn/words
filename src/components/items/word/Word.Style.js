
const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: (R, themeName) => {
    return {
      HEADER: {
        ...R.ITEM_HEADER
      },
       DESCR: {
         lineHeight: 1.5,
         paddingBottom: 4
       }
    };
  }
};

export default styleConfig
