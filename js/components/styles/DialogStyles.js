"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var DialogStyles = {
  //Dialogs, DatesFragments
  rowDiv: {
    display: 'flex',
    alignItems: 'center',
    margin: 5
  },
  labelSpan: {
    color: 'black',
    display: 'inline-block',
    textAlign: 'right',
    width: 110,
    paddingRight: 5,
    fontSize: '16px',
    fontWeight: 'bold',
    userSelect: 'none'
  },
  //ValidationMessagesFragment
  validationContainer: {
    paddingLeft: 10,
    paddingTop: 5,
    color: '#f44336'
  },
  validationMessageNumber: {
    display: 'inline-block',
    width: 22,
    height: 22,
    border: 'solid 2px #F44336',
    borderRadius: '50%',
    textAlign: 'center',
    marginRight: 5
  },
  crRowLabelStyle: function crRowLabelStyle(isShowLabels) {
    if (isShowLabels === void 0) {
      isShowLabels = true;
    }

    return {
      rowStyle: DialogStyles.rowDiv,
      labelStyle: DialogStyles.labelSpan
    };
  }
};
var _default = DialogStyles;
exports["default"] = _default;
//# sourceMappingURL=DialogStyles.js.map