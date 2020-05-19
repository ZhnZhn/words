const DialogStyles = {
  //Dialogs, DatesFragments
  rowDiv: {
    display: 'flex',
    alignItems: 'center',
    margin: 5    
  },
  labelSpan : {
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
  validationMessageNumber : {
    display: 'inline-block',
    width: 22,
    height: 22,
    border: 'solid 2px #F44336',
    borderRadius: '50%',
    textAlign: 'center',
    marginRight: 5
  },

  crRowLabelStyle: (isShowLabels=true) => {
    return {
      rowStyle: DialogStyles.rowDiv,
      labelStyle: DialogStyles.labelSpan
    }
  },

}

export default DialogStyles
