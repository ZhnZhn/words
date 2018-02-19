import React from 'react';
//import PropTypes from "prop-types";

import InputSelect from '../zhn-select/InputSelect';
import STYLE from '../styles/DialogStyles';

const S = {
  CAPTION : {
    width: '120px'
  }
};

const RowInputSelect = ({ caption, ...rest }) => (
  <div style={STYLE.rowDiv}>
     <span style={{...STYLE.labelSpan, ...S.CAPTION}}>
       {caption}
     </span>
     <InputSelect
        width="250"
        {...rest}
     />
  </div>
);

/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  options : PropTypes.array,
  isUpdateOptions : PropTypes.bool,
  onSelect : PropTypes.func
}
*/

export default RowInputSelect
