
const fnArr = {

  findIndexByProp: (propName) => (arr, propValue) => {
     if (!Array.isArray(arr)){
       return -1;
     }

     return arr.findIndex(
       item => item[propName] === propValue
     );
  },

  isSameByProp: (propName) => (arr, propValue) => {
      if (!Array.isArray(arr)){
        return false;
      }

      const index = arr.findIndex(
        item => item[propName] === propValue
      );

      return (index === -1)
        ? false
        : true;
  }

};

export default fnArr
