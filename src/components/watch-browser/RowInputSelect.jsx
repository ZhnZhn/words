//import PropTypes from "prop-types";

import InputSelect from '../zhn-m-input/InputSelect'

const STYLE_CONFIG = {
  ROOT: {
    width: 250
  }
};

const RowInputSelect = (props) => (
   <InputSelect
      styleConfig={STYLE_CONFIG}
      {...props}
   />
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
