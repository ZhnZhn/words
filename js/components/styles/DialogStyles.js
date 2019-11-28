'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DialogStyles = {
  //Dialogs, DatesFragments
  rowDiv: {
    //display: 'block',
    //margin: '5px'
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
    marginTop: '5px',
    marginLeft: '5px',
    marginBottom: '5px'
  },
  labelSpan: {
    //color: '#1B75BB',
    //color: '#009688',
    color: 'black',
    display: 'inline-block',
    //verticalAlign: 'top',
    textAlign: 'right',
    width: '110px',
    paddingRight: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    userSelect: 'none'
  },

  //ValidationMessagesFragment
  validationContainer: {
    paddingLeft: '10px',
    paddingTop: '5px',
    color: '#F44336'
  },
  validationMessageNumber: {
    display: 'inline-block',
    width: '22px',
    height: '22px',
    border: 'solid 2px #F44336',
    borderRadius: '50%',
    textAlign: 'center',
    marginRight: '5px'
  },

  crRowLabelStyle: function crRowLabelStyle() {
    var isShowLabels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    /*
    const rowStyle = isShowLabels
             ? { ...S.ROW }
             : { ...S.ROW, ...S.ROW_SHORT }
         , labelStyle = isShowLabels
             ? { ...S.LABEL }
             : { ...S.LABEL, ...S.NONE };
    return { rowStyle, labelStyle };
    */
    return {
      rowStyle: DialogStyles.rowDiv,
      labelStyle: DialogStyles.labelSpan
    };
  }

};

exports.default = DialogStyles;
//# sourceMappingURL=DialogStyles.js.map